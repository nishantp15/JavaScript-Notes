// Prototype: An original model on which something is patterned

var obj = {
    name:"name"
}

console.log(obj);

var obj1 = Object.create(obj)
console.log(obj1)

// __proto__ : points to another model from which it is originated
// In JS it is better to borrow, than own a propertybor method

var family = {
    father:"Krishna",
    myfather(){
        console.log(this.father)
    }
}
var son = Object.create(family)
// console.log(son.myfather())
son.myfather()
console.log(son);

// 

function Person(n,a){
    this.name=n,
    this.age=a
}


Person.prototype.capital = function(cap){
    this.capital = cap
}


// Person.prototype.pin = 'pin'; // it will create new prototype not the object key value pair
// can be called as console.log(person1.pin)

var person1 = new Person("Nishant", 22);

person1.capital("New")
console.log(person1)
// function Person2(c){
//     this.city = c
// }

// console.log(Person2.call(person1,"Mu")) // example for call

// console.log(person1.pin)

// 

var a = {
    name:"a"
}

var b = Object.create(a);

console.log(b.hasOwnProperty('name') // output > false
)

b.age = 22;

console.log(b.hasOwnProperty('age'))

console.log(b.__proto__.__proto__) 
console.log(b.__proto__.__proto__.__proto__) // output> null everything ends at null 

// Note : Everything in JS is Object

function c(){
    return true;
}

console.log(c.__proto__)
console.log(c.__proto__.__proto__)

var arr = [1,2,3,4]

Array.prototype.myPrint = function(){
    console.log("new prototype")
}

arr.myPrint() // a new prototype is added

// Function inherits from function prototype
// function > function prototype > object prototype > null
//  arr > array prototype > object prototype > null

