/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2. 

------Resumo Enunciado------
- função 
- recebe array de numeros inteiros 
- retorna o valor que mais se repete
*/

function moreRepeated(arrayNumbers){
  let countRepeat = 0;
  let countNumbers = 0;
  let indexRepeatNumbers = 0;

  for (let index in arrayNumbers) {
    let checkNumbers = arrayNumbers[index];
  for (let index2 in arrayNumbers) {
    if( checkNumbers === arrayNumbers[index2]) {
      countNumbers ++;
    }
  }
    if (countNumbers > countRepeat) {
      countRepeat = countNumbers;
      indexRepeatNumbers = index;
    }
    countNumbers = 0;
  }
  return arrayNumbers[indexRepeatNumbers];
}

console.log(moreRepeated([2, 3, 5, 8, 2, 3, 2]));
