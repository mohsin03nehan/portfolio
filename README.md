# Muhammad Mohsin Nehan — Portfolio

**Live site:** https://mohsinnehan.vercel.app
**Repo:** https://github.com/mohsin03nehan/portfolio

A personal portfolio website for Muhammad Mohsin Nehan, a Frontend Developer currently interning as a Front-End AI Engineer at FlyRank AI. The site presents his profile, skills, projects, experience, and education, and gives visitors (recruiters, clients, or collaborators) a fast way to see his work and get in touch.

## Who it's for

- **Recruiters / hiring managers** who want a quick, credible snapshot of skills and shipped projects.
- **Clients** looking to commission frontend / AI-integrated web work.
- **Fellow developers** who want to see the code and how the site is put together.

## Features

- Single-page layout with sections: About, Services, Skills, Projects, Experience, Education, Contact
- Responsive design — tested on both desktop and mobile
- Dark/light theme toggle
- Downloadable CV
- Project cards with live demo and GitHub links
- Custom favicon, social share preview (Open Graph tags), and SEO-friendly titles/meta descriptions
- Vercel Analytics integration for visit tracking

## Tech Stack

- **HTML5** — page structure and semantic markup
- **CSS3** — styling, responsive layout, animations, dark/light theme
- **Vanilla JavaScript** — interactivity (theme toggle, navigation, dynamic content)
- **Vercel** — hosting and deployment (static site, HTTPS by default)
- **Vercel Analytics** — pageview tracking

No frontend framework or build step is used — the site is plain static HTML/CSS/JS, which keeps setup and deployment simple.

## Setup (for a stranger to reproduce locally)

You only need a web browser and, optionally, a local server (no build tools or dependencies required).

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohsin03nehan/portfolio.git
   cd portfolio
   ```

2. **Open it directly**, or serve it locally (recommended, so relative paths and scripts behave exactly like production):
   ```bash
   # Option A: just open the file
   # Double-click index.html, or:
   start index.html      # Windows
   open index.html        # macOS

   # Option B: serve it with a lightweight local server
   npx serve .
   # or, with Python:
   python -m http.server 5500
   ```

3. **Visit** `http://localhost:5500` (or whatever port your server prints) in your browser.

That's the entire setup — there is no `npm install`, environment variables, or API keys required to run the site locally.

## Deploying your own copy

1. Push the repo to your own GitHub account.
2. Go to [vercel.com](https://vercel.com), sign in, and click **New Project**.
3. Import the GitHub repo — Vercel auto-detects it as a static site, no build settings needed.
4. Click **Deploy**. Vercel provisions a free `*.vercel.app` subdomain with HTTPS automatically.
5. (Optional) Add a custom domain under **Project → Settings → Domains**.

## Usage examples

- **View the live portfolio:** open https://mohsinnehan.vercel.app and use the top navigation (About, Services, Skills, Projects, Experience, Education, Contact) to jump between sections.
- **Download the CV:** click the **"Download CV"** button in the top-right of the navbar.
- **View a project in depth:** scroll to the **Projects** section and click a project's **live demo** or **GitHub** link to open it in a new tab.
- **Toggle theme:** click the moon/sun icon in the navbar to switch between dark and light mode.

## Architecture sketch

```
portfolio/
├── index.html          # Single-page site — all sections (About, Services,
│                        # Skills, Projects, Experience, Education, Contact)
├── style.css            # All styling: layout, responsive breakpoints, theme
├── script.js             # Interactivity: nav, theme toggle, small UI behaviors
├── images/               # Favicon, profile photo, project screenshots/logos
├── Mohsin_Nehan_Resume.pdf   # Downloadable CV
├── robots.txt / sitemap.xml  # Basic SEO
└── README.md
```

Flow: the browser requests `index.html` → the single HTML file loads `style.css` and `script.js` → JavaScript wires up navigation and the theme toggle → Vercel Analytics' script (loaded at the bottom of `index.html`) silently records pageviews in the background. No backend, no database, no API calls — everything is static and client-side.

## Eval results (v2)

Tested with Google PageSpeed Insights on the live production URL (`https://mohsinnehan.vercel.app`) on Aug 30, 2026:

| Category | Desktop | Mobile |
|---|---|---|
| Performance | 89 | 68 |
| Accessibility | 94 | 94 |
| Best Practices | 96 | 96 |
| SEO | 100 | 100 |

**Notes:**
- Accessibility, Best Practices, and SEO are strong on both device types.
- Desktop performance (89) is solid; mobile performance (68) is lower, mainly driven by a higher Largest Contentful Paint (12.7s on mobile vs. 2.2s on desktop) under simulated slow mobile network throttling.
- Cumulative Layout Shift is near-zero on both (0.002 desktop, 0 mobile), meaning the layout doesn't visually jump while loading.

## Limitations

- **Mobile performance** is noticeably slower than desktop under throttled network conditions (see eval results above) — likely due to unoptimized/uncompressed images and no lazy-loading yet. This is the top priority for a v3 pass.
- **Vercel Analytics dashboard** is enabled and the tracking script is confirmed present on the live site, but pageview data has not yet appeared on the free (Hobby) plan — this may need more time to populate, or a plan upgrade for full visibility.
- **No backend/contact form handler** — the Contact section currently links out (e.g., to email/social) rather than submitting a form directly from the site.
- **No automated tests** — the site is verified manually and via PageSpeed Insights rather than a test suite, since it's a static content site with no application logic.

## Author

**Muhammad Mohsin Nehan** 
Portfolio: https://mohsinnehan.vercel.app
