/* 1. JSON (stringify, parse)*/

//  JSON ---> Javascript
const student = {
    name: 'XXYYZZ',
    age: 32,
    movie: ['LionKing', 'AttackOnTitan']
}
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
//  Javascript ---> JSON
const studentObject = JSON.parse(studentJSON);
console.log(studentObject);


/* 2. fetch */
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))


/* 3. keys, values */
const keys = Object.keys(student);
const values = Object.values(student);


/* 4. for */
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);


/* 5. for of an array like object */
/* 6. for on an object using for in */

/* 7. add or remove form an array */
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
const newProduct = { name: 'webcam', price: 700, brand: 'Red' };

/* 8. copy products array and then add newProduct  */
const newProducts = [...products, newProduct];

/* create a new array without an specific item (remove phone means create a new array without the phone) */
const remaining = products.filter(p => p.name !== 'phone');