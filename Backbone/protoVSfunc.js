
//object creation using constuctor function
function Human(firstName, lastName) {
    
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}
var person1 = new Human("Virat", "Kohli");
var person2 = new Human("Sachin", "Tendulkar");

//above code  creates two copy of constructor function each for person1 and person2.
//every object created using the constructor function will have it’s own copy of properties and methods.
// it have two instances of function fullName that do the same thing. Storing separate instances of function 
// for each objects results into wastage of memory


//Prototypes
// When a function is created in JavaScript, JavaScript engine adds a prototype property to the function. 
// This prototype property is an object (called as prototype object) has a constructor property by default
console.log(Human.prototype);
//OUTPUT
// {constructor: ƒ}
// constructor
// :
// ƒ Human(firstName, lastName)
// __proto__
// :
// Object


//Create an empty constructor function
function Person(){
    
    }
    //Add property name, age to the prototype property of the Person constructor function
    Person.prototype.name = "Ashwin" ;
    Person.prototype.age = 26;
    Person.prototype.sayName = function(){
        console.log(this.name);
    }
    //Create an object using the Person constructor function
    var person1 = new Person();
    //Access the name property using the person object
    console.log(person1.name)// Output" Ashwin

    //BUT 
    console.log(person1);//in console out put is :Person {}__proto__: Object   undefined
// to get access  tries to find in property object if not tries to find in prototype object 
//////////////////////////
var person2 = new Person();
//Access the name property using the person2 object
console.log(person2.name)// Output: Ashwin

person1.name = "Anil"
console.log(person1.name)//Output: Anil (finds in property object )
console.log(person2.name)//Output: Ashwin( proptotype property name)


////////////////////////
// As prototype object is shared among all the objects created using the constructor
//  function, it’s properties and methods are also shared among all the objects.
console.log(person1.name);//Output: Ashwin
console.log(person2.name);//Output: Ashwin
///above two lines of console.log()'s do not have same property name but accesse same value output from prototype property 
person1.name = "Ganguly"

console.log(perosn1.name);//Output: Ganguly
console.log(person2.name);//Output: Ashwin
//where as here accesses person1.name for property object first for 


//Create an empty constructor function
function PersonX(){
}
//Add property name, age to the prototype property of the Person constructor function
PersonX.prototype.name = "Ashwin" ;
PersonX.prototype.age = 26;
PersonX.prototype.friends = ['Jadeja', 'Vijay'],//Arrays are of reference type in JavaScript
PersonX.prototype.sayName = function(){
	console.log(this.name);
}

//Create objects using the Person constructor function
var person1= new PersonX();
var person2 = new PersonX();

//Add a new element to the friends array
person1.friends.push("Amit");
//HERE we modified only person1 with addign 'Amit',but bellow changes reflected in both 
console.log(person1.friends);// Output: "Jadeja, Vijay, Amit"
console.log(person2.friends);// Output: "Jadeja, Vijay, Amit"


// with constructor: Every object has its own instance of the function
// with the prototype: Modifying a property using one object reflects the other object also