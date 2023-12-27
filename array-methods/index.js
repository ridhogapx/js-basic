// 
// Function bisa disebut methods

const fruits = ['Orange', 'Apple', 'Watermelon', 'Mango'];

// array.push()
fruits.push('Strawberry');
fruits.push('Other fruits')

//console.log(fruits)
// console.log(fruits[0])


// array.toString()
//console.log(fruits.toString())

// Latihan array.push()
const person = ['Budi', 'Joni', 'Wahyudi'];

// Tambahkan 3 data dengan nama Wiliam, Erik, Thomas. 
// Tampilkan data dalam bentuk string. 

// person.push('Wiliam', 'Erik', 'Thomas')
//person.push('Erik')
//person.push('Thomas')

//console.log(person.toString())

// # Array Method ForEach
person.forEach(function(data) {
  console.log(data)
})


// # Daily Assignment | Tugas Harian 

// Buat 4 array yang kemudian akan ditambahkan data dengan method push()
// Setelah data array ditambahkan, keluarkan data dan tampilkan dengan forEach()
// 4 array dengan nama myHobbies, myFriends, myFavouriteFoods, myLanguage.
// File study-case.js 
// Prefix branch: array-methods 
// Reviewer: RageNeko26, Nurrohmann

person.splice(1)

console.log(`Deleted array:` + person)

