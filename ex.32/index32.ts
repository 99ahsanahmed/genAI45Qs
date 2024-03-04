// 32
var current_users:string[] = ['ahsan', 'fawad','ali','ahmed','musab'];
var new_users:string[] = ['ahsan', 'shaan','ALI','hassan','ansar'];
var new_usersl:string[] = new_users.map(func)
function func(element:string){
    return element.toLowerCase()
} 

for(var i=0; i < new_users.length;i++){
        if(new_usersl[i] === current_users[i] ){
            console.log('enter a new username');
        }
        else{
            console.log('username is available');
        }
    }