//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guests = ["Hamza", "Ali", "Hammad"];
var uninvitedGuest = "Ali";
console.log("\nUnfortunately, ".concat(uninvitedGuest, " cannot make it to dinner."));
guests[guests.indexOf(uninvitedGuest)] = "Huxaifa";
console.log("\nSecond set of invitation messages:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", I would be honored if you could join me for dinner."));
}
