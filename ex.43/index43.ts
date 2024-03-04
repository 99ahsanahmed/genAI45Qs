//43
var magicianss:string[] = ['john','maxwell','pollard'];
var copy:string[] = magicianss.slice();

function  make_great(magic:string[]){
        for(var i=0;i<magic.length;i++){
            magic[i]='great ' + magic[i];
        }
    }
    make_great(copy);
function show_magicians(magic:string[]){
    for (let i = 0; i < magic.length; i++) {
    console.log(magic[i]);
}
}
console.log('Array with unchanged names')
show_magicians(magicianss);

console.log('Array with changes, hence a copy of original array')
show_magicians(copy);
