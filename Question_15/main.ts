/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/
let guestNames: string[] = ["Mr. Kamal", "Mr. Abdul Rauf", "Mr. Iqbal", "Mr. Mohsin"];  
let cannotAttend : string = "Mr. Abdul Rauf";
console.log(`${cannotAttend} can't attend the dinner for some reason`);
// using 'splice' method to remove and insert new Element 
guestNames.splice(1, 1, "Mr. Riyaz");
console.log(guestNames);
