const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
menuBtn.addEventListener('click', () => {
  drawer.classList.toggle('open');
  menuBtn.textContent = drawer.classList.contains('open') ? '✕' : '☰';
});
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  drawer.classList.remove('open');
  menuBtn.textContent = '☰';
}));

document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-btn');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');
  btn.addEventListener('click', () => {
    const isOpen = answer.style.display === 'block';
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'none');
    if (!isOpen) {
      answer.style.display = 'block';
      icon.style.transform = 'rotate(45deg)';
    }
  });
});
