const express = require('express')
const { analyzeEmail } = require('./emailChecks')

const app = express()
app.use(express.json())

app.post('/api/check-email', async (req, res) => {
  const { email } = req.body
  if (!email) return res.status(400).json({ ok: false, reason: 'no_email' })
  try {
    const result = await analyzeEmail(email)
    return res.json({ ok: true, result })
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message })
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Email-check server listening on http://localhost:${port}`))
