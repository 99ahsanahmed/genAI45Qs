// 24
var cat:string = 'animal';
console.log("For equality ");
console.log( cat == 'animal' );
console.log("For inequality");
console.log( cat != 'animalsss' );
// Tests using the lower case function
var country:string = 'PAKISTAN';
country.toLowerCase();
console.log( country == 'pakistan' );
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1:number = 34;
var num2:number = 88;
console.log( num1 == num2 );
console.log( num1 != num2 );
console.log( num1 > num2 );
console.log( num1 < num2 );
console.log( num1 <= num2 );
console.log( num1 >= num2 );
// Tests using "and" and "or" operators
console.log( num1 < num2 && num1<33);
console.log( num2 < 91 || num1 > num2);
// Test whether an item is in a array
// Test whether an item is not in a array
let arr:string[] = ['1' , '0', '78'];
console.log(arr.includes('0'));
console.log(arr.includes('99'));