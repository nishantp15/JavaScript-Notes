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

// "this" helps us create objects using functions with the help of "new" keyword

// "new": constructor for new object, it creates objects
// "this": for creating dynamic values

function Player(n, t){
    this.name = n;
    this.team = t;
}

var myPlayer = new Player("Dhoni","India")
var myPlayer2 = new Player("Harry","Hogwarts")

console.log(myPlayer2) // value will be undefined with the use of new Keyword

//  Note: although "this" refers to global object in a standalone function but
//  when we use "new" keyword and bind that function with "new", then "new"
//  creates an object and put that function inside that object and that is how
//  "this" refers to assigned values locally inside the objec. Here "myPlayer" is
//  an object and values can be retrived by using noemal Key:Value pair


function PlayerEx(n,t){
   return {myplayerEx:function(){
    this.name = n,
    this.team = t,
    console.log(this)
   }}
}

PlayerEx("a","b").myplayerEx()


// call apply bind

var p1 = {
    name:"abc"
}

var p2 = {
    name:"def"
}

var p3 = {
    name:"ghi"
}

function myName(age, city){
    this.age = age
    this.city = city
    // console.log(this.name, age)
}

// cal provide new value of "this" to a method

myName.call(p1) // this = p1, Call is just a function and arguments can be passed to myName using call
myName.call(p1,"22", "pune")
console.log(p1)

// apply: in apply arguments are passed as array

myName.apply(p2,["22", "Delhi"])
console.log(p2)

// bind : to use the arguments at later stage while call and apply executed immediatly

var myBind = myName.bind(p3,"24", "Mumbai") // no array
console.log(p3)
myBind();
console.log(p3)

// ??? Q ??? why function are constructors in JS




// Note:

// function test(n){
//     console.log(n)
// }
// // executeTest wont execute as it is not a fucntion coz the function is assigned to variable
// var executeTest = test(5);
// executeTest() 

// // but now it will execute
// var executeTest1 = test;
// executeTest1(7) 

// var x = function test1(n){
//     console.log(n)
// }

// x(5) // this also