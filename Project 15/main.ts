//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

const guests = ["Hamza", "Ali", "Hammad"];

const uninvitedGuest = "Ali";

console.log(`\nUnfortunately, ${uninvitedGuest} cannot make it to dinner.`);

guests[guests.indexOf(uninvitedGuest)] = "Huxaifa";

console.log("\nSecond set of invitation messages:");
for (let guest of guests) {
  console.log(`Dear ${guest}, I would be honored if you could join me for dinner.`);
}