// Immediately invoked function expression
// to not pollute the global scope

// make header invisible, then vsible within a function/event lsitener?
// let confetti = document.getElementsByClassName("confetti")
// let confettiOn = confetti.style.display = "flex";

// let confettiOff = confetti.style.display = "none";


(function() {
    const wheel = document.querySelector(".wheel");
    const startButton = document.querySelector(".spin");
    let deg = 0;

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
        
        // // confetti.style.remove("no")
        // confetti.classList.remove("no")
        // confetti.classList.add("yes")

    });
   })();

// Have to toggle confetti on from default off. So you change its display from ?false to active
// confetti display = false ?


// let toggleOn = document.querySelector('.toggle-me');

// function toggleOn() {
//   el.classList.toggle('active');
// }







// confetti attempt:

//    function celebrate() {
//     //    party.confetti(element);
//     party.confetti(element,{
//         /**
//          * Whether the debugging mode should be enabled.
//          */
//         debug: false,
//         /**
//          * The amount of gravity to apply to particles in the scene, in pixels.
//          * Note that this value is positive by default, since the y-axis increases
//          * downwards in a DOM.
//          */
//         gravity: 800,
//         /**
//          * The z-index to place the DOM containers at.
//          */
//         zIndex: 99999,
//         shapes: ["square"]
//       });
//     }
//     celebrate()




// const btn = document.getElementById("btn")
// const img = document.getElementById("img")


// imageArray = [
//     "1.jpeg",
//     "2.jpeg",
//     "3.jpeg",
//     "4.jpeg",
//     "5.jpeg",
//     "6.jpeg",
//     "7.jpeg",
//     "8.jpeg",
//     "9.jpeg",
//     "10.jpeg"
// ]

// function getRandomImage() {

//     randomIndex = Math.floor(Math.random() * imageArray.length);
// }

// selectedImage = imageArray[randomIndex]

// document.getElementById("img").src = `./images/${selectedImage}`


// // function click() {
// //     btn.onClick = console.log("hi")
// // }

// // click()

// // function getRandomImage(imgAr, path) {
// //     path = path || 'images/'; // default path here
// //     var num = Math.floor( Math.random() * imgAr.length );
// //     var img = imgAr[ num ];
// //     var imgStr = '<img src="' + path + img + '" alt = "">';
// //     document.write(imgStr); document.close();
// // }

// // getRandomImage(ARRAY-VARIABLE, '/images/')

// // or

// // var imgArray = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'];
// // var basePath="YOUR_FOLDER_PATH_HERE";

// // function imgRandom() {
// //     for (var i = 0; i < 18; i++) {
// //         var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
// //         var image = new Image();
// //         image.src = basePath+rand;
// //         document.body.appendChild(image);
// //     }
// // }


// // const item = items[Math.floor(Math.random()*items.length)];

// // const Btn = document.getElementById("btn")

// // function display_random_image() 
// // {
// //      var theImages = [{
// //         src: "images/1.jpg",
// //         width: "240",
// //         height: "1"
// //     }, {
// //         src: "images/2.jpg",
// //         width: "",
// //         height: ""
// //     }, {
// //         src: "images/3.jpg",
// //         width: "",
// //         height: ""
// //     }];
    
// //     var preBuffer = [];
// //     for (var i = 0, j = theImages.length; i < j; i++) {
// //         preBuffer[i] = new Image();
// //         preBuffer[i].src = theImages[i].src;
// //         preBuffer[i].width = theImages[i].width;
// //         preBuffer[i].height = theImages[i].height;
// //     }
   
// // // create random image number
// //   function getRandomInt(min,max) 
// //     {
// //       //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
// // imn = Math.floor(Math.random() * (max - min + 1)) + min;
// //     return preBuffer[imn];
// //     }  

// // // 0 is first image,   preBuffer.length - 1) is  last image
  
// // var newImage = getRandomInt(0, preBuffer.length - 1);
 
// // // remove the previous images
// // var images = document.getElementsByTagName('img');
// // var l = images.length;
// // for (var p = 0; p < l; p++) {
// //     images[0].parentNode.removeChild(images[0]);
// // }
// // // display the image  
// // document.body.appendChild(newImage);
// // }
