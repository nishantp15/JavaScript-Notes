// Constructor function is used to create Objects in JavaScript.
// It dynamically creates Object
console.log(this)

var person = {
    name:"John",
    myName:function(){
        console.log(person.name)
    }
}

person.myName(); //here owner is "person" variable

// when we write a function inside N object is called function method

var person2 = {
    name:"John",
    myName:function(){
        console.log(person2.name); //here every time owner object has to be changed
    }
}

person2.myName(); 

// to avoid changing owner object everytime we create a new object is difficult and
// hence here comes another way of writing an object


// use of "this" keyword

// this : represents the "owner object", if there is no owner object then "this"
// indicate to global object i.e. "window" object

var person3 = {
    name:"John",
    myName:function(){
        console.log(this.name)
    }
}

person3.myName();

//if there is no owner object then "this"indicate to "window" object, Example:

function This(){
    console.log(this)
}

This();

// Value of this is determined by how the function is executed
// In a method (Function inside an object), "this" refers to Owner Object
// Alone, "this" refers to global object.
// In a standslone function where "this" is not bound to any object, "this" refers to global object.

// "this" helps us create objects using functions

