interface Album {
    artist : string;
    title : string;
    tracks? : number
}
function make_album(artist : string, title : string, tracks? : number) : Album{
    let album : Album ={
        artist, 
        title 
    }
    if (tracks !== undefined){
        album.tracks = tracks
    }
    return album
}
let album = make_album("The Beatles", "Abbey Road");
let album1 = make_album("Queen", "A Night at the Opera");
let album2 = make_album("Michael Jackson", "Thriller", 9);
console.log(album);
console.log(album1);
console.log(album2);


