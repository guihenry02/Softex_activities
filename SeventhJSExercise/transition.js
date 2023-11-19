class Transacao {
    constructor(valor, tipo, status) {
      this.valor = valor;
      this.tipo = tipo;
      this.status = status;
      this.data = new Date();
    }
  
    verificarStatus() {
      return `A transação de ${this.tipo} no valor de ${this.valor} está ${this.status}.`;
    }
  
    cancelarTransacao() {
      this.status = 'cancelada';
      return `A transação de ${this.tipo} no valor de ${this.valor} foi cancelada.`;
    }
  
    obterData() {
      return `Data da transação: ${this.data.toDateString()}.`;
    }
  }
  
  const minhaTransacao = new Transacao(500, 'saída', 'pendente');
  console.log(minhaTransacao.verificarStatus());
  console.log(minhaTransacao.cancelarTransacao()); 
  