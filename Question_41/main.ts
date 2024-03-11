/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
let Magiciansnames : string[] = ["Merlin", "Houdini", "David Copperfield", "Harry Potter"];
function magicions_name() : void{
    for(let name of Magiciansnames){
        console.log(name);
    }
}
magicions_name();


