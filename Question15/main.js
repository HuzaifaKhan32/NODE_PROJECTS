var guestNames = ["Mr. Kalam", "Mr. Abdul Rauf", "Mr. Iqbal", "Mr. Mohsin"];
var cannotAttend = "Mr. Abdul Rauf";
console.log("".concat(cannotAttend, " can't attend the dinner for some reason"));
guestNames.splice(1, 1, "Mr. Riyaz");
console.log(guestNames);
