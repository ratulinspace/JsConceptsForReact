/* 1. array destructuring */
const numbers = [42, 65];

// #1:
const x = numbers[0];
const y = numbers[1];

// #2:
const [xx, yy] = [42, 65];

// #3:
const [xxx, yyy] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
console.log(boxify(30, 34));

// #4:
const student = {
    name: 'Oni chan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};
const [firstMovie, secondMovie] = student.movies;
console.log([firstMovie, secondMovie]);


/* 2. object destructuring */
const { name, age } = { name: 'alu', age: 14 };
const { id, salary } = { id: 12, name: 'alu', age: 14, salary: 3400 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee.specification.watch;

console.log({ brand });