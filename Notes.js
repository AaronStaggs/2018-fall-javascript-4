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
printFirstNames(addressBook);

function printAddress(add){
    for(var i = 0; i < add.length; i++){
        console.log(add[i].address)
    }
}
printAddress(addressBook);