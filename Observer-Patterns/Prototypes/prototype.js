 //object literals will always have Object.prototype as their prototype ,we can use that 
//here fromPrototype method creates new object with properties with perticular prototype 
const fromPrototype = (prototype, object) => {
  const newObject = Object.create(prototype);//Object.create  creates object assigns prototype 

  for (const prop in object) { //enumerated all properties 
    if (object.hasOwnProperty(prop)) {//  check whether a property was defined on the object itself
      newObject[prop] = object[prop];      // all properties are accessed by newObject
    }
  }

  return newObject;
};
//all the properties inherited 
const person = {
  toString() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const type = fromPrototype(person, {
  gender: "male"
});

const nameP= fromPrototype(type, {
  firstName: "Jerry",
  lastName:  "mon"
});

 console.log(nameP.gender);       
name.toString() 
