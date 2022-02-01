const kickoff = () => {
    const turnOn = document.querySelector(".turnon");
    const wheel = document.querySelector(".wheel");
    const startButton = document.querySelector(".spin");
    const display = document.querySelector(".display")
    
    let deg = 0;
    let zoneSize = 40; // deg

    const emojiZones = {
        1: "You've won a Althorp Lamb painting! <br> Send a screenshot to Thaïs and await your options!",
        2: "You've won a Barbican Walk painting! <br> Send a screenshot to Thaïs and await your options!",
        3: "You've won a painting from the Misc category! <br> Send a screenshot to Thaïs and await your options!",
        4: "You've won a Althorp Lamb painting! <br> Send a screenshot to Thaïs and await your options!",
        5: "You've won a Barbican Walk painting! <br> Send a screenshot to Thaïs and await your options!",
        6: "You've won a painting from the Misc category! <br> Send a screenshot to Thaïs and await your options!",
        7: "You've won a Althorp Lamb painting! <br> Send a screenshot to Thaïs and await your options!",
        8: "You've won a Barbican Walk painting! <br> Send a screenshot to Thaïs and await your options!",
        9: "You've won a painting from the Misc category! <br> Send a screenshot to Thaïs and await your options!",
    }

    const handleWin = (actualDeg) => {
        const winningSymbolNr = Math.ceil(actualDeg / zoneSize)
        display.innerHTML = emojiZones[winningSymbolNr]
    }


    startButton.addEventListener("click", () => {
        
        // display.innerHTML = ""

        startButton.style.pointerEvents = "none";

        // test dif degrees below
        deg = Math.floor(5000 + Math.random() * 5000)

        wheel.style.transition = "all 10s ease-out";
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add("blur");
    });

    wheel.addEventListener("transitionend", () => {
        wheel.classList.remove("blur");
        startButton.style.pointerEvents = "auto";
        wheel.style.transition = "none";
        const actualDeg = deg % 360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;

        // let turnOn = document.querySelector(".no");

        turnOn.classList.add("confetti-on")

        document.getElementById("congrats").innerText = "Congratulations!! 🎉"
        // document.getElementById("body").innerHTML = `You've won an artwork relating to this theme. <br> Send a screenshot to Thaïs and await your options!`
        
        handleWin(actualDeg)
   
    });
};

window.addEventListener('DOMContentLoaded', kickoff, false);
