console.log(this);

function a(){
    console.log(this);
   this.obj = {name:"x"}
    function b(){
        this.obj = 'y'
        console.log(this.obj);
    }
    b();
}

a();