# Servidor de verificación de emails (opcional)

Este pequeño servidor permite analizar si un correo pertenece a un dominio desechable (lista local) y comprobar si el dominio tiene registros MX.

Archivos principales:

- `disposable_domains.txt` — lista de dominios desechables (una entrada por línea).
- `emailChecks.js` — utilidades para cargar la lista y analizar un email.
- `index.js` — servidor Express con endpoint `POST /api/check-email`.

Uso rápido:

1. Ir a la carpeta `server`:

```bash
cd webkids/server
```

2. Instalar dependencias e iniciar (esto es opcional y separado del frontend):

```bash
npm init -y
npm install express
node index.js
```

3. Probar con curl:

```bash
curl -X POST http://localhost:4000/api/check-email -H "Content-Type: application/json" -d '{"email":"test@mailinator.com"}'
```

Respuesta de ejemplo:

```json
{
  "ok": true,
  "result": {
    "ok": true,
    "domain": "mailinator.com",
    "disposable": true,
    "hasMx": true,
    "likelyDisposable": true
  }
}
```

Notas:

- El servidor es independiente del frontend; no modifica la aplicación principal.
- Recomiendo combinar esta comprobación con una API externa (Kickbox, AbstractAPI, etc.) para mayor exactitud si lo necesitas.
