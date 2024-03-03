function makeAlbum(artist, albumTitle, tracks) {
    return { artist: artist, albumTitle: albumTitle, tracks: tracks };
}
// Creating albums
var album1 = makeAlbum("The Beatles", "Abbey Road", 5);
var album2 = makeAlbum("Pink Floyd", "The Dark Side of the Moon", 6);
var album3 = makeAlbum("Kendrick Lamar", "To Pimp a Butterfly", 14);
// Printing albums
console.log(album1);
console.log(album2);
console.log(album3);
