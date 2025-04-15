// Nested Array and Objects.
// Values in objects can be arrays, and values in arrays can be objects.
let persons = [
    {name : "Ramesh", gender: "male"},
    {name : "Ramya", gender: "female"},
    {name : "Suresh", gender: "male"},
    {name : "Suraksha", gender: "female"},
    {name : "rajesh", gender: "male"},
    {name : "pooja", gender: "female"},
    {name : "ganesh", gender: "male"}
  ];
  

let femaleName=persons.filter((femalePerson)=>{
    return femalePerson.gender=="female";
})

let maleName=persons.filter((malePerson)=>{
    return malePerson.gender=="male";

})
// Display only Female Names:
console.log("Females names list" );
for (let i in femaleName) {
    console.log( femaleName[i].name);
}

// Display only Male Names:
console.log("Males names list" );
for (let i in maleName) {
   console.log( maleName[i].name);
}
