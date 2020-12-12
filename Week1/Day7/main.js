/*for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  }
}*/
//const number = prompt("Enter a number for prime!");
//prime(number);
const number2 = prompt("Enter a number for even or odd!");
evenOrOdd(number2);
/*function prime(number) {
  for (var i = 2; i < number; i++) {
    var counter = 0;
    for (var j = 2; j < i; j++) {
      if (i % j == 0) {
        counter++;
        break;
      }
    }
    if (counter == 0) {
      console.log(i);
    }
  }
}*/
function evenOrOdd(number) {
  if (number % 2 == 0) {
    console.log("This number is even");
  } else {
    console.log("This number is odd");
  }
}
