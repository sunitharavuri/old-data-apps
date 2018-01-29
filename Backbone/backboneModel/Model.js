 //Model example in BackboneJS

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Guest User',
        age: 23,
        occupation: 'worker'
    },
    
    validate: function(attributes){
        if ( attributes.age < 1 ){
            return 'Age must be positive.';
        }

        if ( !attributes.name ){
            return 'Every person must have a name.';
        }
    },

    work: function(){
        return this.get('name') + ' is working.';
    }
});
// code that you can use to listen errors

//You need to do this to enable validation on set:
//person.set('name',-2,{validate:true});

// Instead of using the error event use the invalid event
// person.on('invalid', function(model,error){
// 	console.log(error); 
// });

//in console ***************
var person = new Person;

person.set("age", -1)// false

person.set('name',-2,{validate:true});
// {attributes: {…}, _escapedAttributes: {…}, cid: "c0", changed: {…}, _silent: {…}, …}attributes: {name: -2, age: 23, occupation: "worker"}changed: {}cid: "c0"_changing: false_escapedAttributes: {}_pending: {}_previousAttributes: {name: -2, age: 23, occupation: "worker"}_silent: {}__proto__: g.Model

person.on('error', function(model,error){
  console.log(error); //  for printing the error message on console.
});
// {attributes: {…}, _escapedAttributes: {…}, cid: "c0", changed: {…}, _silent: {…}, …}
person.set("age", -1);
// Age must be positive.
//false
person.get('age');
23
person.set('age', 18);//setting new age 
// {attributes: {…}, _escapedAttributes: {…}, cid: "c0", changed: {…}, _silent: {…}, …}attributes: {name: -2, age: 18, occupation: "worker"}changed: {}cid: "c0"_callbacks: {error: {…}}_changing: false_escapedAttributes: {}_pending: {}_previousAttributes: {name: -2, age: 18, occupation: "worker"}_silent: {}__proto__: g.Model
person.get('age')
18
person.toJSON()
//{name: -2, age: 18, occupation: "worker"}