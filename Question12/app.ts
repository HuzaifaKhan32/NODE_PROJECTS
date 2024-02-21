let friend_name : string[] = ["Ebtisam", "Ghilman", "Abdul Wasey", "Hashir"];
let meassage : string = "Hi! [NAME] hope you're doing OK";
for(let friend of friend_name){
    let personmeassage : string = meassage.replace("[NAME]", friend)
    console.log(personmeassage); 
}