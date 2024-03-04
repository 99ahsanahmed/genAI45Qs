// 30
var users:string[]=['user1','user9','user2','user4','admin','user'];
for(var i=0 ; i<users.length ;i++){
    if( users[i] == 'admin' ){
        console.log(' \n Hello ' + users[i] + ' would you like to see a status report?')
    }
    else{
        console.log(' \n Hello ' + users[i] + ', thankyou for logging in again.')
    }
}