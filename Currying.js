var multiply = function(x,y){
    return x*y;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(5));