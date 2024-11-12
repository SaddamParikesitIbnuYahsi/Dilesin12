// console log berfungsi untuk menampilkan nilai pada console
console.log("Hello World")

// 1.Variable : tempat untuk menyimpan sebuah nilai/value
var nama = "Saddam"
console.log(nama)
// let bisa di ganti
let nilai = 80
console.log(nilai)

nilai = 70
console.log(nilai)
// untuk const nilai dari variable tidak bisa di ubah
const kkm = 75
console.log(kkm)

// 2.Tipe data

// Tipe data string
let alamat = "purwokerto"
alamat = 'purwokerto'

console.log(alamat)

// Tipe data number
let angka1 = 100
console.log(angka1)

// Tipe data Boolean melakukan pengecekan
let isLogin = true

if (isLogin) {
    console.log("Sudah Login")
} else {
    console.log("Belum Login")
}

// Tipe Data Object adalah tipe data yang digunakan untuk menampilkan detail dari suatu nilai

let mobil = {
    warna: "merah",
    merk: "Bmw",
    jenisTransmisi: "manual",
    tahunpembuatan: 2020
}

console.log(mobil)
console.log("Warna Mobil:  ", mobil.warna)
console.log("Merk Moil:  ", mobil.merk)

// tipe data array adalah suatu tipe data untuk menyimpan banyak nilai
let listMobil = ["Bmw", "Civic", "Inova", "Kijang"]
console.log(listMobil)
console.log(listMobil[1])
console.log(listMobil[3])

console.log("listMobil")
for (let i = 0; i < listMobil.length; i++) {
    console.log(i + 1, listMobil[i])
}

// 3.Pengkondisian 
const nilaiKKM = 75
const nilaiZidan = 100
// If adalah jika,else adalah selain jika
if (nilaiZidan >= 75) {
    console.log("Zidan KKM")
} else {
    console.log("Zidan tidak KKM")
}

// else if
if (nilaiZidan == 100) {
    console.log("Zidan Pintar")
} else if (nilaiZidan >= nilaiKKM) {
    console.log("Zidan kkm")
} else {
    console.log("Zidan tidak kkm")
}
// Switch sama saja dengan if di gabung dengan else if
// case adalah nilai yang kita harapkan
// switch digunakan jika tidak ada operator perbandingan
const statusPembayaran = "pending"
switch (statusPembayaran) {
    case "Success":
        console.log("Pembayaran Berhasil")
        break
    case "pending":
        console.log("Pembayaran sedang di proses")
        break
    case "failed":
        console.log("pembayaran gagal")
        break
    default:
        console.log("Pembayaran tidak di ketahui")
        break
}
const JumlahBuku = 7

if (JumlahBuku >= 10) {
    console.log("Diskon 20%")
} else if (JumlahBuku >= 5 && JumlahBuku <= 10) {
    console.log("Diskon 10%")
} else {
    console.log("Tidak ada diskon")
}

// else tidak ada kondisi
// 4.perulangan
// perulangan for
for (let i = 0; i <= 100; i++) {
    console.log(`${i}.I LOVE YOU`)
}

// perulangan while
let y = 1
// while adalah jika
// do = lakukan 
do {
    console.log(`${y}.I LOVE YOU`)
    y++
} while (y <= 20)