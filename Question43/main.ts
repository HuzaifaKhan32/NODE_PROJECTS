let names_magicions: string[] = ["Merlin", "Houdini", "David Copperfield", "Harry Potter"];
function make_great(magicion: string[]) {
    let newMagicion: string[] = ["Merlin", "Houdini", "David Copperfield", "Harry Potter"];
    for (let i = 0; i < newMagicion.length; i++) {
        newMagicion[i] = `The Great ${newMagicion[i]}`;
    }
    return newMagicion
}
function show_magicion(magicion: string[]) {
    for (let name of magicion) {
        console.log(name);
    }
}
let great_magicion = make_great(names_magicions);
console.log("Original Array:")
show_magicion(names_magicions);
console.log("Array with added 'The Great':");
show_magicion(great_magicion);
