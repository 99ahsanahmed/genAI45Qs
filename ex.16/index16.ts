// 16
var personsList:string[]=['Asim','Farrukh Khan','Saim','Saleem'];
personsList.forEach(oldinvitation);
function oldinvitation (value:string){
    console.log( value + ', I would like to invite you for dinner at my house')
}
//Table
console.log("GUYSS!! I'VE GOT A NEW TABLE ")
personsList.unshift('Ahsan');
personsList.splice(2,0, 'Shafay');
personsList.push('Umair');
//New invite to new list with added peoples
personsList.forEach(reinvitation);
function reinvitation (value:string){
    console.log( value + ', I would like to invite you for dinner at my house')
}