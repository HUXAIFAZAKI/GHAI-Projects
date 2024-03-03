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
console.log("\nUnfortunately, the new dinner table won't arrive on time. I can only invite two people.");
while (guests.length > 2) {
    var removedGuest = guests.pop(); // Remove from the end and store the removed name
    console.log("Dear ".concat(removedGuest, ", I'm so sorry, but due to unforeseen circumstances, I can't invite you to dinner anymore."));
}
// Notify remaining guests and confirm their invites
console.log("\nThe remaining guests are:");
for (var _c = 0, guests_4 = guests; _c < guests_4.length; _c++) {
    var guest_3 = guests_4[_c];
    console.log("Dear ".concat(guest_3, ", you're still invited to dinner!"));
}
guests.pop();
guests.pop();
console.log("\nFinal list (should be empty):", guests);
