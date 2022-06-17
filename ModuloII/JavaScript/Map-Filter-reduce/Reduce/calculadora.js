/* Não retorna um novo array, ele executa a função 
em todos os elentos do array, retornando um valor único
diferente do que foi mandado incialmente
 arry.reduce(callback, initialValue)
 Callback- é a função a ser executada dentro do acumulador 
 initialValue-Valor sobre o qual o retorno final irá atuar */ 

 function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));