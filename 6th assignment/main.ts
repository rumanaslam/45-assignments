//Assignment No.6
/*Stripping Names:
 Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. */

 
 let personsName:string ="\n\t   Ruman Aslam   \t\n "
 // print name with whitespaces
console.log(" name with whitespace:", personsName);

//trim whitespace
let stripped:string= personsName.trim();
//print the name.
console.log(stripped);