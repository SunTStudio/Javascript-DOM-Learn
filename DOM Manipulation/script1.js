DOM MANIPULATION
Manipulasi Element

.innerHTML
mengisikan apapun pada tag yang di ambil

const judul = document.getElementById('judul');
judul.innerHTML = '<em>Mahsun Btama</em>';

//merubah isi semua section menggunakan innerHTML dengan QuerySelector
const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'Hello Word!';



const judul = document.querySelector('#judul');
judul.style.color = 'brown';
judul.style.backgroundColor = 'orange';


.setAttribute
const judul = document.getElementsByTagName('h1')[0];
memasukan atribute baru kedalam element/node yang diambil
namaVariable.setAttribute('namaAtributeBaru', 'valueAtribute');
judul.setAttribute('name','Mahsun');

const a = document.querySelector('a');
a.setAttribute('id', 'link');

.removeAttribute()
menghapus atribute

//menambahkan atribute class yg udah ada
const p2 = document.querySelector('.p2');

namaVariable.classList.add('classBaru yang ditambahkan');
element.classList.remove('class yg akan dihapus');
element.classList.toogle('namaClass yg akan dicek dan ditambahkan atau dihapus');
element.classList.item(index class yg akan dicek);
element.classList.contains(namaClass yg akan dicek);
