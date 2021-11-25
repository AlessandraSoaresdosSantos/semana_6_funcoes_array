const retornaElementoIndice = (array) =>
{
     array.forEach((elemento, indice ) => {
      console.log(`O elemento ${elemento} está na posição ${indice}`)   
   });    
}

const array = ['DevInHouse', 'Informática', 'Tecnologia'];

retornaElementoIndice(array)