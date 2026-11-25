(function(){
var L='assets/img/logo-jl.png',H=document.documentElement,G=window.gsap,$=function(s,c){return [].slice.call((c||document).querySelectorAll(s))};
$('img[data-logo]').forEach(function(i){i.src=L});
var A=G&&!matchMedia('(prefers-reduced-motion:reduce)').matches;if(!A)H.classList.remove('js');
var hd=document.getElementById('hd'),mb=document.getElementById('mb'),nv=document.getElementById('nv');
addEventListener('scroll',function(){hd.classList.toggle('sc',scrollY>40)},{passive:true});
mb.onclick=function(){mb.classList.toggle('on');nv.classList.toggle('on')};
$('a',nv).forEach(function(a){a.onclick=function(){mb.classList.remove('on');nv.classList.remove('on')}});
function split(el){[].slice.call(el.childNodes).forEach(function(c){if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(s){if(!s)return;if(/^\s+$/.test(s)){f.appendChild(document.createTextNode(' '));return}var w=document.createElement('span');w.className='w';var i=document.createElement('span');i.className='wi';i.textContent=s;w.appendChild(i);f.appendChild(w)});c.replaceWith(f)}else if(c.nodeType===1)split(c)})}
var items=$('.it'),io;
if(A){G.registerPlugin(ScrollTrigger);
$('[data-sp]').forEach(split);
G.set('.hero h1',{visibility:'visible'});G.set('[data-sp] .wi',{yPercent:115});G.set('.rv',{y:40});G.set('.it',{y:60});G.set('.it img',{clipPath:'inset(100% 0% 0% 0%)',scale:1.2});
G.timeline({defaults:{ease:'power4.out'}}).fromTo('.hero .lg',{opacity:0,scale:.8},{opacity:1,scale:1,duration:1.2}).to('.hero h1 .wi',{yPercent:0,duration:1.1,stagger:.07},'-=.8').fromTo('.hero p,.hero .bt',{opacity:0,y:24},{opacity:1,y:0,duration:1,stagger:.12},'-=.6');
G.to('.hero .lg',{yPercent:-45,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;io.unobserve(t);
if(t.hasAttribute('data-sp'))G.to($('.wi',t),{yPercent:0,duration:1,stagger:.06,ease:'power4.out'});
else if(t.classList.contains('it')){G.to(t,{opacity:1,y:0,duration:.9,ease:'power3.out'});G.to($('img',t),{clipPath:'inset(0% 0% 0% 0%)',scale:1,duration:1.3,ease:'power3.out',clearProps:'clipPath,transform'})}
else G.to(t,{opacity:1,y:0,duration:1,ease:'power3.out'})})},{rootMargin:'0px 0px -8% 0px',threshold:.06});
$('[data-sp],.rv,.it').forEach(function(e){if(!e.closest('.hero'))io.observe(e)})}
// filtros
var MAP={esp:['esp'],id:['id'],dig:['card','sp'],soc:['soc']};
$('#fl button').forEach(function(b){b.onclick=function(){$('#fl .on')[0].classList.remove('on');b.classList.add('on');var f=b.dataset.f,n=0;
items.forEach(function(it){var k=it.dataset.c.split(' '),ok=!MAP[f]||MAP[f].some(function(x){return k.indexOf(x)>-1});it.style.display=ok?'':'none';
if(ok&&A){io.unobserve(it);G.killTweensOf([it,$('img',it)[0]]);G.set($('img',it),{clipPath:'none',scale:1});G.fromTo(it,{opacity:0,y:30},{opacity:1,y:0,duration:.7,delay:Math.min(n,12)*.04,ease:'power3.out'});n++}})}});
// visualização
var lb=document.getElementById('lb'),li=$('img',lb)[0],lt=$('h3',lb)[0],lc=$('.lbc span',lb)[0],list=[],ix=0;
function show(d){var it=list[ix];li.src=$('img',it)[0].src;lt.textContent=$('b',it)[0].textContent;lc.textContent=$('span',it)[0].textContent+'  ·  '+(ix+1)+' / '+list.length;if(A)G.fromTo(li,{opacity:0,x:d*40,scale:.97},{opacity:1,x:0,scale:1,duration:.6,ease:'power3.out'})}
function open(it){list=items.filter(function(x){return x.style.display!=='none'});ix=list.indexOf(it);lb.classList.add('on');document.body.style.overflow='hidden';if(A)G.fromTo(lb,{opacity:0},{opacity:1,duration:.4});show(0)}
function close(){var f=function(){lb.classList.remove('on');document.body.style.overflow='';if(A)G.set(lb,{opacity:1})};if(A)G.to(lb,{opacity:0,duration:.3,onComplete:f});else f()}
function go(d){ix=(ix+d+list.length)%list.length;show(d)}
items.forEach(function(it){it.onclick=function(){open(it)}});
$('.x',lb)[0].onclick=close;$('.pv',lb)[0].onclick=function(){go(-1)};$('.nx',lb)[0].onclick=function(){go(1)};
$('.lbs',lb)[0].onclick=function(e){if(e.target!==li)close()};
addEventListener('keydown',function(e){if(!lb.classList.contains('on'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1)});
var sx=0;lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});lb.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>60)go(d<0?1:-1)});
})();