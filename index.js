
function dwarfRollCall(dwarves) {
  let dwarfNumbers = []
  
  for(let i= dwarves.lenght/2; i<dwarves.length/ 2; i++) {
    dwarfNumbers.push(i+1 + ". " + dwarves[i]);
  }
  
  
  return dwarfNumbers.join(' ') + " ";
  for(let i=0; i<dwarves.length; i++) {
    dwarfNumbers.push(i+1 + ". " + dwarves[i]);
    
    
  }
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
      if(foods[i] === 'cheddar'||foods[i] ===  'swiss') {
        return foods[i];
    } 
  }
   if(foods !== 'cheddar', 'swiss') {
    return 'no cheese!';
  }
}

function wordsWithB (words) {
  var arr = [ ]
  for (var i = 0; i< words.length; i++) {
    if(words[i].startsWith ('B')) {
      arr.push(words[i])
      
   }
  }
   return arr;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
}

