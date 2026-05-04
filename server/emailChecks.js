const fs = require('fs').promises
const path = require('path')
const dns = require('dns').promises

let disposableSet = null

async function loadDisposableList() {
  if (disposableSet) return disposableSet
  const file = path.join(__dirname, 'disposable_domains.txt')
  try {
    const txt = await fs.readFile(file, 'utf8')
    disposableSet = new Set(
      txt
        .split(/\r?\n/)
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean)
    )
    return disposableSet
  } catch (err) {
    disposableSet = new Set()
    return disposableSet
  }
}

function getDomain(email) {
  if (!email || typeof email !== 'string') return null
  const parts = email.split('@')
  return parts.length === 2 ? parts[1].toLowerCase() : null
}

async function isDisposableDomain(email) {
  const domain = getDomain(email)
  if (!domain) return false
  const list = await loadDisposableList()
  if (list.has(domain)) return true
  // check root entries: e.g. list contains example.com and domain is sub.example.com
  for (const d of list) {
    if (domain === d) return true
    if (domain.endsWith('.' + d)) return true
  }
  return false
}

async function hasValidMx(domain) {
  if (!domain) return false
  try {
    const mx = await dns.resolveMx(domain)
    return Array.isArray(mx) && mx.length > 0
  } catch (err) {
    return false
  }
}

async function analyzeEmail(email) {
  const domain = getDomain(email)
  if (!domain) return { ok: false, reason: 'invalid_email' }
  const disposable = await isDisposableDomain(email)
  const mx = await hasValidMx(domain)
  return {
    ok: true,
    domain,
    disposable,
    hasMx: mx,
    likelyDisposable: disposable || !mx,
  }
}

module.exports = {
  loadDisposableList,
  getDomain,
  isDisposableDomain,
  hasValidMx,
  analyzeEmail,
}
