var name1 = "Ahmed";
var name2 = "Ali";
var age = 18;
var isAdult = age >= 18;
var fruits = ["apple", "banana", "orange"];
var uninvitedGuest = "Huxaifa";
// String Tests:
console.log("Is name1 == name2? I predict False.");
console.log(name1 == name2);
console.log("Is name1 === name2? I predict False.");
console.log(name1 === name2);
console.log("Is name1 != name2? I predict True.");
console.log(name1 != name2);
// Lowercase Function:
var word = "HeLlO";
console.log("Is word.toLowerCase() == 'hello'? I predict True.");
console.log(word.toLowerCase() == 'hello');
// Numerical Tests:
var num1 = 5;
var num2 = 10;
console.log("Is num1 == num2? I predict False.");
console.log(num1 == num2);
console.log("Is num1 != num2? I predict True.");
console.log(num1 != num2);
console.log("Is num1 > num2? I predict False.");
console.log(num1 > num2);
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2);
console.log("Is num1 >= num2? I predict False.");
console.log(num1 >= num2);
console.log("Is num1 <= num2? I predict True.");
console.log(num1 <= num2);
// Logical Operators:
console.log("Is isAdult && age > 16? I predict True.");
console.log(isAdult && age > 16);
console.log("Is uninvitedGuest == 'Alice' || age < 18? I predict False.");
console.log(uninvitedGuest == 'Huxaifa' || age < 18);
// Array Tests:
console.log("Is 'apple' in fruits? I predict True.");
console.log('apple' in fruits);
console.log("Is uninvitedGuest in fruits? I predict False.");
console.log(uninvitedGuest in fruits);
