let hobbies = [
  ["book reading", 4],
  ["swimming", 5],
  ["movies,6"],
  ["hunting", 7, ["chess", 8]],
];

console.log(hobbies[1]);
console.log(hobbies[3][1]);
console.log(hobbies[3][2][1]);
console.log(hobbies[3][2][0]);

hobbies[0].pop();
console.log(hobbies);

hobbies[2].push("Biking", 12);
console.log(hobbies);

hobbies.splice(0, 1);
console.log(hobbies);

// adding asub Array
hobbies.splice(2, 0, ["sking", 5]);
console.log(hobbies);

let firtNumbers = [1, 4, 3, 4];
let secondNumbers = [5, 6, 7];
let thirdNumbers = [8, 9, 10];

let allNumbers = firtNumbers.concat(secondNumbers, thirdNumbers);
console.log(allNumbers);

let cars = new Array("toyota", "bmw", "tesla", "kiev");
console.log(cars);

cars[3] = "bentley";
console.log(cars);

cars.pop(3);
console.log(cars);

cars.push("volvo");
console.log(cars);

cars.shift();
console.log(cars);

cars.unshift("lambo");
console.log(cars);

cars.slice(1, 0);
console.log(cars);

// for loop
const stringA = "Hass";
for (let i of stringA) {
  console.log(i);
}

let fruitz = [{ apples: 3 }, { pineapple: 4 }, { orange: 5 }, { sinachi: 1 }];
for (fruitz of fruitz) {
  console.log(fruitz);
}

for (fruit in fruitz) {
  console.log(fruitz[fruit]);
}

const stringH = "REFACTORY";
for (i in stringH) {
  console.log(stringH[i]);
}

// switch statement

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Day does not exist");
}

let alphabets = ["A", "B", "C", "D"];

let letter = "C";

let positionOfLetter = alphabets.indexOf(letter);

switch (positionOfLetter) {
  case 0:
    console.log("pretty");
    break;
  case 1:
    console.log("awesome");
    break;
  case 2:
    console.log("great");
    break;
  case 3:
    console.log("good");
    break;
  default:
    console.log("letter out of position");
}

// CLASSES
// Syntax

// class ClassName{
// statement
// }

class Employee {
  constructor(name, id, gender, status) {
    this.name = name;
    this.id = id;
    this.gender = gender;
    this.status = status;
  }
}

let Emp1 = new Employee("Brian", 234, "Male", "Single");

console.log(Emp1);
console.log(Emp1.name);
