const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
window.matchMedia('(min-width: 801px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
document.querySelector('#year').textContent=new Date().getFullYear();
