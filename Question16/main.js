var GuestNames = ["Mr. Kamal", "Mr. Riyaz", "Mr. Iqbal", "Mr. Mohsin"];
for (var i = 0; i < GuestNames.length; i++) {
    console.log("Dear ".concat(GuestNames[i], " , I just have found a bigger dinner table "));
}
console.log("I am inviting some new guests");
GuestNames.unshift("Mr. Ghilman");
GuestNames.push("Mr. Ayan");
GuestNames.splice(3, 0, "Mr. Hashir");
var Invitation = "Please, Have a dinner with me!";
for (var i = 0; i < GuestNames.length; i++) {
    console.log(GuestNames[i] + ", " + Invitation);
}
