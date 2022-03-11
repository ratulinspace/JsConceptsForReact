/*  False: '', 0, false, null, undefined
    Truth: 'alu', 5, true, {}, [] */


/* 1. Check truthy */
let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}


/* 2. Check falsy */
let myMoney = 50;
if (!myMoney) {

}


const money = 80;
let food;
if (money > 100) {
    food = 'Birayani '
}
else {
    food = 'Cha biscute';
}

/* 3. Ternary */
let food1 = money > 100 ? 'biriyani' : 'Cha Biscute';
console.log(food1);


let drink = (money > 100 && myVar > 100) ? 'Coke' : 'filter water';
console.log(drink);


/* Number to string Conversion */
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);


/* String to number conversion */
const input = '560';
const inputNum = +input;
console.log(inputNum);


/*  */
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;