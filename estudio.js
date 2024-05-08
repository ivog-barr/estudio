const numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,8,9,10];

const encRepetidos = (arr) =>{
  let contar = [];

  const repetidos = {
    num:[]
  }

  for(i = 0; i<arr.length ; i++){
    if(contar.includes(arr[i])){

      repetidos.num.push(arr[i]);

    }
    else{
      contar.push(arr[i]);
    }
  };

  return repetidos
};

console.log(encRepetidos(numeros))