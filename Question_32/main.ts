/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
let current_users : string[] = ["hzaifa_nadeem", "ebtisam_nadeem", "RashidKhan123", "soul_caption", "itz_moid"];
let new_users : string[] = ["itz_mohib", "RashidKhan123", "hzaifa_nadeem", "Bilal_Waseem", "Mustafa_Kamran"];
for(let newUser of new_users){
    let isTaken = current_users.some((current_user) => current_user.toLowerCase() === newUser.toLowerCase())
    if(isTaken){
        console.log(`Your username ${newUser} is not available, Please, Enter the username again`);
    }
    else{
        console.log(`Your username ${newUser} is available`);
    }
}
