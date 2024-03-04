
//15 
var personsList:string[]=['Asim','Farrukh Khan','Shazaib','Faheem'];
personsList.forEach(card);
function card (value:string){
    console.log( value + ', I would like to invite you for dinner at my house')
}
console.log('Unfortunately ' + personsList[2] + ' will not be able to come to dinner')
personsList[2]='Saim';
personsList.forEach(re_card);
function re_card (value:string){
    console.log( value + ', I would like to invite you for dinner at my house')
}



