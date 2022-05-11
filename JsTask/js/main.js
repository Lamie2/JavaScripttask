

// task1

// function findmax(...numbers)
// {
//     let max = 0;

//     for (i=0; i<numbers.length; i++)
//     {
//         if (numbers[i] > max)
//         {
//             max = numbers[i];
//         }
//     }
//     return max;
// }

// console.log(`max: ${findmax(34, 25, 48, 16, 20)}`)


  
// task2 

// function Sum(...numbers){

//     let sum = 0;

//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]%2==0){

//             sum+=numbers[i];
//         }
//     }
//     return sum;
// }
// console.log(`sum: ${Sum(2, 7, 8, 11, 6)}`)


task 3

var num1 = prompt("Eded 1:")
var num2 = prompt("Eded 2:")


function powNum(num1, num2){
    return ( num1 ** num2);
}

console.log(`pow: ${powNum(num1, num2)}`)
