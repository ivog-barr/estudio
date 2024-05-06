const numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,8,9,10];

const encRepetidos = (arr) =>{
  let contar = []

  arr.forEach(num => {

    contar.push(num)
  });

  return contar
};

console.log(encRepetidos(numeros))