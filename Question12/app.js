"use strict";
let friend_name = ["Ebtisam", "Ghilman", "Abdul Wasey", "Hashir"];
let meassage = "Hi! [NAME] hope you're doing OK";
for (let friend of friend_name) {
    let personmeassage = meassage.replace("[NAME]", friend);
    console.log(personmeassage);
}
