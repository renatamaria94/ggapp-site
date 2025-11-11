
const themeToggle = document.getElementById('themeToggle');
const yearSpan = document.getElementById('year');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');

yearSpan.textContent = new Date().getFullYear();

// Theme toggle: store preference
function setTheme(mode){
  if(mode==='dark'){
    document.documentElement.style.colorScheme='dark';
    document.documentElement.classList.add('dark');
  }else{
    document.documentElement.style.colorScheme='light';
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', mode);
}
const saved = localStorage.getItem('theme');
if(saved){ setTheme(saved); }
themeToggle?.addEventListener('click',()=>{
  const now = localStorage.getItem('theme')==='dark' ? 'light':'dark';
  setTheme(now);
  themeToggle.textContent = now==='dark' ? '🌙':'☀️';
});

// Mobile menu
menuBtn?.addEventListener('click',()=>{
  const expanded = menuBtn.getAttribute('aria-expanded')==='true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('show');
});
