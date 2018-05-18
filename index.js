const theBeatlesPlay = (musician, instrument) => {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var i;
  for (i = 0; i <= musicians.length; i++) { //musicians and instruments will be equilength.
    console.log(musicians[i] + " plays " + instruments[i] + ".");
  }
}