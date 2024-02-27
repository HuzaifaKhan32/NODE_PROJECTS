"use strict";
let guestNames = ["Mr. Kamal", "Mr. Abdul Rauf", "Mr. Iqbal", "Mr. Mohsin"];
let cannotAttend = "Mr. Abdul Rauf";
console.log(`${cannotAttend} can't attend the dinner for some reason`);
guestNames.splice(1, 1, "Mr. Riyaz");
console.log(guestNames);
