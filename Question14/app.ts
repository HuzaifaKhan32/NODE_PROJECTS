let guest_names : string [] = ["Mr. Kalam", "Mr. Abdul Rauf", "Mr. Iqbal", "Mr. Mohsin"];
let invitation : string = "Please, Have a dinner with me!"; 
for(let i = 0; i < guest_names.length; i++ ){
    console.log(guest_names[i] + ", " + invitation);
}