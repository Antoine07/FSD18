const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.sum = function(){

    let sum = 0; // accumulateur
    for(const num of this){
        sum += num;
    }

    return sum;
}


console.log(numbers.sum());
console.log(numbers.length);
console.log(numbers2.sum());