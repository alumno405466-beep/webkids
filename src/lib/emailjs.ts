import emailjs from '@emailjs/browser'

// EmailJS Configuration
const PUBLIC_KEY = 'WfVaaFQM9XIpeHzEp'
const SERVICE_ID = 'service_bu0h9oo'
const AUTO_REPLY_TEMPLATE = 'template_goziuey'
const OWNER_TEMPLATE = 'template_6tvebzw'

// Initialize EmailJS
emailjs.init(PUBLIC_KEY)

export interface EmailParams {
  guardianName: string
  email: string
  phone: string
  kidName: string
  kidAge: number
  camp?: string
}

export async function sendIntakeEmails(data: EmailParams) {
  try {
    // Email 1: Auto-reply to user

      // Many templates expect the recipient variable to be named `email` and the
      // sender name to be `name` ({{email}} and {{name}} in the template). We
      // provide those keys so the template can use them directly.
      const autoReplyPromise = emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE, {
        email: data.email,
        name: data.guardianName,
        kid_name: data.kidName,
        kid_age: data.kidAge,
        phone: data.phone,
        camp: data.camp || 'No especificado',
      })

    // Email 2: Notification to owner (destinatario fijo)
    // La plantilla del propietario espera estos campos:
    // {{username}}, {{email}}, {{phone}}, {{namekid}}, {{camp}}, {{age}}, {{message}}
    const OWNER_EMAIL = 'fegarled@gmail.com'
    const ownerNotificationPromise = emailjs.send(SERVICE_ID, OWNER_TEMPLATE, {
      to_email: OWNER_EMAIL,
      // Campos según la nomenclatura que usas en la plantilla
      username: data.guardianName,
      email: data.email,
      phone: data.phone,
      namekid: data.kidName,
      camp: data.camp || 'No especificado',
      age: String(data.kidAge),
      // No hay campo "message" en el formulario; lo dejamos vacío para la plantilla
      message: '', //Preparado en caso de que se ponga la posibilidad de poner un mensaje por parte del usuario.
      submission_date: new Date().toLocaleDateString('es-ES'),
    })

    // Wait for both emails to be sent
    await Promise.all([autoReplyPromise, ownerNotificationPromise])

    return { success: true }
  } catch (error) {
    console.error('Error sending emails:', error)
    throw error
  }
}
