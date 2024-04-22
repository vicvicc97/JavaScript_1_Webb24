//Aritmetik

//Power
console.log("Math.pow(10,2);");
console.log(Math.pow(10,2));
console.log("Math.pow(10,-2);");
console.log(Math.pow(10,-2));
//gives error
//console.log("Math.pow(10,a);");
//console.log(Math.pow(10,a));

//Random 0-1
console.log("Math.random();");
console.log(Math.random());
//Random 0-10
console.log("Math.random()*10;");
console.log(Math.random()*10);
//Random 0-100
console.log("Math.random()*100;");
console.log(Math.random()*100);
//Random 50-100
console.log("50 + Math.random()*50;");
console.log(50 + (Math.random()*50));

//round
console.log("Math.round(myRandom)");
let myRandom = Math.random()*10;
console.log("myRandom " + myRandom);
console.log(Math.round(myRandom));

console.log("ceiling " );
console.log(Math.ceil(myRandom));
console.log("floor " + myRandom);
console.log(Math.floor(myRandom));

//abs
console.log("Math.abs(-2)");
console.log(Math.abs(-2));
console.log("Math.abs(2)");
console.log(Math.abs(2));

//abs with pow and sqrt
console.log("Math.sqrt(Math.pow(2,2))");
console.log(Math.sqrt(Math.pow(2,2)));

//Max
console.log("Math.max(1,5,2,3)");
console.log(Math.max(1,5,2,3));
//Max algo example
let l = [1,5,2,3];
let tempMax = 0;//Number.MIN_VALUE should be used here not 0
for (let i = 0; i < l.length; i++) {
    if(l[i] > tempMax){
        tempMax = l[i];
    }
}
console.log(tempMax);


//Min
console.log("Math.min(3,1,2,3)");
console.log(Math.min(3,1,2,3));

console.log("Math.E");
console.log(Math.E);

//parseInt
console.log("a = 5, b = '5'");
let a = 5;
let b = "5";
//checking if b is an integer
console.log("is b an integer? "+Number.isInteger(b));

console.log("a + b");
console.log(a + b);

console.log("a + Number.parseInt(b)");
console.log("a = 5, b = 5");
if(!Number.isInteger(b)){
    b = Number.parseInt(b);
}
console.log(a + b);
//checking if b is an integer
console.log("is b an integer? "+Number.isInteger(b));


//MAX VALUE
console.log("Number.MAX_VALUE");
console.log(Number.MAX_VALUE);
console.log("Number.MAX_VALUE + 10");
console.log(Number.MAX_VALUE + 10);

//MIN VALUE
console.log("Number.MIN_VALUE");
console.log(Number.MIN_VALUE);
console.log("Number.MIN_VALUE - 10");
console.log(Number.MIN_VALUE - 10);
