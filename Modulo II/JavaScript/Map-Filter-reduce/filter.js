/* É como se colocasse todo o array dentro de um filtro
e apenas os itens que correnponderem a condição serão retornados como array
que será criado
- Não modifica o array original 
- array.filter(callback, thisArg)
 -This varia o objeto ao qual a função se refere */
 function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4]));