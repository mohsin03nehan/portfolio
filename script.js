// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
  });
}

// SKILLS MARQUEE
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const skills = [
  { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
  { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
  { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
  { name: 'Next.js', icon: `${DEVICON}/nextjs/nextjs-original.svg` },
  { name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg` },
  { name: 'CSS3', icon: `${DEVICON}/css3/css3-original.svg` },
  { name: 'Tailwind CSS', icon: `${DEVICON}/tailwindcss/tailwindcss-plain.svg` },
  { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
  { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
  { name: 'GitHub', icon: `${DEVICON}/github/github-original.svg` },
  { name: 'VS Code', icon: `${DEVICON}/vscode/vscode-original.svg` },
  { name: 'npm', icon: `${DEVICON}/npm/npm-original-wordmark.svg` },
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
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const status = document.getElementById('formStatus');
  btn.disabled = true;
  status.textContent = 'Sending...';
  status.className = '';

  const payload = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      status.textContent = 'Message sent — thank you!';
      status.className = 'status-ok';
      document.getElementById('contactForm').reset();
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
