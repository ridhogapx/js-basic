// Apa itu callback dalam Javascript
// Memanggil functions di dalam functions 

// Contoh: 1
function perkalian(a, b) {
  return a * b
}

function luasPersegi(sisi) { 
  const luas = perkalian(sisi, sisi)
  return luas
}

console.log(luasPersegi(4))

// Contoh: 2
function pertambahan(a, b) {
  return a + b
}

function kelilingPersegiPanjang(panjang, lebar, callbackPerkalian, callbackPertambahan) {
  // Function Mencari keliling persegi panjang
  
  // 2 * p + l

  // Callback 
  let keliling = callbackPertambahan(panjang, lebar) 

  return callbackPerkalian(keliling, 2)
}

console.log(`Hasil keliling persegi:` + kelilingPersegiPanjang(10, 5, perkalian, pertambahan))
// Ekspetasi Output: 30

// Contoh: 3 
function greeting() {
  return "Helo, good morning!"
}

function tampilkan(callbackGreeting) {
  let greeting = callbackGreeting()
  console.log(`Tampilkan pesan: ` + greeting)
}


// Contoh Closure
tampilkan(function() {
  return "Hello dari Closure!"
})


// Assessment 
// Buat 1 callback dan 1 closure 
// - Callback terdiri 2 function, 1 sebagai callback 1 sebagai pemanggil.
// - Closure teridiri 2 function, 1 sebagai callback 1 sebagai pemanggil. 
// Branch: feat/study-case-callback
//
