document.addEventListener('DOMContentLoaded',function(){
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
if(toggle&&nav) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
const top=document.getElementById('topBtn');
if(top){window.addEventListener('scroll',()=>top.style.display=window.scrollY>400?'block':'none');top.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});}
const form=document.getElementById('contactForm');
if(form) form.addEventListener('submit',function(e){e.preventDefault();const n=document.getElementById('formNote');if(n)n.textContent='Thank you! This is a demo form. Connect it to email/backend before publishing.';form.reset();});
const lb=document.getElementById('lightbox');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{if(!lb)return;lb.classList.add('show');lb.querySelector('img').src=item.querySelector('img').src;lb.querySelector('span').textContent=item.dataset.title||'';}));
if(lb){lb.addEventListener('click',e=>{if(e.target===lb||e.target.tagName==='BUTTON')lb.classList.remove('show')});}
});