var arrayProdutos = 
[
    {
        produto : "sabão em pó Omo",
        valor : 15.65
    },
    {
        produto : "guardanapo",
        valor : 3.98
    },
    {
        produto : "café solúvel",
        valor : 23.56
    },
    {
        produto : "sabão em pó Ypê",
        valor : 13.10
    }
]
  
let valorTotal = arrayProdutos.reduce((valorTotal, produto) 
=> valorTotal + produto.valor, 0);

console.log(valorTotal)