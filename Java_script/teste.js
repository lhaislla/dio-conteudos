/* Funções */

function soma(a,b){
   return a+b;
}

console.log(soma(2,5))

function returnEvenvalues(array){
   let evenNums=[];
   for(let i = 0; i < array.length; i++)
      if(array[i] %2 === 0){
         evenNums.push(array[i]);
      }
      console.log(evenNums)
}
let array = [1,2,3,4,5,6,7,8,9,10];
returnEvenvalues(array);
/* Executar como node teste.js */