/* 1. How to declare a variable using let and const */
const fatherName = 'Abba Khan';
let session = 'rainy';
session = 'winter';
/* 2. Conditions 
6 basic conditions  : >, <, ===, !==, <=, >= 
Multiple conditions : &&, ||  */
if (fatherName === 'abba khan' || session === 'rainy') { }
else if (fatherName === 'Abba Khan') { }
else { }
/* 3. array declare 
Index, length, push*/
const numbers = [89, 35, 98, 12];
/* 4. for loop  */
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}
/* 5. function  */
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);
/* 6. Object 
& 3 ways to access property by name */
const student = {
    name: 'Salif Khan',
    age: 32,
    movies: ['Dead poets society', 'Dhaka attack']
}
// Type 1: direct by property
console.log(student.age);
// Type 2: access via property name string string
console.log(student['age']);
// Type 3: Access via property name in a variable
const variableX = 'age';
console.log(student[variableX]);
