class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.velocidade = 0;
    }
  
    acelerar(incremento) {
      this.velocidade += incremento;
      return `O carro ${this.marca} ${this.modelo} está agora a ${this.velocidade} km/h.`;
    }
  
    frear() {
      this.velocidade = 0;
      return `O carro ${this.marca} ${this.modelo} parou completamente.`;
    }
  
    ligarFarol() {
      return `Os faróis do ${this.marca} ${this.modelo} foram ligados.`;
    }
  }
  
  const meuCarro = new Carro('Fiat', 'Uno', 2022);
  console.log(meuCarro.acelerar(60));
  console.log(meuCarro.frear()); 
  console.log(meuCarro.ligarFarol()); 