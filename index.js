//write a function  that checks if the parameter is  even nos 

function isEven(number){
    if (number> 1 && number % 2 === 0  ){
        console.log(true);
    }
    if(number === 2){
        console.log(true);
    } 
   
    else {
        console.log(false) ;
    }
}
isEven(11);


// create a function that prints to the console n1 to n2 where n1 is the first parameter and n2 is the second parameter

function printNumber(n1, n2){
   for (let i= n1; i < n2; i++){
     console.log(i);
   }
}
let n1 = 0; 
 let n2 = 6;
printNumber(n1, n2);



// create a function that the sum value of in-between the two numbers  

function sumBetween(start, end) {
    // Ensure start is less than or equal to end
    if (start > end) {
      [start, end] = [end, start];
    }
  
    let sum = 0;
  
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  // Example usage:
  console.log( sumBetween(1, 9));
  