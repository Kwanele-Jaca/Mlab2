let temperature = 23;
let temperature1=8;

let number = 12; 

let number1 = 9;


console.log("*****Conditional Statement*****");

console.log("exercise 1");
if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}



switch (true) {
    case (temperature1 < 0):
      console.log("It's freezing!");
      break;
    case (temperature1 >= 0 && temperature1 <= 15):
      console.log("It's cold.");
      break;
    case (temperature1 >= 16 && temperature1 <= 25):
      console.log("It's mild.");
      break;
    case (temperature1 > 25):
      console.log("It's warm.");
      break;
    
  }
  
console.log("exercise 2");


if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3");
}


switch (true) {
  case (number1 % 2 === 0 && number1 % 3 === 0):
    console.log("Divisible by both.");
    break;
  case (number1 % 2 === 0):
    console.log("Divisible by 2.");
    break;
  case (number1 % 3 === 0):
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}
console.log("exercise 3 loops");
console.log("numbers from 1 to 10");
for(let i=1;i<=10;i++){
    console.log(i)
}
console.log("multiples of 2 till 20");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  let summ = 0;
for (let i = 1; i <= 100; i++) {
  summ += i;
}
console.log("Sum from 1 to 100 is:", summ);

const numbers1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

const numbers = [3, 7, 2, 5, 10, 6];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("The largest number is:", max);
console.log("Exersese 3 while loop");
let i=0;
while(i<=9){
    i++;
    console.log(i);
}
let ii=0;
while(ii<=19){
    ii++;
    if (ii % 2 === 0) {
        console.log(ii);
      }
}



let k = 1;
let total = 0;
while (k <= 100) {
  total += k;
  k++;
}
console.log("Sum from 1 to 100:", total);

let m = 5;
while (m < 50) {
  console.log(m);
  m += 5;
}
console.log("Exersise 5");
let l = 1;
do {
  console.log(l);
  l++;
} while (l <= 10);


let bb = 1;
let sumb = 0;
do {
  sumb += bb;
  bb++;
} while (bb <= 100);
console.log("Sum from 1 to 100:", sumb);

let numberr;
do {
  numberr = parseInt(prompt("Enter a number greater than 10:"));
} while (numberr <= 10 || isNaN(numberr));

console.log("You entered:", numberr);

const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== correctNumber);

console.log(" You guessed it right:", correctNumber);

