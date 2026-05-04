# Top Notch Southwest Roofing — Secure Zapier Version

## What changed
- The Zapier webhook is no longer exposed in GitHub.
- The public form submits to `/api/lead`.
- `/api/lead` reads the Zapier webhook from a Vercel environment variable.
- Visitors are redirected to `/thank-you` after submitting.

## Vercel setup
In Vercel:
Project → Settings → Environment Variables

Add:

Name:
ZAPIER_WEBHOOK_URL

Value:
PASTE YOUR NEW ZAPIER WEBHOOK URL HERE

Apply to:
Production, Preview, Development

Then redeploy.

## Security
Because GitGuardian detected the old webhook in GitHub, create a NEW Zapier Catch Hook URL and use the NEW URL in Vercel. Do not reuse the leaked webhook.
