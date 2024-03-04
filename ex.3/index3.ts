//3
var personName:string = 'ahSan sHah'
var upp:string = personName.toUpperCase();
var loww:string = personName.toLowerCase();
var newName = personName.toLowerCase();
var newName = newName.split(" ").map((l: string) => l[0].toUpperCase() + l.slice(1)).join(" ")
console.log( 'lower case value is: ' + loww + ' ,upper case is: ' + upp + ' and title case is this: ' + newName);
