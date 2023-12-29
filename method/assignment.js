// Assignment: Method and keyword 'this'
// Kerjakan dalam format file study-case.js

// #1 Lengkapilah kode di bawah ini.
const tiger = {
    name: "Daniel",
    fur: "Orange",
    food: ["Raw Chicken Meat", "Beef"]
    // Buatlah sebuah method untuk me-return property 'foods'
    // Method dinamai dengan nama getFood()
    // Return harus dalam bentuk string bukan array. Sehingga memerlukan loop untuk mengeluarkan datanya
    // Hasil return harus berupa format: 'Daniel likes ' + food
}

// #2 Buatlah object sebuah burung Elang / Eagle
// Dengan ketentuan property object:
// name, fur, food, voice(), 
const eagle = {
    // Kerjakan di sini.
    // ...
}

// #3 Lengkapilah kode di bawah ini
const uniqueNumber = {
    n: [3, 7, 5, 15, 13, 2, 30, 27, 45],
    result: [],
    // Buatlah method multipleOfFive() 
    // Method ini me-return sebuah array dari property n 
    // Hasil return berupa angka kelipatan 5.
    multipleOfFive() {
        // Kerjakan di sini
        // ...
        let arr = this.n
        for(let i = 0; i < arr.length; i++) {
            // Jika n dibagi 5 habis
            // Maka isi array kosong
            if(arr[i] % 5 === 0) {
                this.result.push(arr[i])

                // Alternatif lain
                // result = n
            }
        }

        return this.result
    }
}

const hasil = uniqueNumber.multipleOfFive()
console.log(hasil)