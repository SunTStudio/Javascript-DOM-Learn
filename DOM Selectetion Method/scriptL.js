
// DOM Latian

const judul = document.getElementById('judul');
judul.innerHTML = 'Ini Latihan DOM';

const p1 = document.getElementsByTagName('p')[0];
p1.innerHTML = 'Halo Saya Mahsun';
p1.style.fontWeight = 'bold';

const href = document.getElementsByTagName('a')[0].href = 'https://www.instagram.com/mahsun_btama/';
const a = document.querySelector('section#a a');
a.innerHTML = 'Instagram Mahsun Btamam';

const sectionA = document.querySelector('section#a');
const p2 = sectionA.getElementsByTagName('p')[1];
p2.innerHTML = 'Saya tinggal di Sleman';

const p3 = sectionA.getElementsByClassName('p3')[0];
p3.innerHTML = 'Hobi saya mewarnai';
p3.style.background = 'orange';


