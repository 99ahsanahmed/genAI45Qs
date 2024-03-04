var peopleList:string[]=['Asim','Farrukh Khan','Saim','Saleem'];
peopleList.unshift('Ahsan');
peopleList.splice(2,0, 'Shafay');
peopleList.push('Umair');
console.log('Sorry guys I can invite only two peoples ;) ')
var i:number = peopleList.length;
while ( i > 2 ) {
    console.log( peopleList.pop() + ', I am sorry I cannot invite you for dinner')
    i--;
}

peopleList.forEach(_people);
function _people (value:string){
    console.log( '\n' + value + ', I would like to invite you for dinner at my house')
}
var ii:number = peopleList.length;
while ( ii > 0 ) {
       peopleList.pop()
    ii--;
}
console.log(peopleList);
