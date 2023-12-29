class Mesa {
    constructor(material, cor, formato) {
      this.material = material;
      this.cor = cor;
      this.formato = formato;
      this.ocupada = false;
    }
  
    ocupar() {
      this.ocupada = true;
      return `A mesa ${this.cor} ${this.material} está agora ocupada.`;
    }
  
    desocupar() {
      this.ocupada = false;
      return `A mesa ${this.cor} ${this.material} está agora desocupada.`;
    }
  
    mudarCor(novaCor) {
      this.cor = novaCor;
      return `A mesa agora é da cor ${this.cor}.`;
    }
  }
  
  const minhaMesa = new Mesa('madeira', 'branca', 'retangular');
  console.log(minhaMesa.ocupar()); 
  console.log(minhaMesa.desocupar());
  console.log(minhaMesa.mudarCor('preta'));