var user1 = {
    firstName: "Aaron",
    lastName: "Staggs",
    address: "888 That Road",
    phone: "555-555-5555",
    age: 32
}
var user2 = {
    firstName: "Jackie",
    lastName: "Staggs",
    address: "888 That Road",
    phone: "555-555-5555",
    age: 29
}
var addressBook = [
{
    firstName: "Aaron",
    lastName: "Staggs",
    address: "888 That Road",
    phone: "555-555-5555",
    age: 32
},
{
    firstName: "Jackie",
    lastName: "Staggs",
    address: "888 That Road",
    phone: "555-555-5555",
    age: 29
},
{
    firstName: "Cory",
    lastName: "Justice",
    address: "726 That Other Road",
    phone: "555-555-5555",
    age: 32
}
]

function printFirstNames(add){
    for(var i = 0; i < add.length; i++){
        console.log(add[i].firstName)
    }
}
//printFirstNames(addressBook);

//printAddress(addressBook);

// var ourFunction = function(thing){
//     for(var i = 0; i<thing.length;i++){
//         console.log(thing[i].lastname);
//     };
// }

// function ourConsole(message1){
//     return function(message2){
//         console.log("This is our message1 out: "+message1)
//         console.log("This is our message2 out: "+message2)
//     }
// }

//var mgs = ourConsole();
//mgs()

function forEach(arr1, func1){
for(var i = 0; i<arr1.length; i++){
    func1(arr1[i]);
    }
}


function printName(x){
    console.log(x.firstName, x.lastName);
}

function printAddr(x){
    console.log(x.address);
}


function printContact(add){
    for(var i = 0; i < add.length; i++){
        console.log("===============================")
        console.log(add[i].firstName, add[i].lastName)
        console.log(add[i].address) 
        console.log(add[i].phone)
        console.log("===============================")
        console.log(" ")
    }
}
var printContact2 =function(contact){
    console.log("===============================")
    console.log(contact.firstName, contact.lastName)
    console.log(contact.address) 
    console.log(contact.phone)
    console.log("===============================")
    console.log(" ")
}




//forEach(addressBook, printName);
//forEach(addressBook, printAddr);
forEach(addressBook, printContact2)
//forEach(addressBook, function(x){console.log(x.phone)})

var printhello = function(){
    console.log("Hello Everyone!!")
}

setTimeout(function(){
    console.log("Goodbye Everyone!")
}, 500);
