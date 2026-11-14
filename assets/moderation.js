// Profanity blocking (English + Tagalog) for the prototype.
// "hell" and "damn" are deliberately allowed: they are real theology questions.
const BLOCKED_WORDS = ['fuck','shit','bitch','asshole','bastard','dick','slut','whore', 'nigga', 'nigger',
  'tangina','putangina','puta','gago','gaga','ulol','tarantado','leche','pakyu'];

function hasProfanity(text) {
  const s = text.toLowerCase()
    .replace(/[@4]/g,'a').replace(/[1!]/g,'i').replace(/0/g,'o').replace(/3/g,'e').replace(/\$/g,'s');
  const squashed = s.replace(/[^a-z\s]/g, ''); // catches "f.u.c.k" / "sh*t"-style dodges
  return BLOCKED_WORDS.some(w => new RegExp('\\b' + w).test(s) || new RegExp('\\b' + w).test(squashed));
}

// Wire a textarea + submit button + warning message together.
function guardInput(areaId, btnId, msgId, onPost) {
  const a = document.getElementById(areaId), b = document.getElementById(btnId), m = document.getElementById(msgId);
  a.addEventListener('input', () => {
    const bad = hasProfanity(a.value);
    a.classList.toggle('bad', bad); m.classList.toggle('show', bad); b.disabled = bad;
  });
  if (onPost) b.addEventListener('click', () => { if (!b.disabled && a.value.trim()) onPost(a); });
}
