function makeAlbum(artist: string, albumTitle: string, tracks: number): { artist: string; albumTitle: string; tracks: number }
{
    return { artist, albumTitle, tracks };
}
  
  // Creating albums
  const album1 = makeAlbum("The Beatles", "Abbey Road",5);
  const album2 = makeAlbum("Pink Floyd", "The Dark Side of the Moon",6);
  const album3 = makeAlbum("Kendrick Lamar", "To Pimp a Butterfly", 14);
  
  // Printing albums
  console.log(album1);
  console.log(album2);
  console.log(album3);