let dogs = [{
      name: "magsasaka",
      color: "sobrang maitim"
    }, {
      name: "mahirap",
      color: "itim"
    }, {
      name: "karpintero",
      color: "maitim"
    }, {
      name: "sunog",
      color: "pinakamaitim"
    }, {
      name: "may kaya",
      color: "moreno"
    }, {
      name: "ganda",
      color: "puti"
    }, {
      name: "mapera",
      color: "lightskin"
    }, {
      name: "artista",
      color: "white"
    }];
    let randomIndex;
    let animating = false;
    let brown = [];
    let imageCounter = 0;
    let startRandomizerButton;
    let addMoreButton;
    let cnv;
    let nameInputs = [];
    let firstTime = true;



    function preload() {
      for (let i = 0; i <= 7; i++) {
        brown[i] = loadImage(`assets/brown_${i}.jpg`)
      }
    }

    function setup() {
      cnv = createCanvas(400, 400);
      cnv.parent("#canvasDiv");

      background(0, 0, 0);
      textSize(36);
      textFont('Courier new');
      textAlign(CENTER);
      textStyle(BOLD);
      fill(255);
      imageMode(CENTER);
      frameRate(8);

      randomIndex = int(random(dogs.length));

      startRandomizerButton = select('#randButton');
      startRandomizerButton.mousePressed(buttonPressed);

      addMoreButton = select('#addMoreButton');
      addMoreButton.mousePressed(addAnotherInput);

      for (let i = 0; i < 3; i++) {
        nameInputs.push(createInput());
        nameInputs[nameInputs.length - 1].parent("#inputFields");
      }
    }


    function draw() {
      if (animating === true) {
        clear();
        image(brown[imageCounter], width / 2, height / 2);
        if (imageCounter < brown.length - 1) {
          imageCounter++;
          console.log(imageCounter);
        } else {
          imageCounter = 0;
        }
        noStroke();
        fill(random(255), random(255), random(255), random(255));
        ellipse(random(width), random(height), random(20), random(200), random(170));
        fill(random(255), random(255), random(255), random(255));
        ellipse(random(width), random(height), random(200), random(50), random(170));
      }
    }

    function addAnotherInput() {
      nameInputs.push(createInput());
      nameInputs[nameInputs.length - 1].parent("#inputFields");

    }

    function randomizer() {
      animating = false;
      if (dogs[0]) {
        clear();
        randomIndex = int(random(dogs.length));

        image(random(brown), width / 2, height / 2);
        text(dogs[randomIndex], width / 2, height - 24);
        dogs.splice(randomIndex, 1);
      } else {
        background(0);
        text("Done!", width / 2, height / 2);
      }
    }

    function buttonPressed() {

      if (firstTime) {
        for (let i = 0; i < nameInputs.length; i++) {
          dogs.push(nameInputs[i].value());
        }
        firstTime = false;
      }

      animating = true;
      setTimeout(randomizer, 1500);
    }







    // function mouseMoved() {
    //   stroke(random(255), random(255), random(255), random(255));
    //   strokeWeight(random(10));
    //   point(mouseX, mouseY);
    //   // strokeWeight(0);
    // }
