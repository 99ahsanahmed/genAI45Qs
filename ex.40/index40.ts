// 40
function make_album(artist:string,album:string,track?:number){
    var musicAlbum:{artist_obj:string,album1_obj:string,track_obj?:number}={
        artist_obj: artist ,
        album1_obj: album ,
        track_obj:track   
    };
    return musicAlbum;
}
console.log(make_album('Shariq','zindagi'));
console.log(make_album('Shariq','jawaani'));
console.log(make_album('Shariq','zindagi',89));

