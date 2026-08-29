module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};
  const cleanName = typeof name === 'string' ? name.trim() : '';
  const cleanEmail = typeof email === 'string' ? email.trim() : '';
  const cleanMessage = typeof message === 'string' ? message.trim() : '';

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    cleanName.length < 2 ||
    cleanName.length > 80 ||
    !emailPattern.test(cleanEmail) ||
    cleanEmail.length > 254 ||
    cleanMessage.length < 10 ||
    cleanMessage.length > 2000
  ) {
    return res.status(400).json({ error: 'Invalid form input' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'mohsinnehan5@gmail.com',
        reply_to: cleanEmail,
        subject: `New portfolio message from ${cleanName}`,
        text: `From: ${cleanName} (${cleanEmail})\n\n${cleanMessage}`,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error('Resend API error:', details);
      return res.status(502).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
