// 31
var users_:string[]=['user1','user9','user2','user4','user'];
while(users_.length > 0) {
    users_.pop();
}
if ( users_.length == 0  ){
    console.log('we need to find some users');
}