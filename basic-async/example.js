// Contoh analogi di dunia nyata.
// Barista Kopi
// Terdapat 4 orang yang melakukan sebuah pekerjaan dalam waktu bersamaan.
// Ada yang menyiapkan dan menaburkan biji kopi, ada yang memanaskan air dll

function taburkanBijiKopi() {
    setTimeout(function() {
        console.log("Menuangkan biji kopi...")
    }, 2000)
}

function panaskanAir() {
    setTimeout(function() {
        console.log("Sedang memanaskan air...")
    },1000)
}

function siap() {
    setTimeout(function() {
        console.log("Kopi siap dinikmati!")
    }, 4000)
}

function adukKopi() {
    setTimeout(function() {
        console.log("Mengaduk kopi...")
    }, 3000)
}

taburkanBijiKopi()
panaskanAir()
siap()
adukKopi()