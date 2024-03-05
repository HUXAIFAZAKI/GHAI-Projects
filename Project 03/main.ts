let personName = "syed Huzaifa";

console.log("Uppercase : " + personName.toUpperCase());
console.log("Lowercase : " + personName.toLowerCase());

function titleCase(word:string)
{
    let phrase;
    phrase = word.split(" ");
    // console.log(name)
    for (let i = 0; i < phrase.length; i++) {
        //console.log(name[i])
        phrase[i] = phrase[i].charAt(0).toUpperCase() + phrase[i].slice(1);
        //console.log(name[i])
    }
    return phrase.join(" ");
}
console.log("TitleCase : ", titleCase(personName));