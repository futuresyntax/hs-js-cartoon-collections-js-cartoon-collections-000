
function dwarfRollCall(dwarves) {
  let dwarfNumbers = []
  
  for(let i=0; i<dwarves.length; i++) {
    dwarfNumbers.push(i+1 + ". " + dwarves[i]);
  }
  
  
  return dwarfNumbers.join(' ') + " ";
}

function summonCaptainPlanet(planeteerCalls){
    var newCall = [];
      for(var i = 0; i < planeteerCalls.length; i++) {
        newCall.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return newCall;
}

function longPlaneteerCalls(words) {
   for(var i =0; i < words.length; i++){
    if(words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
    for(var i =0; i < foods.length; i++) {
      if(foods[i] === 'cheddar') {
        return foods[i];
    } 
  }
   if(foods !== 'cheddar') {
    return 'no cheese!';
  }
}
learn submit