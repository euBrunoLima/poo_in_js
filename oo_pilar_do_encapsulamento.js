class Tv{
    constructor(){
        this._relacaoCanais = [2,4,5,7,10];
        this._canalAtual = 5;
        this._volume = 5
    }

    //em js não existe encapsulamento com a propriedade privada, mas podemos simular com _ antes do nome da propriedade

    
    get canalAtual(){
        return this._canalAtual;
    }
    set canalAtual(novoCanal){
        if(this._relacaoCanais.includes(novoCanal)){
            this._canalAtual = novoCanal;
        }else{
            console.log("canal inválido");
        }
    }
    
}




let tv1 = new Tv();
tv1.canalAtual = 15
console.log(tv1.canalAtual); // 10