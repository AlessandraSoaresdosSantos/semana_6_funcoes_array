const verificarNumerosPares = (array) =>
{
    array.forEach((elemento) => {
        if(elemento % 2 === 0){
            console.log('número par')
        }
    });
}