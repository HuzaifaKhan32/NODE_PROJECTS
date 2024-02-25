let guestNames: string[] = ["Mr. Kalam", "Mr. Abdul Rauf", "Mr. Iqbal", "Mr. Mohsin"];  
let cannotAttend : string = "Mr. Abdul Rauf";
console.log(`${cannotAttend} can't attend the dinner for some reason`);
guestNames.splice(1, 1, "Mr. Riyaz");
console.log(guestNames);
