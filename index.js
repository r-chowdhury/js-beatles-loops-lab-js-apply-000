const theBeatlesPlay = (musicians, instruments) => {
  var i;
  let playerToInstrument = [];
  for (i = 0; i <= musicians.length-1; i++) { //musicians and instruments will be equilength.
    playerToInstrument.push(musicians[i] + " plays " + instruments[i])
  }
  return playerToInstrument;
}

const johnLennonFacts = (facts) => {
  let i = 0;
  let loudJohnLennonFacts = [];
  while (i < johnLennonFacts.length) {
    loudJohnLennonFacts.push(johnLennonFacts[i] + '!!!')
  }
  return loudJohnLennonFacts;
}