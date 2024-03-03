const magicians: string[] = ["Adeel Hashmi", "Sahir Ali Bagga", "Javed Iqbal"];

function show_magicians(magicians: string[]): void
{
  for (const magician of magicians)
  {
    console.log(magician);
  }
}

show_magicians(magicians);