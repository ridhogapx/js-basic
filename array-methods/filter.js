// Key: value
const person = [
    {
        name: "John",
        age: 20,
    },
    {
        name: "Jane",
        age: 15,
    },
    {
        name: 'Witcky',
        age: 30,
    }
]


function searchPerson(keyword) {
    const result = person.filter(function(element) {
        return element.name == keyword
    })

    return result
}

// Cari nama 'Jane'
const cari = searchPerson('John')
console.log('Hasil pencarian:', cari)