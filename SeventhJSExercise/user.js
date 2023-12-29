class Usuario {
    constructor(nome, email, idade) {
      this.nome = nome;
      this.email = email;
      this.idade = idade;
      this.logado = false;
    }
  
    fazerLogin() {
      this.logado = true;
      return `Usuário ${this.nome} logado com sucesso.`;
    }
  
    fazerLogout() {
      this.logado = false;
      return `Usuário ${this.nome} desconectado.`;
    }
  
    mudarEmail(novoEmail) {
      this.email = novoEmail;
      return `Email do usuário ${this.nome} alterado para ${this.email}.`;
    }
  }
  
  const meuUsuario = new Usuario('Guilherme', 'pedro@example.com', 25);
  console.log(meuUsuario.fazerLogin()); 
  console.log(meuUsuario.fazerLogout()); 
  console.log(meuUsuario.mudarEmail('guilherme.@example.com')); 
  