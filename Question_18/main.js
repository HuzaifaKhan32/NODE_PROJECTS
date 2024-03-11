"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
var favourite_place = ["Khana-e-Kaba", "Berlin", "Oslo", "Dubai", "Singapore"];
console.log("Orignal Oder:", favourite_place);
// using sort method to arrange array in alphabetical order without modifying the orignal array
console.log("Alphabetically Arranged:", __spreadArray([], favourite_place, true).sort());
console.log("Still in orignal order:", favourite_place);
// using reverse function with sort function to Arranged in reverse alphabetical order  
console.log("Arranged in reverse alphabetical order:", __spreadArray([], favourite_place, true).sort().reverse());
console.log("Still in orignal order:", favourite_place);
favourite_place.reverse();
console.log("Reversing the array", favourite_place);
favourite_place.reverse();
console.log("Reverse the array again so it comes in its orignal order", favourite_place);
favourite_place.sort();
console.log("Alphabetically arranged:", favourite_place);
favourite_place.sort().reverse();
console.log("Arranged in reverse alphabetical order:", favourite_place);
