/*Create a Basic JavaScript Object*/
let dog = {
    name: "Tuzik",
    numLegs: 4,
};

/*Use Dot Notation to Access the Properties of an Object*/

console.log(dog);

/*Create a Method on an Object*/

let tuzik = {
    name: "Tuzik",
    numLegs: 4,
    sayLegs: function() {
        return `This dog has ${tuzik.numLegs} legs.`;
    }
};
tuzik.sayLegs();

/*Make Code More Reusable with the "this" Keyword*/

let tuzik2 = {
    name: "Tuzik",
    numLegs: 4,
    sayLegs: function() {
        return `This dog has ${this.numLegs} legs.`;
    }
};
tuzik2.sayLegs();

/*Define a Constructor Function*/

function Dog() {
    this.name = "Dog";
    this.color = "brown";
    this.numLegs = 4;
}

/*create an obj by constr func*/
let houd = new Dog();

/*Extend Constructors to Receive Arguments*/

function DogA(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new DogA("Terra", "black");

/*Verify an Object's Constructor with "instanceof" */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(3);
myHouse instanceof House;

/*Understand Own Properties*/

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
let canary = new Bird("Tweety");
console.log(canary);
let ownProps = [];

for (let prop in canary) {
    if(canary.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
}

/*Use Prototype Properties to Reduce Duplicate Code*/

function DogB(name) {
    this.name = name;
}
let beagle = new DogB("Snoopy");

DogB.prototype.numLegs = 4;

/*Iterate Over All Properties*/

function DogC(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle1 = new DogC("Snoopy");
let ownProps1 = [];
let prototypeProps = [];

for (let prop in beagle) {
    if (beagle1.hasOwnProperty(prop)) {
        ownProps1.push(prop);
    } else {
        prototypeProps.push(prop);
    }
}

/*Understand the Constructor Property*/

function DogD(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {
    return candidate.constructor === DogD;
}

/*Change the Prototype to a New Object*/

function DogE(name) {
    this.name = name;
}

DogE.prototype = {
    constructor: DogE,
    numLegs: 4,
    eat() {
        console.log("nom nom nom");
    },
    describe() {
        console.log(`My name is ${this.name}`);
    }
};

/*Understand Where an Object’s Prototype Comes From*/

function DogF(name) {
    this.name = name;
}

let beagleA = new DogF("Snoopy");

// Only change code below this line
DogF.prototype.isPrototypeOf(beagleA);

/*Understand the Prototype Chain*/

function DogG(name) {
    this.name = name;
}
let beagleC = new DogG("Snoopy");
DogG.prototype.isPrototypeOf(beagleC);  // yields true

Object.prototype.isPrototypeOf(DogG.prototype);















