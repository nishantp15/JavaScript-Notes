function Student(n,a){
    this.name = n;
    this.age = a;
    this.printInfo = function (){
        console.log(this)
    }
}

var x = new Student("nishant", 22);

console.log(x)
// x.printInfo();

var y = x.printInfo
y()