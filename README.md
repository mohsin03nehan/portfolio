# Portfolio

Personal developer portfolio — live at [mohsinnehan.vercel.app](https://mohsinnehan.vercel.app)

## Stack
- Static HTML, CSS, JavaScript (no framework — kept intentionally minimal for a landing page)
- Contact form backed by a Vercel serverless function (`/api/contact.js`), sending email via [Resend](https://resend.com)
- Hosted on Vercel, connected to this GitHub repo for auto-deploy on push

## Structure
```
index.html      → page structure/content
style.css       → styling (monochrome identity: JetBrains Mono + Inter)
script.js       → copy-to-clipboard email + contact form submit handling
api/contact.js  → serverless function that emails form submissions
```

## Why this repo is minimal
This is the landing page only. The actual project work it links to —
[Resume Tailor](https://github.com/mohsin03nehan/resume-tailor),
Techova, and ZEBAYSH — are separate repos with their own structure,
built with React/Next.js and Tailwind CSS.

## Contact
[nehanmohsin890@gmail.com](mailto:nehanmohsin890@gmail.com)
