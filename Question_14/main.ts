/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. */
let guest_names : string [] = ["Mr. Kalam", "Mr. Abdul Rauf", "Mr. Iqbal", "Mr. Mohsin"];
let invitation : string = "Please, Have a dinner with us!"; 
for(let i = 0; i < guest_names.length; i++ ){
    console.log(guest_names[i] + ", " + invitation);
}