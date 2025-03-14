//Classe produto
class Produto{
    //Construtora da classe
    constructor(nome, preco){
        //Atributos
        this.nome = nome;
        this.preco = preco;
    }
    //Aplicar desconto de 10%
    calcularDesconto(){
        return this.preco * 0.9; //R
    }
}

//Classe Livro
class Livro extends Produto{
    //Construtor da classe
    constructor(nome, preco){
        super(nome, preco); //Herdando os atributos de produto
    }
    //Calcular o desconto sobrescrevendo o método da classe pai
    calcularDesconto(){
        return this.preco * 0.8; //retorna o preço com desconto
    }
}

