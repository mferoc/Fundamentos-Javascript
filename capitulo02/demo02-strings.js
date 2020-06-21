let friendSalary = 10001;
let mySalary = "0";
let mySalaryNan = "0zzz";
let mySalaryAsNumber = Number(mySalary);
let mySalaryNanAsNumber = Number(mySalaryNan);
console.log(friendSalary + mySalary);
console.log(typeof friendSalary, friendSalary);
console.log(typeof mySalary, mySalary);
console.log(typeof mySalaryAsNumber, mySalaryAsNumber);
console.log(
  typeof mySalaryNanAsNumber,
  mySalaryNanAsNumber,
  isNaN(mySalaryNan),
  isNaN(mySalaryNanAsNumber),
  isNaN(mySalary),
  isNaN(mySalaryAsNumber)
);
console.log(friendSalary + mySalaryAsNumber);
let myText = `Ola mundo, a soma dos salarios e igual a ${
  friendSalary + mySalaryAsNumber
}`;
console.log(myText);
