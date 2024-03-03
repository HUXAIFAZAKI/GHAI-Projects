var guests = ["Hamza", "Ali", "Hammad"];
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear " + guest + ", I would be honored if you could join me for dinner.");
}
var uninvitedGuest = "Ali";
console.log("\nUnfortunately, ".concat(uninvitedGuest, " cannot make it to dinner."));
var numberOfGuests = guests.length - 1;
// Print the number of invited guests
console.log("You are inviting ".concat(numberOfGuests, " people to dinner."));
