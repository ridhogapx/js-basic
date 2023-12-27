// Mengenal tentang opsional parameter
// Opsional parameter adalah parameter yang tidak wajib diisi pada function Javascript
// Opsional parameter biasa diletakan di urutan paling akhir

// Contoh #1 
function kali(a, b) {
  // Inisialisasi nilai bawaan
  if (b === undefined) {
    b = 5;
  }

  return a * b

}

console.log(kali(10))


// Contoh #2 
function menyapa(nama) {
  if (nama === undefined) {
    nama = "John Doe"
  }

  return nama

}

console.log("Hai, selamat siang " + menyapa() )

// Latihan 
// Buat 3 function dengan parameter opsional 
// Kalau opsinal parameter tidak diisi, maka return nilai default
// Sedangkan kalau opsional parameter diisi, maka yang direturn adalah nilai parameter
