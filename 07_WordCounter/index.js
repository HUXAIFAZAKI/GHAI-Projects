import inquirer from "inquirer";
console.clear();
let phrase = await inquirer.prompt([
    {
        type: "input",
        name: "phrase",
        message: "Enter your Phrase"
    }
]);
// let phrase:string = "The quick brown fox jumps over the lazy dog";//35
console.log(phrase.phrase);
let words = phrase.phrase.trim();
console.log(words);
function wordCounter(str) {
    return str.split(' ').filter(function (n) { return n != ''; }).length;
}
let totalWords = wordCounter(words);
console.log(`TOTAL WORDS = ${totalWords}`);
//ADD INQUIRER
