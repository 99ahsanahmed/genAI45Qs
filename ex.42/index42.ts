// 42
var magicians2:string[] = ['john','maxwell','pollard'];
function  make_great(magic:string[]){
    for(var i=0;i<magic.length;i++){
        magic[i]='great ' + magic[i];
    }
}
make_great(magicians2);
console.log(magicians2)
