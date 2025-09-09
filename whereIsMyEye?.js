// Incomplete Text Adventure Game, to be revisited and expanded upon later.
const prompt = require('prompt-sync')()

console.log("==============================")
console.log("Who are you?\n")
console.log("==============================")
const name = prompt("> ")


console.log("==============================")
console.log("Are you ready to stand before me?",name, "Yes or No?\n", )
console.log("==============================")
const playerReady = prompt("> ")

if(playerReady.toLowerCase() === "yes" || "y") {
    console.log("==============================")
    console.log("Let us begin.\n")

    //game Logic
    console.log("==============================")
    console.log("You find yourself in a dark room with two doors. One to your left and one to your right.\n")
    console.log("Do you want to go left or right?")
    const leftorRight= prompt("> ")
    
    if(leftorRight.toLowerCase() === "left" || "l"){
        console.log("==============================")
        console.log("You are devoured by a creature you could not see.\n")
        console.log("Your soul is lost.")
        return;
}   else if(leftorRight.toLowerCase() === "right" || "r"){
        console.log("==============================")
        console.log("You proceed forward and find yourself in a room with a giant spider web.\n")
        console.log("You find a note warning you of the treacherous needleworker of fate, Weaver\n")
        console.log("it reads a tale of how Weavers Eye was stolen and by whom.\n")
        console.log("It rests in the hands of the vile thieving bird.\n")
        console.log("You must find the bird and reclaim the eye or report it to Weaver.\n")
        }
    else {
        console.log("You stayed in the room for too long, you have been devoured by an invisible creature\n")
        console.log("Your soul is lost.")
        return;
    }
}

    else if(playerReady.toLowerCase() === "no" || "n") {
    console.log("==============================")
    console.log("Ill wait as long as necesary but do be aware that my patience runs thin")
    return;
 }
 else {
    console.log("Gibberish wont save you for long\n")
    console.log("Begone!!!")
    return;
}


/*console.log("==============================")
console.log("Where is my Eye? \n")
console.log("==============================")
const answer = prompt("> ")
console.log("What do you mean " +answer+ " ?")*/
