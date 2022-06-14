/* DOMEception- erros relacionados a estrutura da  páginas de elementos da web 
sendo exibidas(ao Document Object Model)
Diferença entre trwoh e return 
Throw- trata o retorno como um erro
Return- Retorna uma string qualquer 
Try catch- dentro da declaração é verificado um trecho de código, 
que se tiver algum erro será tratado na função catch


*/
function validaArrays(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (e) {
		if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
	}
}
