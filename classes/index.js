// Class bisa digambarkan sebagai blue-print.
// Atau bisa dikatakan sebuah sketsa.
// Class sebaiknya dinamakan dengan PascalCase.
class Kucing {
    // Constructor bisa dikatakan sebagai initial nilai
    constructor(jenis, warna_bulu) {
        // Property
        this.jenis = jenis
        this.warna_bulu = warna_bulu
    }

    // Method
    getJenis() {
        return this.jenis
    }
}

// Untuk menggunakan Class, kita perlu membuat instance dari Class tersebut
// Tipe data instance
const instanceKucing = new Kucing('Anggora', 'Putih')
console.log("Jenis kucingnya adalah " + instanceKucing.getJenis())

// Kalau object
const Cat = {
    jenis: "Anggora",
    warna_bulu: "Putih",
    getJenis () {
        return this.jenis
    }
}

console.log("Jenis kucingnya adalah " + Cat.getJenis())
