function copyEmail() {
  navigator.clipboard.writeText('nehanmohsin890@gmail.com').then(() => {
    document.getElementById('copyHint').textContent = '(copied!)';
    setTimeout(() => {
      document.getElementById('copyHint').textContent = '(click to copy)';
    }, 2000);
  });
}

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
