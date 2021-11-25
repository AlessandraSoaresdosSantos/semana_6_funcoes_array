var arrayProdutos = 
[
    {
        produto : "sabão em pó",
        valor : 15.65
    },
    {
        produto : "sabão em pó",
        valor : 13.10
    }
]

//todos os produtos do array contêm o valor 'sabão' no nome do produto
const condicional = (elemento) => (elemento.produto.includes('sabão'));
 
let resultado = arrayProdutos.every(condicional);
console.log(resultado)
 