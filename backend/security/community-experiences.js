/**
 * Security hardening: community-experiences
 * Task: Run security hardening pass for community experiences: secret rotation, dependen
 */
'use strict';

/**
 * Secret rotation checklist for community-experiences:
 *  1. Rotate API keys every 90 days
 *  2. Audit dependency versions with `npm audit`
 *  3. Apply penetration test fixes from latest security scan
 *  4. Ensure all secrets sourced from env, never hardcoded
 */

function validateEnvSecrets(requiredKeys = []) {
  const missing = requiredKeys.filter((k) => !process.env[k]);
  if (missing.length) {
    throw new Error(`Missing required secrets: ${missing.join(', ')}`);
  }
}

function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.replace(/<[^>]*>/g, '').trim();
}

function applySecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Content-Security-Policy', "default-src 'self'");
}

module.exports = { validateEnvSecrets, sanitizeInput, applySecurityHeaders };
