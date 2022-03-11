const product = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'raybon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

/* 1. map : (map হলো যেই জিনিসটা লাগবে সেইটা নিয়ে একটা array return করবে। )*/

const brands = product.map(product => product.brand);
console.log(brands);
const prices = product.map(product => product.price);
console.log(prices);

/* 2. forEach : (forEach কিছু return করে না, তাই কোন variable লিখে কোন লাভ নেই। )*/
product.forEach(product => console.log(product));
product.forEach(product => console.log(product.color));

/* 3. multiline arrow function */
product.forEach(product => { });

/* 4. filter */
const cheap = product.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = product.filter(p => p.name.includes('n'));
console.log(specificName);

/* 5. find */
const special = product.find(p => p.name.includes('n'));
console.log(special);