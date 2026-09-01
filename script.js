// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
  });
}

// SKILLS MARQUEE
// All icons are self-contained inline SVGs (no external CDN calls), so every
// logo always renders the same way for every visitor, on every network.
const skills = [
  { name: 'React', svg: '<svg viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>' },
  { name: 'JavaScript', svg: '<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><text x="16" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="12" fill="#111">JS</text></svg>' },
  { name: 'TypeScript', svg: '<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#3178C6"/><text x="16" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">TS</text></svg>' },
  { name: 'Next.js', svg: '<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#111"/><text x="16" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">N</text></svg>' },
  { name: 'HTML5', svg: '<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#E34F26"/><text x="16" y="21" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">HTML</text></svg>' },
  { name: 'CSS3', svg: '<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#1572B6"/><text x="16" y="21" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">CSS</text></svg>' },
  { name: 'Tailwind CSS', svg: '<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0B1220"/><path transform="translate(4,8) scale(0.83)" fill="#38BDF8" d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35-.98-1-2.11-2.15-4.59-2.15z"/></svg>' },
  { name: 'Python', svg: '<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#fff"/><text x="16" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="11" fill="#306998">Py</text></svg>' },
  { name: 'Git', svg: '<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#F05033"/><g fill="#fff"><circle cx="10" cy="22" r="2.4"/><circle cx="22" cy="10" r="2.4"/><circle cx="22" cy="20" r="2.4"/><path d="M10 22 L22 10 M22 12 L22 18" stroke="#fff" stroke-width="1.6"/></g></svg>' },
  { name: 'GitHub', svg: '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#fff"/><path fill="#111" transform="translate(2,2) scale(0.83)" d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.28 9.28 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>' },
  { name: 'VS Code', svg: '<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#007ACC"/><text x="16" y="21" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">VS</text></svg>' },
  { name: 'npm', svg: '<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#CB3837"/><text x="16" y="21" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">npm</text></svg>' },
  { name: 'SQL', svg: '<svg viewBox="0 0 24 24"><path d="M12 3c-4.4 0-8 1.1-8 2.5v13C4 19.9 7.6 21 12 21s8-1.1 8-2.5v-13C20 4.1 16.4 3 12 3zm0 2c3.9 0 6 .9 6 1.5S15.9 8 12 8s-6-.9-6-1.5S8.1 5 12 5z" fill="%23336791"/></svg>' },
  { name: 'Vercel', svg: '<svg viewBox="0 0 24 24"><path d="M12 2L2 20h20L12 2z"/></svg>' },
];

function buildMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  const chip = (s) => {
    const iconHtml = s.icon
      ? `<img src="${s.icon}" alt="${s.name}" onerror="this.parentElement.style.display='none'">`
      : s.svg;
    return `<div class="skill-chip"><div class="icon-box">${iconHtml}</div><span>${s.name}</span></div>`;
  };
  const html = skills.map(chip).join('');
  track.innerHTML = html + html; // duplicate for seamless loop
}
buildMarquee();

// 3D TILT ON PROJECT CARDS
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -6;
    const rotateY = ((x / rect.width) - 0.5) * 6;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
  });
});

// CONTACT FORM
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    const status = document.getElementById('formStatus');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Client-side edge-case validation
    if (name.length < 2 || name.length > 80) {
      status.textContent = 'Please enter a valid name.';
      status.className = 'status-err';
      return;
    }

    if (message.length < 10 || message.length > 2000) {
      status.textContent = 'Message must be between 10 and 2000 characters.';
      status.className = 'status-err';
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      status.className = 'status-err';
      return;
    }

    btn.disabled = true;
    status.textContent = 'Sending...';
    status.className = '';

    const payload = { name, email, message };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      let data = {};
      try {
        data = await res.json();
      } catch (_) {
        data = {};
      }

      if (res.ok && data.success) {
        status.textContent = 'Message sent — thank you!';
        status.className = 'status-ok';
        contactForm.reset();
      } else {
        status.textContent = 'Something went wrong. Please try emailing directly.';
        status.className = 'status-err';
      }
    } catch (err) {
      status.textContent = 'Network error. Please try emailing directly.';
      status.className = 'status-err';
    } finally {
      btn.disabled = false;
    }
  });
}
