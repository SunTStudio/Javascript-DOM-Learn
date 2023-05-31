// DOM Selection
// document.getElementById
// Artinya Carikan element ID dari node root atau document
// getElementById mengembalikan Element

const judul = document.getElementById('judul');

// judul dapat dimanipulasi atau dirubah stylenya setelah di getElement nya
// namaVariable.style.propertiCss = 'valueCss';

judul.style.color = 'red';

// jika properticss dipisah dengan - ,harus diganti dengan menggabungkan dengan diawali huruf besar

judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Mahsun';

// innerHTML untuk mengubah nilai string/isi dari suatu tag html



// document.getElementsByTagName()
// mengambil tag html
// mengembalikan HTMLCollection
// nilainya jika lebih dari satu akan dilambangkan nilai index

const p = document.getElementsByTagName('p');

// namaVariable[index].style.propertiCss = 'value css';
p[2].style.backgroundColor = 'lightblue';

// jika ingin mengubah semua index dapat menggunakan perulangan

for(let i = 0; i < p.length;i++){
	p[i].style.backgroundColor = 'lightblue';
}

//merubah tag html dari HTMLColection menjadi Element (khusus tag yg hanya ada satu)
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';


// document.getElementsByClassName
// Mengambil bedasarkan Class HTML
// Mengembalikan HTMLCollection

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini diubah dari Javascript';

const p2 = document.getElementsByClassName('p2')[0];
p2.innerHTML = 'ini diubah dari Javascript Ya';


//