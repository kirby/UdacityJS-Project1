// https://github.com/udacity/Javascript
// https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e
// https://github.com/mdn/learning-area
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://divtable.com/table-styler/

// ---------------------------------------------------------------------------

class Animal {
    constructor(species, height, weight, diet) {
        this.species = species;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
    }
    
    compareHeightLessThan(animal) {
        return (this.height < animal.height) ? true : false;
    }

    compareWeightLessThan(animal) {
        return (this.weight < animal.weight) ? true : false;
    }

    compareDietDifferentFrom(animal) {
        return (this.diet == animal.diet) ? true : false;
    }
}

class Human extends Animal {
    constructor(height, weight, diet, name) {
        super('Homo Sapien', height, weight, diet);
        this.name = name;
    }
}
class Dino extends Animal {
    constructor(species, weight, height, diet, where, when, fact) {
        super(species, height, weight, diet);

        this.where = where;
        this.when = when;
        this.fact = fact;
    }
}

const dinosaurs = new Array();
const tiles = new Array();
let human = new Human();

// ---------------------------------------------------------------------------

// Read JSON data and then parse into Dinosaur instances
async function fetchDinosJSON(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`An error has occured: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

fetchDinosJSON('./dino.json').then(data => {

    data.Dinos.map(function parseDino(dino) {
        const dinosaur = new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact)
        dinosaurs.push(dinosaur);
        const tile = createTile(dinosaur);
        tiles.push(tile);
    });

}).catch(error => {
    alert('Fetch Error\n' + error.message);
});

function createTile(animal) {
    const tile = document.createElement('div');
    const image = document.createElement('img');    // 640x480
    image.src = encodeURIComponent("images/" + (animal.species).toLowerCase() + ".png");
    image.alt = animal.species;
    tile.appendChild(image);

    return tile;
}

// ---------------------------------------------------------------------------

// Use IIFE to get human data from form
// (function getHuman() {
//     human = new Human(
//         'Homo Sapien',
//         (document.getElementById('feet').value * 12) + document.getElementById('inches').value,
//         document.getElementById('weight').value,
//         document.getElementById('diet').value,
//         document.getElementById('name').value);
//     console.log(human);
// })();


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array (dinosaurs)
// Add tiles to DOM id='grid'


// Remove form from screen
function addHuman() {

    human = new Human(
        (parseInt(document.getElementById('feet').value, 10) * 12) + parseInt(document.getElementById('inches').value, 10),
        document.getElementById('weight').value,
        document.getElementById('diet').value,
        document.getElementById('name').value);
    console.log(human);

    // Create tile for human
    let humanTile = createTile(human);

    // Hide dino-compare form
    let dinoForm = document.getElementById("dino-compare");
    dinoForm.style.display = "none";

    // Display the grid div
    displayDinosaurs(humanTile);
}

// 
function displayDinosaurs() {
    let gridTiles = document.getElementById("grid");
    gridTiles.style.display = "block"

    alert(tiles[0].name);
}
