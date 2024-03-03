const guests = ["Hamza", "Ali", "Hammad"];

for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear " + guest + ", I would be honored if you could join me for dinner.");
}

const uninvitedGuest = "Ali";

console.log(`\nUnfortunately, ${uninvitedGuest} cannot make it to dinner.`);

guests[guests.indexOf(uninvitedGuest)] = "Huxaifa";

console.log("\nSecond set of invitation messages:");
for (let guest of guests) {
  console.log(`Dear ${guest}, I would be honored if you could join me for dinner.`);
}

console.log("\nI found a bigger dinner table! More guests can join!");

guests.unshift("Ahmed");
guests.splice(1, 0, "Salman");
guests.push("Sameer"); 

console.log("\nNew set of invitation messages:");
for (let guest of guests) {
  console.log(`Dear ${guest}, I would be honored if you could join me for dinner.`);
}