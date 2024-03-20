//Assignment No. 5
//Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Pablo Picasso";
var quote = "Learn the rules like a pro, so you can break them like an artist. ";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
