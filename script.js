const kickoff = () => {
    const turnOn = document.querySelector(".turnon");
    const wheel = document.querySelector(".wheel");
    const startButton = document.querySelector(".spin");
    let deg = 0;

window.addEventListener('DOMContentLoaded', kickoff, false);


    startButton.addEventListener("click", () => {
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
    });
};
