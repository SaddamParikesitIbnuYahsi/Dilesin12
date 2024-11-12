// function adalah sebuah kumpulan kode yang memiliki fungsi tertentu dan bisa di gunakan di manapun atau kapanpun

// 1. Function umum

function sapaPengguna(){
    console.log("Hallo Pengguna Dilesin")
}

// Memanggil function 
sapaPengguna()

// 2.Function menggunakan parameter
function sapaUser(nama){
    alert(`Hallo ${nama}`)
}

// sapaUser("Saddam")
// sapaUser("Zidan")

function tambah(angka1,angka2){
    console.log(angka1 + angka2)
}
tambah(30, 10)

function kurang(angka1,angka2){
    console.log(angka1 + angka2)
}

kurang(20,10)

function kali(angka1,angka2){
    console.log(angka1 * angka2)
}
kali(30, 10)

function bagi(angka1,angka2){
    console.log(angka1 / angka2)
}
bagi(30, 10)

// function degnan return
function hitungDiskon(total, persentase){
    return total * persentase / 100
}

function hitungTotal(totalItem,harga,persentaseDiskon)
{
    const subTotal = totalItem * harga

    console.log(subTotal - hitungDiskon(subTotal, persentaseDiskon))
}

hitungTotal(10, 10000, 10)

// dom document object model 

// memberikan efek ketika button di click
const btnAlert = document.getElementById('btn-alert')
const inputNama = document.getElementById('input-nama')
const btnSapa = document.getElementById('btn-sapa')

btnAlert.addEventListener('click', function(){
    alert("ini berhasil di click alertnya")
    console.log(inputNama.value)
})

btnSapa.addEventListener('click',function(){
    sapaUser(inputNama.value)
})


