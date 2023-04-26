let Name = "John Smith"
let parts = Name.split(' ')
let firstName = parts.shift();  // John
let lastName = parts.join(' '); // Smith

console.log({
firstName,
lastName
})