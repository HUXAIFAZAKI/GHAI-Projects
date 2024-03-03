// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const Friends:string[] = ["Anas","Sammer","Hamza","Mustafa","Saad"];

for (let i = 0; i < Friends.length; i++) {
    console.log("How are you", Friends[i]);
}