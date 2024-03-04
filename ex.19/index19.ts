//19
//Using 14th
var peeps:string[]=['Asim','Farrukh Khan','Shazaib','Faheem'];
peeps.forEach(invitepees);
function invitepees (value:string){
    console.log( value + ', I would like to invite you for dinner at my house')
}
console.log( 'Number of people I am inviting is: '+ peeps.length );
