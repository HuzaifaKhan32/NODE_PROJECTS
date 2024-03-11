/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
let names_magicions: string[] = ["Merlin", "Houdini", "David Copperfield", "Harry Potter"];
function make_great(magicion: string[]) : string[] {
    let newMagicion: string[] = [...magicion];
    for (let i = 0; i < newMagicion.length; i++) {
        newMagicion[i] = `The Great ${newMagicion[i]}`;
    }
    return newMagicion
}
function show_magicion(magicion: string[]) : void {
    for (let name of magicion) {
        console.log(name);
    }
}
let great_magicion = make_great(names_magicions);
console.log("Original Array:")
show_magicion(names_magicions);
console.log("Array with added 'The Great':");
show_magicion(great_magicion);
