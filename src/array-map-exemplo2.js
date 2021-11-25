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

var arrayValorConcatenado = arrayProdutos.map(concatenarValores);

function concatenarValores(elemento){
    let resultado = {};
    resultado["produto"] = `${elemento.produto.charAt(0).toUpperCase() + 
                            elemento.produto.slice(1)} - R$ ${elemento.valor}` ;

    return resultado;
}

console.log(arrayValorConcatenado)