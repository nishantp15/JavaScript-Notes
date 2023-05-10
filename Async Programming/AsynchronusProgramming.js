// JS is synchronus and single threaded.
// It executes one line at a time. And because it is single threaded, it can not allocate multiple resources at the same time.


console.log(1)
console.log(2);

for(let i=0; i<1000000000; i++){

}

function test(){
    console.log("timeout");
}

function testfortimeinterval(){
    console.log("interval");
}

// 3 and 4 wil print only after for loop executes

console.log(3);
console.log(4);

// TavaScript is single threaded which means it can do one thing at a time
//  browser provide functionality for running multiple things at a time
// JS gives the code to browser for execution if there's a delay
// when there's nothing in the call stack then only rest of the code will added
// to execution stack.

// Using browser we make JS asynchronus


//  setTimeout
// setTimeout(function, timedelay)

setTimeout(test,4000)

// browser will keep track of the timer, JS can not keep the track of timer
// because it is synchronus and has to perform other operations

// setInterval

setInterval(testfortimeinterval,1000)


// queue helps stack to execute functions

// setTimeout and setInterval gets added in message queue and not in the 
// execution stack

// event loop
// JS runs a loop that looks for new messages/tasks on the messsage
// que and pushes them onto the call stack to be executed
// Event loop gives priority to the code currently on call stack, it pushes
// pushes new message from the queue  on the call stack after all the code int the stack have been
// executed from the call stack and call stack is empty.
// Queue holds the code like network requests

// browser provides setTimeout, localstorage, DOM functionalities
