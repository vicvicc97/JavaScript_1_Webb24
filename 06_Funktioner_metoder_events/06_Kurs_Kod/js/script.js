
function outer(){
    count = 0
    
    function inner(){
        console.log(count++);
    }

    return inner;
}


let runFunc = outer();

runFunc();