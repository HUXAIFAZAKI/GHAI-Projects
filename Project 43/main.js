var originalMagicians = ["Adeel Hashmi", "Sahir Ali Bagga", "Javed Iqbal"];
function copyArray(arr) {
    var copy = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        copy.push(element);
    }
    return copy;
}
function make_great(magicians) {
    var modifiedMagicians = copyArray(magicians);
    for (var i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "".concat(modifiedMagicians[i], " the Great");
    }
    return modifiedMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var modifiedMagicians = make_great(originalMagicians);
console.log("Original magicians:");
show_magicians(originalMagicians);
console.log("\nGreat magicians:");
show_magicians(modifiedMagicians);
