// Fizzbuzz 
// Loop dari 1 - 30
// Apabila index kelipatan 5 maka print 'fizzbuzz'

let hasil = ''
for(let i = 1; i <= 30; i++){
    hasil = i
    if(i % 5 === 0){
        hasil = "fizzbuzz"
    } 
    console.log(hasil)
}
