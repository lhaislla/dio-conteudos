console.log("TypeScript");
function soma(a: number, b:number){
    return a+b;
}
soma(2,3)

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarsom(alturaEmDecibeis: number): void;
}

interface IFelinos extends IAnimal{
    visãoNoturna: boolean;

}
const animal: IAnimal ={
    nome: 'Elefante',
    tipo:"terrestre",
    executarsom:(alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}
animal.executarsom(15)

/*const felino: IFelinos = {
    nome:'Leão',
    tipo: "terrestre",
    visãoNoturna: true,
    
}*/
