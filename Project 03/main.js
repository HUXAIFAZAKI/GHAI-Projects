var Name = "Huzaifa";
var lowerCase = Name.toLowerCase();
var upperCase = Name.toUpperCase();
var titleCase = Name.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
console.log(lowerCase);
console.log(upperCase);
console.log(titleCase);
