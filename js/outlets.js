layout('outlets.html');
const OUTLETS=[
  ['Rungkut','Jl. Rungkut Madya No. 5-A, Kec. Rungkut, Surabaya'],
  ['Pogot','Jl. Pogot No. 128, Kec. Bulak, Surabaya'],
  ['Gubeng','Jl. Karang Menangan No. 15, Mojo, Kec. Gubeng, Surabaya'],
  ['Rajawali','Jl. Rajawali No. 105, Kec. Krembangan, Surabaya'],
  ['Keputih','Jl. KH. Ahmad Dahlan No. 25, Kec. Sukolilo, Surabaya'],
  ['Banyuurip','Jl. Simo Kalangan No. 218, Kec. Sukomanunggal, Surabaya'],
  ['Semolowaru','Jl. Semolowaru No. 151, Kec. Sukolilo, Surabaya'],
  ['Lidah Wetan','Jl. Lidah Wetan No. 30, Kec. Lakarsantri, Surabaya'],
  ['Ketintang','Jl. Ketintang Raya No. 165A, Kec. Gayungan, Surabaya'],
  ['Manukan','Blok A3, Jl. Manukan Tama, Manukan Kulon, Surabaya'],
  ['Tambakrejo','Jl. Tambak Rejo No. 3, Kec. Simokerto, Surabaya'],
  ['Wadungasri','Jl. Wadungasri No. 2, Kec. Waru, Sidoarjo'],
  ['Padegiling','Jl. Padegiling No. 75, Kec. Tegalsari, Surabaya'],
  ['Sedati','Jl. Garuda No. 48, Betro, Kec. Sedati, Sidoarjo']
];
document.getElementById('outlet-list').innerHTML=OUTLETS.map(([name,address])=>{
  const map=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Suweger ${address}`)}`;
  return `<article class="outlet-card"><span class="outlet-pin" aria-hidden="true">S!</span><div><h2>${name}</h2><p>${address}</p></div><a class="outlet-map" href="${map}" target="_blank" rel="noopener noreferrer" aria-label="Lihat outlet ${name} di Google Maps">Petunjuk arah <span aria-hidden="true">↗</span></a></article>`;
}).join('');
