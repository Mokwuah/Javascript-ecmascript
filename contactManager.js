const prompt = require("prompt-sync")()

function printInfo(){
    console.log ("Contact Management System")
    console.log("===========================")
    console.log(" 1. Add Contact")
    console.log(" 2. Delete Contact")
    console.log(" 3. View Contact")
    console.log(" 4. Search Contacts")
    console.log(" 5. Exit")
}

function addContact() {
    console.log("Insert Name:")
    const name = prompt("> ")
    console.log("Insert Email: ")
    const email = prompt("> ")
    const contact = {
        name: name,
        email: email,
    }
    contacts.push(contact);
    console.log("Added!")

}

function deleteContact() {
    console.log("Contact IDs")
    for(let i =0; i < contacts.length; i++){
        const contact = contacts[i]
        console.log((i + 1).toString()+ ":" ,contact.name)

    }
    console.log("Enter ID for Deletion: ")
    const id_No = parseInt(prompt("> "))
    if (isNaN(id_No) || id_No > contacts.length) {
        console.log("Invalid")
        return;
    }
    contacts.splice(id_No - 1, 1)
    console.log("Removed.")
}

function listContacts(contacts) {
    for(let contact of contacts){
        console.log("======================================")
        console.log('Name: ',   contact.name)
        console.log('Email:', contact.email)
        console.log("======================================")
    }
}

function searchContact() {
    console.log("Search: ")
    const searchString = prompt("> ").toLowerCase()
    const results = [];

    for (let contact of contacts){
        if(contact.name.toLowerCase().includes(searchString)) results.push(contact)
    }
    listContacts(results)
}


printInfo()

const contacts = [];
let keepGoing = true;

while(keepGoing){
    console.log("Enter an Operation Number (1-5): ")
    const number = prompt("> ")

switch(number){
    case "1":
        addContact()
        break;
    
    case "2":
        deleteContact()
        break;
    
    case "3":
        listContacts(contacts) 
        // pass contacts
        break;
    
    case "4":
        searchContact()
        break;
        
    case "5":
        keepGoing = false;
        console.log("Exiting Application...")
        break;    

    default:
        console.log("Invalid Operation Number")
        break;
}
}

// Name and Email
//add, delete, search, view and exit the application