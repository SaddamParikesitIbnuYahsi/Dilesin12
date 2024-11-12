// Array untuk soal 
const dataSoal =[
    {gambar: 'img/soal1.jpg' ,jawaban: 'Buah Rambutan'},
    {gambar: 'img/soal2.jpg' ,jawaban: 'Bahu Jalan'},
    {gambar: 'img/soal3.jpg' ,jawaban: 'Botol Susu'},
    {gambar: 'img/soal4.jpg' ,jawaban: 'Telor'},
    {gambar: 'img/soal5.jpg' ,jawaban: 'Teh Manis'}
]

let index = 0
let nilai = 0
// deklarasikan komponen
const gambarSoal =  document.getElementById('gambar-soal')
const inputJawaban = document.getElementById('input-jawaban')
const btnAlert = document.getElementById('btn-jawab')

function tampilkanSoal(){
    // mengambil data soalberdasarkan index
    gambarSoal.src = dataSoal[index].gambar
    inputJawaban.value = ''
}

btnJawab.addEventListener('click', function (){
    const inputan = inputJawaban.value.toLowerCase()
    const jawaban = dataSoal[index].jawaban.toLowerCase()

    if (inputan === jawaban) {
    alert
    console.log("Jawaban  Benar")
    
    index++

    nilai += 1

    if (index < dataSoal.length) {
        tampilkanSoal()
    } else {
        console.log("Soal Habis Nilai Kamu Adalah", nilai)
        index = 0
        tampilkanSoal()
    } 

    } else {
        console.log("Jawabanh Salah")
    }
    
})

tampilkanSoal()
