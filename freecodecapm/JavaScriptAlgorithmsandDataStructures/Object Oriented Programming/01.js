/*Create a Basic JavaScript Object*/
let dog = {
    name: "Tuzik",
    numLegs: 4,
};

/*Use Dot Notation to Access the Properties of an Object*/

console.log(dog.name);
console.log(dog.numLegs);

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