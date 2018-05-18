const musicians = [];
const instruments = [];

const theBeatlesPlay = (musicians, instruments) => {
  //const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  //const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var i;
  for (i = 0; i <= musicians.length-1; i++) { //musicians and instruments will be equilength.
    console.log(musicians[i] + " plays " + instruments[i]);
  }
}