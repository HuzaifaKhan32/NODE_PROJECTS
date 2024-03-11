"use strict";
let GuestNames = ["Mr. Kamal", "Mr. Riyaz", "Mr. Iqbal", "Mr. Mohsin"];
for (let i = 0; i < GuestNames.length; i++) {
    console.log(`Dear ${GuestNames[i]} , I just have found a bigger dinner table `);
}
console.log("I am inviting some new guests");
GuestNames.unshift("Mr. Ghilman");
GuestNames.push("Mr. Ayan");
GuestNames.splice(3, 0, "Mr. Hashir");
let Invitation = "Please, Have a dinner with me!";
for (let i = 0; i < GuestNames.length; i++) {
    console.log(GuestNames[i] + ", " + Invitation);
}
console.log(GuestNames);
