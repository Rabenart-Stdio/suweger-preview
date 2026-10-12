layout('drinks.html');
document.getElementById('menus').innerHTML=
sec('Product of the Month','S · M · L',grid(DATA.potm))+
sec('Favourite Series','R · M · L',grid(DATA.fav))+
sec('Refresh Series','R · M · L',grid(DATA.refresh))+
sec('Kopi Series','Medium',grid(DATA.kopi))+
sec('Topping Best Seller','+3K',chips(DATA.topping))+
sec('Sesuaikan Keinginanmu','',chips(['Ice Level: Normal / Less Ice','Sugar Level: Normal / Less / No Sugar','Cup Size: Regular / Medium / Large']))+
'<p style="text-align:center;color:#6b6b6b;font-size:13px;margin-top:22px">Layanan Big Order via WhatsApp +62 896-6813-5677</p>';
