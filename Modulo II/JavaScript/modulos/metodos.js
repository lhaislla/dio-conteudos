/* tem a capacidade de importar e exportar arquivos
 de outros tipos 
 Named Export: exporta mais d euma coisa do arquivo e dá pra
 exportar infdividualmente
 utiliza a palavra export antes  de declarar a função ou colocar entre chaves 
 e colocar o nome das funções que se quer exportar
 Default export: Só pode ter um por arquivo e vai ser o arquivo padrão noa rquivo
  
 ex: Named exports: import {função,variavel,classe} from './arquivo.js'
 ex: Default esports: import valorDefault from './arquivo.js'
 */

 function paintRed(el) {
	el.style.backgroundColor = 'red';
}

export { paintRed };