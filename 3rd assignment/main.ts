//Assignment No. 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string =" Ruman Aslam"
//lowercase
console.log(personName.toLowerCase());

//UpperCase
console.log(personName.toUpperCase());

//TitleCase
console.log(personName.replace(/\b\w/g, c => c.toUpperCase()));