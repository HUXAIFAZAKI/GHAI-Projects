var originalMagicians = ["Adeel Hashmi", "Sahir Ali Bagga", "Javed Iqbal"];
function copyArray(arr) {
    var copy = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        copy.push(element);
    }
    return copy;
}
function make_great_and_show(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "".concat(magicians[i], " the Great");
    }
    show_magicians(magicians);
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var modifiedMagicians = copyArray(originalMagicians);
make_great_and_show(modifiedMagicians);
console.log("Original magicians:");
show_magicians(originalMagicians);
