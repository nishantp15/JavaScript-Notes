//1. anything that takes time or dependent on another code we must use promises instead of normal function
//2. while the script getting loaded it should not try to access everything, some functions or code needs to be
//   executed only after the script is loaded and for that we need asynchronus behaviour and this is achieved by promises.

//3. three conditions are possible with promise:
//    a. Either Promise will get FUlfilled
//    b. or wont fulfilled
//    c. Or in process

//4. For promise we have JS Promise object, syntax
//        var promise = new Promise();
//5. it tskes a function and the function will take two parameters and those two parameters are functions not the variables.
//   they will give an object.

//6. These functions are:
//   a. Resolve: when promise is fullfilled
//   b. Reject: when promise is rejected and if promise is rejected it gives error and that error must be caught using "Catch"

//7. resolve and reject will not run at the same time

var myPromise = new Promise(function (res, rej) {
//   res("success");
  rej("goodbye") 
});

console.log("Promise:", myPromise);

// On console result is
// Promise:
// Promise {<fulfilled>: 'success'}
// [[Prototype]] : Promise
//      catch:ƒ catch()
//      constructor:ƒ Promise()
//      finally:ƒ finally()
//      then:ƒ then()
//      Symbol(Symbol.toStringTag) : "Promise"
//      [[Prototype]]:Object
// [[PromiseState]] : "fulfilled"
// [[PromiseResult]] : "success"

// .then and .catch fuction return values of promise.
// then returns resolve and catch returns reject in terms of error which must be caught.
// then and catch are also functions and can use call apply and bind on then

