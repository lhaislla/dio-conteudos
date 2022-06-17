/* - Abstração: é um pŕocesso mental que consistem em isolar um aspecto 
determinado de um estado de coisas relativamente complexo, 
a fim de simplificar a sua avaliação, classificação ou para
permitir a comunicação do mesmo.
- Herança: Objetos filhos que herdam propriedades e metódos do pai
- Polimorfismo: Objetos podem herdar a mesma classe pai, mas se comporta 
de forma diferente quando invocamos seus metódos
- Encapsulamento: cada classe tem propriedades e metódos independentes do restante do código  */

class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return console.log('Saque negado; saldo insuficiente!');
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}

	set saldo(valor) {
		this._saldo = valor;
	}

	get saldo() {
		return this._saldo;
	}
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Operação negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}

const minhaConta = new ContaCorrente(1, 210, true);
const contaUni = new ContaUniversitaria(2, 300);

/*minhaConta.saldo
minhaConta.depositar(1000)
minhaConta.sacar(500)
minhaConta.saldo*/