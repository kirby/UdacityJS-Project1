// https://github.com/udacity/Javascript
// https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// ---------------------------------------------------------------------------

class Animal {
    constructor(species, height, weight, diet) {
        this.species = this.species;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
    }
}

class Human extends Animal {
    constructor(species, height, weight, diet, name) {
        super(species, height, weight, diet);
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

const dinosaurs = [];

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
        dinosaurs.push(new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact));
    });
}).catch(error => {
    alert('Fetch Error\n' + error.message);
});

// ---------------------------------------------------------------------------

    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
