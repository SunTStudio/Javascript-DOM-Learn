//DOM MANIPULAION PART 2

// Manipulasi Node / tag

//document.createElement()

const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
// appendChild untuk menyimpan textBaru ke dalam pBaru
pBaru.appendChild(textPBaru);

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
// appendChild untuk menyimpan pBaru ke dalam sectionA (parent ke akhir)
// appendChild menyimpan node/element ke bagian terakhir dari element yg diget/ambil
sectionA.appendChild(pBaru);


//membuat element li
const liBaru = document.createElement('li');

//membuat text atau isian untuk element/tag li
const teksLiBaru = document.createTextNode('Item Baru');

//memasukan teksLiBaru ke liBaru menggunakan insertBefore
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
// insertBefore akan memasukan element/node baru sebelum element yg diambil

ul.insertBefore(liBaru,li2);


// menghapus element/node/tag
// mengambil element yg akan dihapus
const a = sectionA.getElementsByTagName('a')[0];
// gunakan 'NamaParent'.removeChild.'element yg sudah diambil untuk dihapus'
sectionA.removeChild(a);


//mengganti element/node/tag (Replace)
//mengambil element yg akan di ganti
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

// membuat element dan isi element baru

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

// gunakan replaceChild untuk mengganti element lama ke element baru
// parent.replaceChild(elementBaru,elementYangAkanDiganti)

sectionB.replaceChild(h2Baru, p4);




pBaru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';



// Ringkasan Manipulasi Node
// document.createElement(elementBaru);
// document.createTextNode('isi element baru');
// node.appendChild(element/isielement yg akan dimasukan ke node paling akhir);
// node.insertBefore(element/isielement yang akan dimasukan ke node ssebelum letak node yg dimaksud,node);
// parentNode.removeChild(elementygAkanDihapus);
// parentNode.replaceChild(elementBaru,elementYangAkanDigantime);