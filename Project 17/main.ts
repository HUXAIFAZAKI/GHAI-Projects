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

console.log("\nUnfortunately, the new dinner table won't arrive on time. I can only invite two people.");

while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Dear ${removedGuest}, I'm so sorry, but due to unforeseen circumstances, I can't invite you to dinner anymore.`);
  }
  
  console.log("\nThe remaining guests are:");
  for (let guest of guests) {
    console.log(`Dear ${guest}, you're still invited to dinner!`);
}
  
guests.pop();
guests.pop();
console.log("\nFinal list (should be empty):", guests);