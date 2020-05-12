let stereotype = [{
  name: "Magsasaka (Farmer)",
  color: "Sobrang Maitim",
  description: "lol"
}, {
  name: "Mahirap (Poor)",
  color: "Itim",
  description: "lol"
}, {
  name: "Karpintero (Carpenter)",
  color: "maitim",
  description: "lol"
}, {
  name: "Sunog (Burnt)",
  color: "pinakamaitim",
  description: "lol"
}, {
  name: "May kaya (Middleclass)",
  color: "Moreno",
  description: "lol"
}, {
  name: "Ganda (Beautiful)",
  color: "Puti",
  description: "lol"
}, {
  name: "Mapera (Rich)",
  color: "Lightskin",
  description: "lol"
}, {
  name: "Artista (Celebrity)",
  color: "white",
  description: "lol"
}];

let randomIndex;
let animating = false;
let brown = [];

function preload() {

  for (let i = 0; i <= 7; i++) {

    brown[i] = loadImage(`assets/brown_${i}.jpg`)
  }

}

function setup() {
  createCanvas(500, 500);
  background(31, 12, 3);
  textSize(15);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);

  text("Learn More", 250, 250)


}

function draw() {

  if (animating == true) {
    noStroke();
    fill(random(255), random(255), random(255), random(255));
    ellipse(random(width), random(height), random(50, 200));

  }
}




function randomizer() {
  animating = false;

  if (stereotype[0]) {
    // this displays random name and splices it out of array
    background(random(200, 255));
    randomIndex = int(random(stereotype.length));
    text(`${stereotype[randomIndex].name} common label: ${stereotype[randomIndex].color}`, 250, 250);
    //text(stereotype[randomIndex].name + "'s common label: " + stereotype[randomIndex].color, 250, 250);
    stereotype.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("That's it!", 250, 250);
  }

}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 1000);

}









//     let randomIndex;
//     let animating = false;
//     let brown = [];
//     let imageCounter = 0;
//     let startRandomizerButton;
//     let addMoreButton;
//     let cnv;
//     let nameInputs = [];
//     let firstTime = true;
//
//
//
//     function preload() {
//       for (let i = 0; i <= 7; i++) {
//         brown[i] = loadImage(`assets/brown_${i}.jpg`)
//       }
//     }
//
//     function setup() {
//       cnv = createCanvas(400, 400);
//       cnv.parent("#canvasDiv");
//
//       background(0, 0, 0);
//       textSize(24);
//       textFont('Courier new');
//       textAlign(CENTER);
//       textStyle(BOLD);
//       fill(255);
//       imageMode(CENTER);
//       frameRate(8);
//
//
//
//       startRandomizerButton = select('#randButton');
//       startRandomizerButton.mousePressed(buttonPressed);
//
//       // addMoreButton = select('#addMoreButton');
//       // addMoreButton.mousePressed(addAnotherInput);
//
//       for (let i = 0; i < 3; i++) {
//         nameInputs.push(createInput());
//         nameInputs[nameInputs.length - 1].parent("#inputFields");
//       }
//     }
//
//
//     function draw() {
//       if (animating === true) {
//         clear();
//         image(brown[imageCounter], width / 2, height / 2);
//         if (imageCounter < brown.length - 1) {
//           imageCounter++;
//           console.log(imageCounter);
//         } else {
//           imageCounter = 0;
//         }
//         noStroke();
//         fill(random(255), random(255), random(255), random(255));
//         ellipse(random(width), random(height), random(20), random(200));
//         fill(random(255), random(255), random(255), random(255));
//         ellipse(random(width), random(height), random(200), random(50));
//       }
//     }
//
//     function mousePressed() {
//
//       if(dogs[0]){
//       background(0);
//       randomIndex = int(random(dogs.length));
//       text(dogs[randomIndex].name, 200, 200);
//       dogs.splice(randomIndex, 1);
//     } else {
//       text("nothing left!", 50)
//     }
// }
//     function addAnotherInput() {
//       nameInputs.push(createInput());
//       nameInputs[nameInputs.length - 1].parent("#inputFields");
//
//     }
//
//     function randomizer() {
//       animating = false;
//       if (dogs[0]) {
//         clear();
//         randomIndex = int(random(dogs.length));
//
//         image(random(brown), width / 2, height / 2);
//         text(dogs[randomIndex].name, width / 2, height - 24);
//         // text(str, x, y, [x2], [y2])
//         dogs.splice(randomIndex, 1);
//       } else {
//         background(0);
//         text("Done!", width / 2, height / 2);
//       }
//     }
//
//     function buttonPressed() {
//
//       if (firstTime) {
//         for (let i = 0; i < nameInputs.length; i++) {
//           dogs.push(nameInputs[i].value());
//         }
//         firstTime = false;
//       }
//
//       animating = true;
//       setTimeout(randomizer, 1500);
//     }
//
//
//
//
//
//
//
//     // function mouseMoved() {
//     //   stroke(random(255), random(255), random(255), random(255));
//     //   strokeWeight(random(10));
//     //   point(mouseX, mouseY);
//     //   // strokeWeight(0);
//     // }
