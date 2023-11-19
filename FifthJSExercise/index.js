class Banco {
    constructor(saldo, numeroConta, tipoConta, agencia) {
        this._saldo = saldo
        this._numeroConta = numeroConta
        this._tipoConta = tipoConta
        this._agencia = agencia
    }

    get buscar_saldo() {
        return this._saldo
    }

    get mostrar_numeroConta () {
        return this._numeroConta
    }

    deposito(valor) {
        this._saldo += valor
        console.log('Depósito realizado com sucesso')
    }

    saque(valor) {
        if (this._saldo > 0) {
            this._saldo -= valor
            console.log("Saque realizado com sucesso")
        }
        else {
            console.log("Você não possui dinheiro para sacar!")
        }
    }


}

let banco = new Banco(3000, '2341523', 'fisica', 'BB' )
banco.deposito(50)
console.log(banco.buscar_saldo)