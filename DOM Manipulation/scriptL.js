
const h1Baru = document.createElement('h1');
const teksH1Baru = document.createTextNode('Halo Saya Mahsun');

h1Baru.appendChild(teksH1Baru);

const body = document.getElementsByTagName('body')[0];
const judul = document.querySelector('body h1');

body.insertBefore(h1Baru,judul);

judul.innerHTML = 'Ini Biografi Saya';

const sectionA = document.getElementById('a');

const p1 = sectionA.getElementsByClassName('p1')[0];
p1.innerHTML = 'Lahir 07 Desember 2002';
p1.style.fontWeight = 'bold';

const link = sectionA.querySelector('a').href = 'https://www.instagram.com/mahsun_btama/';
const a = sectionA.querySelector('a');
a.innerHTML = 'Instagram MahsunBtama';

const p2 = sectionA.getElementsByTagName('p')[1];
p2.innerHTML = 'Hobi Mewarnai';
p2.style.backgroundColor = 'orange';

const p3 = sectionA.querySelector('p:nth-child(4)');
p3.innerHTML = 'Alamat Sleman';

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('WA 085868144268');

pBaru.appendChild(teksPBaru);

sectionA.appendChild(pBaru); 

const sectionB = document.querySelector('section#b');
const p4 = sectionB.querySelector('p');
sectionB.removeChild(p4);

const li1 = sectionB.querySelector('ul li:nth-child(1)');
li1.innerHTML = 'Berikut Sosmed Saya :';
li1.style.textDecoration = 'none';

const ul = sectionB.querySelector('ul');
const li2 = sectionB.querySelector('ul li:nth-child(2)');
const li2Baru = document.createElement('a');
const teksLi2Baru = document.createTextNode('Twitter');
li2Baru.appendChild(teksLi2Baru);
ul.replaceChild(li2Baru,li2);
//menambahkan href ke tag
li2Baru.href = 'https://www.instagram.com/mahsun_btama/';
li2Baru.style.display = 'block';

const li3 = sectionB.querySelector('ul li:nth-child(3)');
const li3Baru = document.createElement('a');
const teksLi3Baru = document.createTextNode('Facebook');
li3Baru.appendChild(teksLi3Baru);

ul.replaceChild(li3Baru,li3);
li3Baru.href='https://www.instagram.com/mahsun_btama/';
li3Baru.style.display = 'block';

li3Baru.setAttribute('class','fb');
li3Baru.classList.add('facebook');
li3Baru.classList.toggle('fb');