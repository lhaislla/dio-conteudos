/* É quando um conjunto passa por 
uma operaçãoe se torna outro 
conjunto
- Não modifica um Array original- Apenas cria um novo array
- Realiza as operações em ordem, do primeiro indice ao último 
executando as operações para cada elemento
Callbak- Função a ser executada em cada elemento 
This - valor de "this" dentro do callback
ForEach- Faz uma operação em cada elemento dentro dele
*/
/* Com This */
const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());

/*Sem This */

const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

console.log(array);