function foo() {
    console.log(`global funtion`);
}

function bar(){

    function foo(){
        console.log(`local funtion`);
    }

    foo();
}

bar();