class Banco {
  constructor(conta, saldo, tipoConta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoConta = tipoConta;
    this.agencia = agencia;
  }

  buscarSaldo() {
    return this.saldo;
  }

  deposito(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    this.saldo -= valor;
  }

  numeroConta() {
    return this.conta;
  }
}

const minhaConta = new Banco(123456, 1000, "corrente", 1234);
console.log(minhaConta.buscarSaldo()); // exibe o valor 1000
minhaConta.deposito(500);
console.log(minhaConta.buscarSaldo()); // exibe o valor 1500
minhaConta.saque(300);
console.log(minhaConta.buscarSaldo()); // exibe o valor 1200
console.log(minhaConta.numeroConta()); // exibe o valor 123456