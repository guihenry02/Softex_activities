function operacao() {
    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");
  
    try {
      if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Você precisa inserir números válidos.");
      }
  
      numero1 = parseFloat(numero1);
      numero2 = parseFloat(numero2);
  
      if (numero2 === 0) {
        throw new Error("Não é possível dividir por zero!");
      }
  
      const resultadoDivisao = numero1 / numero2;
      alert(`Resultado da divisão: ${resultadoDivisao}`);
    } catch (error) {
      alert(`Ocorreu um erro: ${error.message}`);
    } finally {
      alert("Fim da operação.");
    }
  }
  
  operacao();
  