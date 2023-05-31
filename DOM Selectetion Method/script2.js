// //DOM Seceltion Part 2

// // query Selector

// // document.querySelector()
// // mengembalikan element satu saja
// // mengambil selector seperti css

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';


// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// // nth-child() untuk menentukan bedasarkan urutan child
// li2.style.backgroundColor = 'orange';

//  // const p = document.querySelector('p');
//  // // mengembalikan nilai pertama yg ditemukan 
//  // p.innerHTML = 'Ini diubah melalui Javascript';


// // document.querySelectorAll()
// // mengembalikan NodeList
// // mengambil semua nilai

// const p = document.querySelectorAll('p');
// p[2].style.backgroundColor = 'lightblue';

// for(let i= 0;i < p.length ; i++){
// 	p[i].style.backgroundColor = 'lightblue';
// }

// const p4 = document.getElementsByTagName('p')[3];
// p4.style.backgroundColor = 'lightblue';

// const p4 = document.querySelector('#b p');
// p4.style.backgroundColor = 'pink';

// const p4 = document.querySelectorAll('p')[3];
// p4.style.backgroundColor = 'lightblue';

//mempersempit scope pencarian

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

//dibalik

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'blue';