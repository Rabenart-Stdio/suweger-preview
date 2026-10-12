const WA='6289668135677';
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const COL={'🍫':['#5a3220','#f3e3d0'],'🧋':['#b96c38','#f1dec4'],'🍪':['#9c8570','#efe4d6'],'🍵':['#66834d','#e6ebd9'],'🌰':['#a0643a','#f1dcc6'],'🧀':['#d2a449','#f5ebd0'],'🥭':['#d9953b','#f4e8c7'],'🥤':['#bd7180','#f4e4e5'],'🍹':['#cf8458','#f2e5d9'],'🧊':['#a88757','#eee8d8'],'🍋':['#d3b64d','#f3eed7'],'🫐':['#716482','#e9e5ed'],'🍑':['#c47c64','#f2e6df'],'☕':['#76533d','#e9ded2']};
let cn=0;
function cup(c){const [a,b]=COL[c]||COL['🥤'],id='c'+(cn++),p='M8 28h44l-5 66H13z';
return `<svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="${id}"><path d="${p}"/></clipPath></defs><rect x="29" y="2" width="4" height="30" rx="2" transform="rotate(12 31 20)" fill="#66834d"/><g clip-path="url(#${id})"><rect y="28" width="60" height="70" fill="${b}"/><rect y="48" width="60" height="50" fill="${a}"/><circle cx="20" cy="86" r="3.2" fill="#2b1a10"/><circle cx="31" cy="88" r="3.2" fill="#2b1a10"/><circle cx="42" cy="85" r="3.2" fill="#2b1a10"/><circle cx="26" cy="78" r="3.2" fill="#2b1a10"/></g><path d="${p}" fill="none" stroke="rgba(0,0,0,.2)" stroke-width="1.5"/><path d="M6 22q24-12 48 0v6H6z" fill="#fff" stroke="rgba(0,0,0,.2)" stroke-width="1.5"/><rect x="19" y="44" width="22" height="22" rx="11" fill="#f4f2e9"/><text x="30" y="60" font-size="12" font-weight="900" font-style="italic" text-anchor="middle" fill="#214b39" font-family="Lato,sans-serif">S!</text></svg>`}
// Data menu: [nama, keterangan, harga, ikon]
const DATA={
potm:[['Choco Lava','+ Ice Cream · M 13K','L 16K','🍫'],['Original Thai Tea','S 5K · M 8K','L 10K','🧋'],['Special Cookies N Cream','M 13K','L 16K','🍪'],['Original Green Tea','M 10K','L 13K','🍵']],
fav:[['Cookies n Cream','','M 11K · L 13K','🍪'],['Choco Lava Classic','','L 13K','🍫'],['Choco Hazelnut','','M 13K · L 13K','🌰'],['Royal Forest Thai Tea','','L 15K','🧋'],['Royal Choco Thai Tea','','L 15K','🧋'],['Royal Cheese Thai Tea','','L 15K','🧀'],['Original Matcha Latte','','R 14K','🍵'],['Matcha Dark Choco','','16K','🍵'],['Choco Matcha Cream','','16K','🍵'],['Uji Premium Matcha Latte','Original / Stevia','M 18K','🍵'],['Uji Matcha Dark Choco','','M 18K','🍵'],['Uji Choco Matcha Cream','','M 18K','🍵']],
refresh:[['Mango Yakult','','M 13K · L 16K','🥭'],['Leci Yakult','','M 13K · L 16K','🥤'],['Es Teh Leci','','L 12K','🍹'],['Es Teh Pahlawan','','8K','🧊'],['Lemonadu','','M 11K · L 14K','🍋'],['Ice Blackcurrant Tea','','R 5K · M 8K','🫐'],['Ice Peach Tea','','R 5K · M 8K','🍑'],['Jelly Lemon Blackcurrant','','6K','🍋'],['Jelly Lemon Mango','','6K','🥭']],
kopi:[['Kopi Aren Jelly','','15K','☕'],['Kopi Aren Tanpa Jelly','','12K','☕'],['Kopi Coklat Jelly','','13K','☕'],['Kopi Coklat Tanpa Jelly','','12K','☕']],
topping:['Jelly Tea','Cookies Crumb','Rainbow Jelly','Ice Cream','Royal Cheese Foam','Jelly Boba']};
const card=([n,d,p,c])=>`<div class="it"><div class="cup">${cup(c)}</div><b>${n}</b>${d?`<span>${d}</span>`:''}<div class="pr">${p}</div></div>`;
const grid=a=>`<div class="grid">${a.map(card).join('')}</div>`;
const chips=a=>`<div class="chips">${a.map(x=>`<span>${x}</span>`).join('')}</div>`;
const sec=(t,s,h)=>`<section class="s"><div class="sh"><span>${t}</span><small>${s}</small></div>${h}</section>`;
function layout(active){
document.getElementById('site-header').innerHTML=`<header><a href="index.html" class="logo logo-image" aria-label="Suweger! - Beranda"><img src="assets/logo-suweger.png" alt="Suweger!" /></a><button class="menu-toggle" type="button" aria-label="Buka menu navigasi" aria-expanded="false" aria-controls="site-navigation"><span></span><span></span><span></span></button><nav id="site-navigation">${[['index.html','Beranda'],['drinks.html','Menu'],['outlets.html','Outlet'],['about.html','Tentang Kami']].map(([h,t])=>`<a class="l ${h===active?'on':''}" href="${h}">${t}</a>`).join('')}</nav></header>`;
const menuToggle=document.querySelector('.menu-toggle');
const navigation=document.getElementById('site-navigation');
menuToggle.addEventListener('click',()=>{
const isOpen=menuToggle.getAttribute('aria-expanded')==='true';
menuToggle.setAttribute('aria-expanded',String(!isOpen));
menuToggle.setAttribute('aria-label',isOpen?'Buka menu navigasi':'Tutup menu navigasi');
navigation.classList.toggle('is-open',!isOpen);
});
navigation.addEventListener('click',event=>{
if(event.target.closest('a')){
menuToggle.setAttribute('aria-expanded','false');
menuToggle.setAttribute('aria-label','Buka menu navigasi');
navigation.classList.remove('is-open');
}
});
document.addEventListener('keydown',event=>{
if(event.key==='Escape'){
menuToggle.setAttribute('aria-expanded','false');
menuToggle.setAttribute('aria-label','Buka menu navigasi');
navigation.classList.remove('is-open');
}
});
document.getElementById('site-footer').innerHTML=`<footer><div class="fi"><div><h4>Jelajahi</h4><a href="index.html">Beranda</a><a href="drinks.html">Menu</a><a href="outlets.html">Outlet</a><a href="about.html">Tentang Kami</a></div><div><h4>Hubungi kami</h4><a href="${wa('Halo Suweger')}" target="_blank" rel="noopener">WhatsApp +62 896-6813-5677</a><a href="https://www.instagram.com/suweger.indonesia/" target="_blank" rel="noopener">Instagram @suweger.indonesia</a></div><div><span class="logo" style="font-size:16px">SUWEGER!</span></div></div><div class="copy">© 2026 RabenartStdio. Hak cipta dilindungi.</div></footer>`}
