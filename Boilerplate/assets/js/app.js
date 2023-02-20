window.addEventListener('DOMContentLoaded', () => {
	
});	

[1, 2, 3];

function sumArr(initialNumber, arrayIndex, arr) {
    if(arrayIndex === arr.length) 
        return initialNumber;
    else{
        return arr[arrayIndex] + sumArr(initialNumber, arrayIndex + 1, arr);
    }
}
console.log(sumArr(1, 0, [1, 2, 3]));
console.log(sumArr(10, 0, [1, 2, 3, 4]));

console.log('/////////////////////////Object/////////////////////////////////////')

let obj = {};
let obj1 = new Object();

let obj2 = {
    name: 'John',
    city: 'Varna',
    'city of birth': 'Sofia',
}

// dot notation
console.log(obj2.name);
//braket notation 
console.log(obj2['name']);
console.log(obj2['city of birth']);

obj2.age = 37;

Object.defineProperty(obj2, 'lastNAme',{
    value: 'Doe',
    writable: true,
    configurable: true,
    enumerable: true,
})

console.log(obj2)

delete obj2['city of birth']
console.log(obj2)

obj2.age = 25;
console.log(obj2)

let job = 'current company'
obj2[job] = 'Advance Academy';

console.log(obj2)

console.log('/////////////////////////Object/////////////////////////////////////')

let a = window.alert('Simeon')

a = window.prompt('What is your name', 'Simeon');

a = window.confirm('Do you listen')

window.alert('Alert'); 
window.prompt('Prompt'); 
window.confirm('Confirm'); 

console.log('//////////////////////////////////////////////////////////////')

let animal = prompt('What animal do you have');
let obj3 = {};

obj3[animal] = true

console.log(obj3)

console.log('//////////////////////////////////////////////////////////////')

let animal1 = prompt('What animal do you have');
let animalCount = prompt('How many');
let myPets = {};

myPets[animal1] = animalCount;

console.log(animal1)
console.log(myPets)