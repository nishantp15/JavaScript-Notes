// function is reusable piece of code

// Declaration

function nameOfFunction(){
    console.log("This is a function")
}

// function call or invocation
nameOfFunction();

// function expression :when function is taken as variable or when function is 
// used as variable 

let fun = function(){// also called anonymous function (un-named)
    console.log("function expression");
}

// calling function expression

fun();

// passing values : arguments and parameters

let passValues = function(parameter="Default Value"){
    console.log("paased", parameter);
}
passValues();
passValues("argument","argument 2");


