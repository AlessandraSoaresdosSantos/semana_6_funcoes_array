var arrayProdutos = 
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

const clausula = { valor: 15};

 function filtroValorMaiorCinco(produto)
 {
     return Object.keys(this).every((key) => produto[key] > this[key]);
 }

console.log(arrayProdutos.filter(filtroValorMaiorCinco, clausula));

 