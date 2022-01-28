fetch("https://api.ipgeolocation.io/astronomy?apiKey=114a9550036f4075bc17eacf96ec468f")
    .then(response => response.json())
    .then(data => {
        // console.log(data.sunrise),
        document.getElementById("sunrise").textContent = data.sunrise,
        document.getElementById("sunset").textContent = data.sunset,
        document.getElementById("moonrise").textContent = data.moonrise,
        document.getElementById("moonset").textContent = data.moonset,
        document.getElementById("sun-distance").textContent = data.sun_distance,
        document.getElementById("moon-distance").textContent = data.moon_distance},
    )
      
// get a planet, eg, sun
document.querySelector('.sun').addEventListener( 'mouseover', () => {
    // Apply the 'visible' class to its two data sibling elements
    
  } )

// add hover selector to it, so probably add this to the above
.addEventListener( 'mouseover', () => {
  // Apply the 'visible' class to its two data sibling elements
} )

// Add another event listener for mouse out (when hover ends)
.addEventListener( 'mouseout', () => {
  // Remove the 'visible' class frok its two data sibling elements
} )

// Repeat the above for the other 2 planets
