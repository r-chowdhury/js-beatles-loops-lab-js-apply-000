const musicians = [];
const instruments = [];

const theBeatlesPlay = (musicians, instruments) => {
  var i;
  let playerToInstrument = []
  for (i = 0; i <= musicians.length-1; i++) { //musicians and instruments will be equilength.
    console.log(musicians[i] + " plays " + instruments[i])
  }
}