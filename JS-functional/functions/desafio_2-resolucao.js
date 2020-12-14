const carrinho = [
  {nome: 'Caneta', qtde: 1000, preco: 7.99, fragil: true},
  {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
  {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
  {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
  {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
];

// 1. Retornar elementos que são frágeis.
// 2. Retornar a quantidade e o preço de cada produto. -> Precisamos gerar o total de cada elemento
// 3. Média dos totais

const isFragile = product => product.fragil;
const getTotal = product => product.preco * product.qtde;

const teste = carrinho.filter(isFragile).map(getTotal).reduce((acc, el) => acc + el);
console.log(carrinho.filter(isFragile).map(getTotal));
console.log("teste", teste);

const media = carrinho.filter(isFragile).map(getTotal).reduce((acc, el) => {
  console.log("a", acc, el);
  const novaQtde = acc.qtde + 1;
  const novoTotal = acc.total + el;
  return {
    qtde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde,
  }
}, {qtde: 0, total: 0, media: 0});
console.log(media);
