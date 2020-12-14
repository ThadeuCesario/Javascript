const carrinho = [
  {nome: 'Caneta', qtde: 1000, preco: 7.99, fragil: true},
  {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
  {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
  {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
  {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
];

// 1. Retornar elementos que são frágeis.
const isFragile = product => product.fragil;
const allFragile = carrinho.filter(isFragile);
console.log(allFragile);

// 2. Retornar a quantidade e o preço de cada produto. -> Precisamos gerar o total de cada elemento
const getTotal = product => product.preco * product.qtde;
const allTotal = allFragile.map(getTotal);
console.log(allTotal);

// 3. Média dos totais
const avarage = allTotal.reduce((accumulator, element, index) => {
  if(index === allTotal.length - 1) {
    return (accumulator + element) / allTotal.length ;
  } 
  return accumulator + element;
});
console.log("média final",  avarage);

