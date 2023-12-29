// Contoh lain
const shark = {
    type : 'Great White Shark',
    teeth: 'Sharp',
    isMammal: true,
    isPredator: true,
    // Bisa mengoper argumen pada parameter function
    attack(target) {
        return this.type + " is attacking " + target
    }
};

// Eksekusi method
const execution = shark.attack('Octopus');

console.log(execution)