

    let Carro = function (){
        this.cor = 'Amarelo'
        this.modelo = 'Chevette'
        this.velocidadeAtual = 0
        this.velocidadeMaxima = 180

        this.acelerar = function () {
           // this.velocidadeAtual += 10
           let velocidade = this.getVelocidadeAutal() + 10
           this.setVelocidadeAtual(velocidade)

        }
        this.getVelocidadeAutal = function(){
            return this.velocidadeAtual
        }
        this.setVelocidadeAtual = function (velocidadeAtual){
            this.velocidadeAtual = velocidadeAtual
        }
    }

    let carro = new Carro()

    console.log(`A velocidade atual é ${carro.getVelocidadeAutal()}`)
    carro.acelerar()
    console.log(`A velocidade atual é ${carro.getVelocidadeAutal()}`)

