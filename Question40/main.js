function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album = make_album("The Beatles", "Abbey Road");
var album1 = make_album("Queen", "A Night at the Opera");
var album2 = make_album("Michael Jackson", "Thriller", 9);
console.log(album);
console.log(album1);
console.log(album2);
