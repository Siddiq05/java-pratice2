/*Conditional Statements */

let i=20;
if (i<10) {
    console.log("i less than 20");
} else {
    console.log("i greater than or equal 20");
}

let j=10;
if (j<=10){
    console.log(++j);
}
else{
    console.log(--j);
}
var k=20;
var m=10;
if (k==m) {
    console.log("k equal to m");
}
else if (k<m) {
    console.log("k less m");
}
else if(k>=m){
    console.log("k is greater than or eqaual to m");
}
else{
    console.log("k is equal 20");
}

/*Increment/Decrement */
let n=0;
console.log(++n);
console.log(n++);
console.log(--n);
console.log(n--);
console.log(n);

/* Arithmetic Operators */

let x=2;
let y=3;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

console.log(x > 0); 
console.log(x >= 1); 
console.log(x < 1); 
console.log(x <= 1); 

console.log(x === 1); 
console.log(x !== 1); 


/*Strict equality */

console.log( x === 2); 
console.log( '2' === x); 

/*Lose equality */

console.log( x == 2); 
console.log( '2' == x); 

/*conditional operator */
let age=18;
age > 17 ? console.log("you can vote") : console.log("you can't vote");

let a=10;
let b=5;
console.log(a < 10 && b < 1);

console.log(a < 11 && b < 6);

console.log(a < 10 || b < 1);

console.log(a < 8 || b > 1);

console.log(!(a==b));