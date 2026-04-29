import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { getLead, upsertLead } from '../lib/api'
import { CAMPS } from '../content/camps'
import { Section } from '../ui/Section'

const baseSchema = z.object({
  guardianName: z.string().min(2, 'Escribe tu nombre'),
  email: z.string().email('Email no válido'),
  phone: z.string().min(6, 'Teléfono no válido'),
  kidName: z.string().min(2, 'Nombre del peque'),
  kidAge: z.number().int().min(0).max(18),
  camp: z.string().optional(),
  consent: z.boolean().refine((v) => v, 'Necesitamos tu consentimiento'),
})

const campSchema = baseSchema.extend({
  camp: z.string().min(1, 'Selecciona un campamento válido'),
})

type FormValues = z.infer<typeof baseSchema>



const AGE_OPTIONS = Array.from({ length: 19 }, (_, i) => i)
const STEPS = ['Tus datos', 'Datos del peque']

type IntakeFormType = 'general' | 'campamentos'

export function Intake({ formType = 'general' }: { formType?: IntakeFormType }) {
  const isCampamentos = formType === 'campamentos'
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const qc = useQueryClient()
  const leadQuery = useQuery({ queryKey: ['lead'], queryFn: getLead })

  // Validate the URL parameter strictly against our known camps
  const campSlugFromUrl = searchParams.get('camp') ?? ''
  const urlCamp = CAMPS.find((camp) => camp.slug === campSlugFromUrl)

  // If the parameter is invalid, we can optionally clear it from the URL to avoid confusion
  useEffect(() => {
    if (campSlugFromUrl && !urlCamp) {
      const newParams = new URLSearchParams(searchParams)
      newParams.delete('camp')
      setSearchParams(newParams, { replace: true })
    }
  }, [campSlugFromUrl, urlCamp, searchParams, setSearchParams])

  const defaults = useMemo<FormValues>(
    () => ({
      guardianName: leadQuery.data?.guardianName ?? '',
      email: leadQuery.data?.email ?? '',
      phone: leadQuery.data?.phone ?? '',
      kidName: leadQuery.data?.kidName ?? '',
      kidAge: leadQuery.data?.kidAge ?? 8,
      camp: leadQuery.data?.camp ?? (isCampamentos && urlCamp ? urlCamp.slug : ''),
      consent: leadQuery.data?.consent ?? false,
    }),
    [leadQuery.data, isCampamentos, urlCamp],
  )

  const form = useForm<FormValues>({
    resolver: zodResolver(isCampamentos ? campSchema : baseSchema),
    defaultValues: { guardianName: '', email: '', phone: '', kidName: '', kidAge: 8, camp: '', consent: false },
    mode: 'onChange',
  })

  useEffect(() => { form.reset(defaults) }, [defaults, form])

  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      await upsertLead({ ...values, stage: 'submitted' })
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['lead'] })
      toast.success('¡Listo! Hemos recibido tu solicitud.')
      navigate('/contacto')
    },
  })


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Visual progress based on filled sections
  const progress = useMemo(() => {
    const s1 = form.watch('guardianName') && form.watch('email') && form.watch('phone')
    const s2 = form.watch('kidName') && form.watch('kidAge') !== undefined && (!isCampamentos || form.watch('camp'))
    const s3 = form.watch('consent')
    return [!!s1, !!s2, !!s3]
  }, [form, isCampamentos])

  return (
    <Section bgColor="slate" className="min-h-screen py-12">
      <motion.div 
        className="mx-auto max-w-2xl space-y-8" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        {/* Header & Progress */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {isCampamentos ? 'Reserva tu campamento' : 'Empieza tu aventura'}
          </h1>
         
          
          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
            <div className="mb-3 flex justify-between px-2">
              {STEPS.map((step, i) => (
                <span
                  key={step}
                  className={`text-sm font-bold transition-colors ${
                    progress[i] ? 'text-brand' : 'text-slate-400'
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {STEPS.map((step, i) => (
                <div
                  key={step}
                  className={`h-3 flex-1 rounded-full transition-all duration-500 ${
                    progress[i] ? 'bg-brand' : 'bg-slate-100'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="space-y-6" noValidate>
          {/* Section 1: Guardian */}
          <motion.section variants={itemVariants} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-black text-slate-900">1. Tus datos</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <IntakeField label="Nombre completo" id="guardianName" error={form.formState.errors.guardianName?.message}>
                  <input
                    id="guardianName"
                    className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-5 py-4 text-base outline-none transition-all focus:border-brand focus:bg-white"
                    placeholder="Ej. Ana García"
                    autoComplete="name"
                    {...form.register('guardianName')}
                  />
                </IntakeField>
              </div>
              <IntakeField label="Email" id="email" error={form.formState.errors.email?.message}>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-5 py-4 text-base outline-none transition-all focus:border-brand focus:bg-white"
                  placeholder="ana@email.com"
                  inputMode="email"
                  autoComplete="email"
                  {...form.register('email')}
                />
              </IntakeField>
              <IntakeField label="Teléfono" id="phone" error={form.formState.errors.phone?.message}>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-5 py-4 text-base outline-none transition-all focus:border-brand focus:bg-white"
                  placeholder="600 000 000"
                  inputMode="tel"
                  autoComplete="tel"
                  {...form.register('phone')}
                />
              </IntakeField>
            </div>
          </motion.section>

          {/* Section 2: Kid */}
          <motion.section variants={itemVariants} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-black text-slate-900">2. Datos del peque</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <IntakeField label="Nombre del niño/a" id="kidName" error={form.formState.errors.kidName?.message}>
                  <input
                    id="kidName"
                    className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-5 py-4 text-base outline-none transition-all focus:border-brand focus:bg-white"
                    placeholder="¿Cómo se llama?"
                    autoComplete="off"
                    {...form.register('kidName')}
                  />
                </IntakeField>
              </div>
              {isCampamentos && (
                <div className="sm:col-span-2">
                  <IntakeField label="Campamento de interés" id="camp" error={form.formState.errors.camp?.message as string | undefined}>
                    <select
                      id="camp"
                      className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-5 py-4 text-base outline-none transition-all focus:border-brand focus:bg-white cursor-pointer appearance-none"
                      {...form.register('camp')}
                    >
                      <option value="" disabled>Selecciona un campamento</option>
                      {CAMPS.map((camp) => (
                        <option key={camp.slug} value={camp.slug}>{camp.title}</option>
                      ))}
                    </select>
                  </IntakeField>
                </div>
              )}
              <div className="sm:col-span-2">
                <IntakeField label="Edad" id="kidAge" error={form.formState.errors.kidAge?.message}>
                  <select
                    id="kidAge"
                    className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-5 py-4 text-base outline-none transition-all focus:border-brand focus:bg-white cursor-pointer appearance-none"
                    {...form.register('kidAge', { valueAsNumber: true })}
                  >
                    {AGE_OPTIONS.map((age) => (
                      <option key={age} value={age}>{age === 0 ? 'Menos de 1 año' : `${age} año${age !== 1 ? 's' : ''}`}</option>
                    ))}
                  </select>
                </IntakeField>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Interests & Consent */}
          <motion.section variants={itemVariants} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
            

            <label className="mt-8 flex cursor-pointer items-start gap-4 rounded-2xl bg-brand/5 border border-brand/10 p-5 transition-colors hover:bg-brand/10">
              <input
                type="checkbox"
                className="mt-1 h-6 w-6 shrink-0 rounded-md border-brand/20 accent-brand transition-colors"
                {...form.register('consent')}
              />
              <div>
                <div className="text-base font-bold text-slate-900">
                  Acepto que me contacten para recibir información
                </div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Trataremos tus datos de forma segura y solo para este fin. Puedes revisar nuestra{' '}
                  <a href="/privacidad" className="font-bold text-brand hover:underline">política de privacidad</a>.
                </div>
                {form.formState.errors.consent?.message && (
                  <p role="alert" className="mt-2 text-sm font-bold text-rose-600">
                    {form.formState.errors.consent.message}
                  </p>
                )}
              </div>
            </label>
          </motion.section>

          {/* Submit */}
          <motion.div variants={itemVariants} className="pt-4">
            <button
              type="submit"
              disabled={!form.formState.isValid || mutation.isPending}
              className="group flex w-full min-h-[64px] items-center justify-center gap-3 rounded-full bg-slate-900 px-8 text-xl font-black text-white shadow-xl transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-900"
            >
              {mutation.isPending ? (
                <>
                  <svg className="h-6 w-6 animate-spin text-white/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Procesando...
                </>
              ) : (
                <>
                  Enviar Solicitud
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </>
              )}
            </button>
            <p className="mt-4 text-center text-sm font-medium text-slate-500">
              🔒 Tus datos están protegidos y encriptados.
            </p>
          </motion.div>
        </form>
      </motion.div>
    </Section>
  )
}

function IntakeField({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-base font-bold text-slate-900 ml-2">{label}</label>
        {error && <span role="alert" className="text-sm font-bold text-rose-600 mr-2">{error}</span>}
      </div>
      {children}
    </div>
  )
}