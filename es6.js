const list = {
    name: "RAbby",
    salary: 1200000,
    company: "Tesla",
    designation  : ["Senior Software developer ", 'Programmer']
};
// template string
/* const stringVar = `I am ${list.name}.A professional ${list.designation[1]} and ${list.designation[0]} in ${list.company}. My salary is $${list.salary}`
console.log(stringVar); */


/* //0 parameter
const ret = () => 9;
//1 parameter
const multiply = (num) => num*12;
console.log(multiply(2));
//2 parameter
const divide = (num1, num2) => (num1 + num2)/4;
console.log(divide(5, 10));
//2 parameter and calc
const addMultiply = (first, second) => {
    return (first + 5) * (second + 5); 
};
console.log(addMultiply(20, 10)); */


//spread operator
const numbers = [99, 77, 66, 55, 4, 3, 14, 33,];
console.log(numbers);
//copy array
const newNumber = [...numbers];
newNumber.push(100, 200)
console.log(newNumber)
newNumber.forEach(number => {
    console.log(number)
});



