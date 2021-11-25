const retornaPropValor = (array) =>
{
   return array.map((elemento) => {
        return elemento.valor;
    });    
}

var array = 
    [
        {
            produto : "sabão em pó",
            valor : 15.65
        },
        {
            produto : "guardanapo",
            valor : 3.98
        },
        {
            produto : "café solúvel",
            valor : 23.56
        }
    ]

let resultado = retornaPropValor(array)