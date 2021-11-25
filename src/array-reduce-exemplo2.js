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
    },
    {
        produto : "sabão em pó",
        valor : 13.10
    }
]
  
    let qtdeprodutosIguais = arrayProdutos.reduce((item, elemento) => 
    {
        item[elemento.produto] = (item[elemento.produto] || 0) + 1 ;
        return item;
    } , {})


console.log(qtdeprodutosIguais)