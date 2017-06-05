/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here

if (
    (flavor === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
} else {
    console.log("Please select one of the available items");
}


/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 26;
var shirtLength = 33;
var shirtSleeve = 9.63;

// your code goes here
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S");
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    console.log("M");
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    console.log("L");
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    console.log("XL");
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    console.log("2XL");
} else if ((shirtWidth >= 28) && (shirtLength === 34) && (shirtSleeve >= 10.13)) {
    console.log("3XL");
} else {
    console.log("N/A");
}

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;


var category = eatsPlants && eatsAnimals ? "omnivore" :
    eatsPlants ? "herbivore" :
    eatsAnimals ? "carnivore" : undefined;

// no high school diploma earned an average of $25,636/year,
// a high school diploma earned an average of $35,256/year,
// an Associate's degree earned an average of $41,496/year,
// a Bachelor's degree earned an average of $59,124/year,
// a Master's degree earned an average of $69,732/year,
// a Professional degree earned an average of $89,960/year,
// and a Doctoral degree earned an average of $84,396/year.
/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

// your code goes here

switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary = 84396;
        break;
    default:
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");


/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    if  (((x % 5) === 0) && ((x % 3) === 0)){
        console.log("JuliaJames");
    } else if ((x % 5) === 0) {
        console.log("James");
    } else if ((x % 3) === 0 ) {
        console.log("Julia");
    } else {
        console.log(x);
    }
    x++;
}

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while ( num > 0 ) {
    var next = num - 1;
    var pluralization = num === 1 ? "bottle" : "bottles";
    var nextPluralization = next === 1 ? "bottle" : "bottles";
    console.log( num.toString() + " " + pluralization + " of juice on the wall! " + num.toString() + " " + pluralization + " of juice! Take one down, pass it around... " + next.toString() + " " + nextPluralization + " of juice on the wall!");
    num--;
}


/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var counter = 60;
while ( counter >= 0 ){
  switch (counter) {
    case 50:
      console.log("Orbiter transfers from ground to internal power");
      break;
    case 31:
      console.log("Ground launch sequencer is go for auto sequence start");
      break;
    case 16:
      console.log("Activate launch pad sound suppression system");
      break;
    case 10:
      console.log("Activate main engine hydrogen burnoff system");
      break;
    case 6:
      console.log("Main engine start");
      break;
    case 0:
      console.log("Solid rocket booster ignition and liftoff!");
      break;
    default:
      console.log("T-" + counter + " seconds");
  }
  counter--;
}


/*
 * Programming Quiz: Factorials (4-7)
 */
var solution = 12;
for ( var i = 11; i > 0; i-- ){
  solution *= i;
}

console.log(solution);


/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here
var row = 0;
for( row; row < 26; row++ ){
  var col = 0;
  for( col; col < 100; col++ ){
    console.log(row + "-" + col);
  }
}

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 */

// declare your function
// then, call it!
// print the output with console.log
var message = "ha";
function laugh(num){
  var message = "";
  for ( var i = 0; i < num; i ++ ){
    message += "ha";
  }
  message += "!"
  return message;
}
console.log(laugh(5));

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(width){
    var triangle = "";
    for(var i = 1; i <= width; i++ ){
        triangle += makeLine(i);
    }
    return triangle
}

console.log(buildTriangle(20));

/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(lenght){
    var message = "";
    for ( var i = 1; i <= lenght; i++){
        message += "ha";
    }
    message += "!";
    return message;
}

console.log(laugh(10));
/*
 * Programming Quiz: UdaciFamily (6-1)
 */

// your code goes here
var udaciFamily = ["Julia", "James", "Carlos"];
console.log(udaciFamily);

/*
 * Programming Quiz: Building the Crew (6-2)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here

var crew = [ "Mal", "Zoe", "Wash", "Inara", "Jayne", "Kaylee"]

console.log(crew);

/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
rainbow.splice(2,1,"Yellow", "Green");
rainbow.push("Purple");
console.log(rainbow);

/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

function hasEnoughPlayers(arr){
    return arr.length >= 7 ? true : false;
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

console.log(hasEnoughPlayers(team));

/*
 * Programming Quiz: Joining the Crew (6-6)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here

crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - use an `if` statement to verify code is divisible by 3
 *  - use `console.log` to print the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
            19, 300, 3775, 299, 36, 209, 148, 169, 299,
            6, 109, 20, 58, 139, 59, 3, 1, 139];

// Write your code here
test.forEach(function(value, index, array){
   if( value % 3 === 0 ) {
       array[index] = value + 100;
   }
});

console.log(test);

/*
 * Programming Quiz: I Got Bills (6-9)
 */

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

// your code goes here
var totals = bills.map(function(object){
    return Number((object * 1.15).toFixed(2));
});

console.log(totals);


/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for ( var row = 0; row < numbers.length; row++){
  for( var column = 0; column < numbers[row].length; column++ ){
    if( numbers[row][column] % 2 === 0){
      numbers[row][column] = "even";
    }else{
      numbers[row][column] = "odd";
    }
  }
}

console.log(numbers);

//  Second way to resolve the same exercise Nested Numbers (6-10)
var tempNums = []
for ( var row = 0; row < numbers.length; row++){
  tempNums.push(numbers[row].map(function(item){
    return item % 2 === 0 ? "even" : "odd";
  }))
}

numbers = tempNums;
console.log(numbers);

/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function(){
        if(umbrella.isOpen === true){
            umbrella.isOpen = false
            return "Julia closes the umbrella";
        }else{
            "The umbrella is already closed.";
        }
    }
};

console.log (umbrella.close());

/*
 * Programming Quiz: Menu Items (7-2)
 */

// your code goes here

var breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients: [ "eggs", "sausage", "toast", "hashbrowns", "pancakes" ]
}

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function(){
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
    }
};

console.log(savingsAccount.printAccountSummary());


/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Carlos",
    friends: 3,
    messages: ["Message one", "Message two"],
    postMessage: function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index){
        facebookProfile.messages.splice(index, 1)
    },
    addFriend: function(){
     facebookProfile.friends++;
    },
    removeFriend: function(){
     facebookProfile.friends--;
    }
}

console.log(facebookProfile)

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut){
  switch (donut.type) {
    case "Jelly":
      console.log( donut.type + " donuts cost $" + donut.cost + " each")
      break;
    case "Chocolate":
      console.log( donut.type + " donuts cost $" + donut.cost + " each")
      break;
    case "Cider":
      console.log( donut.type + " donuts cost $" + donut.cost + " each")
      break;
    case "Boston Cream":
      console.log( donut.type + " donuts cost $" + donut.cost + " each")
      break;
  }
});


/*
 * Programming Quiz: String Manupulation (9-1)
 */

var s = "audacity";
var udacityizer = function(s) {
    s = "U" + s.slice(2);
    return s;
};

console.log(udacityizer(s));

/*
 * Programming Quiz: String Manupulation (9-12)
 */


var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = _array;
    var index = _array.length - 1
    newArray[index] = newArray[index] + 1
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

//  Second way of doing it
function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;


}
/*
* Programming Quiz: String Manupulation (9-13)
*/
var name = "AlbERt EINstEiN";
function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = finalName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].toLowerCase();
    names[0] = names[0].replace(names[0][0], names[0][0].toUpperCase() )
    finalName = names.join(" ");
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

// Second implementation
function nameChangerU(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

/*
* Programming Quiz: String Manupulation (10-10)
*/
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
  var locations = [];
  var jobs = work_obj.jobs;
  for( var i = 0; i < jobs.length; i++ ){
    jobs[i].location ? locations.push(jobs[i].location ) : false;
  }
  return locations;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));
