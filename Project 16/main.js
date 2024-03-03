var guests = ["Hamza", "Ali", "Hammad"];
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear " + guest + ", I would be honored if you could join me for dinner.");
}
var uninvitedGuest = "Ali";
console.log("\nUnfortunately, ".concat(uninvitedGuest, " cannot make it to dinner."));
guests[guests.indexOf(uninvitedGuest)] = "Huxaifa";
console.log("\nSecond set of invitation messages:");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest_1 = guests_2[_a];
    console.log("Dear ".concat(guest_1, ", I would be honored if you could join me for dinner."));
}
console.log("\nI found a bigger dinner table! More guests can join!");
guests.unshift("Ahmed");
guests.splice(1, 0, "Salman");
guests.push("Sameer");
console.log("\nNew set of invitation messages:");
for (var _b = 0, guests_3 = guests; _b < guests_3.length; _b++) {
    var guest_2 = guests_3[_b];
    console.log("Dear ".concat(guest_2, ", I would be honored if you could join me for dinner."));
}
