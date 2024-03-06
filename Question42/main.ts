/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/ 
let magicionsNames : string[] = ["Merlin", "Houdini", "David Copperfield", "Harry Potter"];
function make_great(){
    for(let i = 0; i < magicionsNames.length; i++){
        magicionsNames[i] = `The Great ${magicionsNames[i]}`
    }
}
function show_magicion (){
    for(let names of magicionsNames){
        console.log(names)
    }
}
make_great();
show_magicion();