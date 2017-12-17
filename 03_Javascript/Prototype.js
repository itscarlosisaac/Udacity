var gold = {
    a: 1
};
console.log(gold.a);
console.log(gold.z);

var blue = Object.create(gold);
blue.b = 2;
console.log(blue);
var arr = []
console.log(arr.constructor); // Array Constructor

// Driver Game

var amy = {
    loc: 1
};
amy.loc++;
var ben = {
    loc: 1
};
ben.loc++;

// Library // Decorator Functions

var move = function(car) {
    car.loc++;
}

var carlike = function(obj, loc) {
    obj.loc = loc;
    return obj;
}

var amy2 = carlike({}, 2)
var ben2 = carlike({}, 12)
move(amy2)
move(ben2)

// Refactor the carlike function in a way
// that allows you to use the method calling
// syntax with "dot access" as we do below.
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        obj.loc++;
    };
    return obj;
};

// Another option is to use the this
// This refers to the object on the left of the (.) of the function.
// var move = function(){
//   this.loc++;
// };

/////
// Here we want to call move with "dot access"
var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();

// Recap this parameter;

var obj1 = {};
var obj2 = {};
obj1.example = function(arg1) {
    console.log(this, arg1);
};

obj1.example(obj2) // obj1 will be equal to this and obj2 to the arg of the function

/* *********************
  Decorator Code Vs Classes
********************* */

var Car = function(loc) {
    var obj = {
        loc: loc
    };
    // obj.move = move;
    // obj.move = function(){
    //   obj.loc++;
    // };
    // This is not a native js function
    // extend(obj, Car.methods);
    return obj
}

// Refactoring for class methods
var move = function() {
    this.loc++;
};

var on = function() {};
var off = function() {};

Car.methods = {
    move: function() {
        this.loc++;
    },
    on: function() {},
    off: function() {}
}

var amy3 = Car(1);

/* *********************
  Prototype Classes
********************* */

var House = function(loc) {
    var obj = Object.create(House.methods);
    obj.loc = loc;
    return obj;
};

House.methods = {
    move: function() {
        this.loc++;
    }
};

var ben3 = House(9);

/* *********************
  Prototype Classes Pattern
********************* */

var Person = function(loc) {
    var obj = Object.create(Person.prototype);
    obj.loc = loc;
    return obj;
}

Person.prototype.move = function() {
    this.loc++;
};

/* *********************
  Pseudoclassical  Pattern
********************* */

var Person = function(loc) {
    //var obj = Object.create(Person.prototype);
    this.loc = loc;
    //return obj;
}

Person.prototype.move = function() {
    this.loc++;
};

// By using new, it's not necessary to have the
// Object.create and the return obj in the constructor function
// because it creates an object that calls the prototype
// this = Object.create(Person.prototype);
// return this
var me = new Person();

/* *********************
  SuperClass and SubClass Functional  Pattern
********************* */

var Vehicle = function() {
    var obj = {
        loc: loc
    };
    obj.move = function() {
        obj.loc++;
    };
    return obj;
}

var Van = function(loc) {
    var obj = Vehicle(loc);
    obj.grab = function() {}
    return obj;
};

var Cop = function(loc) {
    var obj = Vehicle(loc);
    obj.callCop = function() {};
    return obj;
};

/* *********************
  PseudaClassical SuperClass and SubClass  Pattern
********************* */


var Car = function(loc){
  this.loc = loc;
}

Car.prototype.move = function(){
  this.loc++;
}

var Van = function(loc){
  Car.call(this, loc);
}

Van.prototype = Object.create(Car.prototype); // This replace the object.constructor
Van.prototype.constructor = Van;
Van.prototype.grab = function(){ }

var zed = new Car(4);
var amy = new Van(9);

zed.move();
amy.move();
amy.grab();

/* *********************
  PseudaClassical SuperClass and SubClass  Pattern ( PRACTICE )
********************* */

var Store = function(name, type, products){
  this.name = name;
  this.type = type;
  this.products = products;
}

Store.prototype.logName = function(){
  console.log(this.name);
}

Store.prototype.addProduct = function(product){
  this.products.push(product);
}

var FoodStore = function(name, type, products){
  Store.call(this, name, type, products);
}

FoodStore.prototype = Object.create(Store.prototype);
FoodStore.prototype.constructor = FoodStore;

var colmado = new FoodStore("Colmado Paul", "colmado", [] );


/* *********************
  PseudaClassical SuperClass and SubClass  Pattern ( PRACTICE ) SHOPPING LIST
********************* */

var List = function(name){
  this.name = name;
  this.items = [];
}

List.prototype.addItem = function(item){
  this.items.push(item);
}

List.prototype.removeItem = function(index){
  this.items.splice(index, 1);
}

var shop = new List("wish");
// shop.addItem("new one");
// shop.addItem("new two");
// shop.addItem("new 3");
// shop.addItem("new 4");

var Item = function(name, quantity, price){
  this.name = name;
  this.quantity = quantity;
  this.price = price;
}

var mug = new Item("Mug", 3, 5.43 );
var cup = new Item("Cup", 2, 5.43 );


/* *********************
  PseudaClassical SuperClass and SubClass  Pattern ( PRACTICE ) PROJECTS
********************* */

var Project = function(name, owner, createdAt, status ){
  this.name = name;
  this.owner = owner;
  this.createdAt = createdAt;
  this.status = status;
}

var User = function(name, role, permissions){
  this.name = name;
  this.role = role;
  this.permissions = permissions;
}


var yahidil = new User("Yahidil", "Project Manager", "author" );
var maria = new User("Maria", "Project Manager", "author" );
var undertone = new Project("Jurassic World", yahidil, Date.now(), "In Progress" );

/* *********************
  PseudaClassical SuperClass and SubClass  Pattern ( PRACTICE ) RECIPES
********************* */

var Recipe = function( title, author, steps, ingredients, description, prepTime ){
  this.title = title;
  this.author = author;
  this.steps = [];
  this.ingredients = [];
  this.description = description;
  this.prepTime = prepTime;
}

Recipe.prototype.addIngredient = function(ingredient){
  this.ingredients.push(ingredient);
}

Recipe.prototype.removeIngredient = function(index){
  this.ingredients.splice(index, 1);
}

Recipe.prototype.addStep = function(step){
  this.steps.push(step);
}

Recipe.prototype.removeStep = function(index){
  this.steps.splice(index, 1);
}
