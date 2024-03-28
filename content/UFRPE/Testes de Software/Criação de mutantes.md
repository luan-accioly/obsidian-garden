---
draft: true
---


**Grupo3-1**

Classe Banco

Antes:
```java
public void transferir(ContaAbstrata contaOrigem, ContaAbstrata contaDestino, double valor)
        throws SaldoInsuficienteException, RepositorioException, ValorInvalidoException {
        if (this.contas.existe(contaOrigem.getNumero()) && this.contas.existe(contaDestino.getNumero())) {
                this.debitar(contaOrigem, valor);
                this.creditar(contaDestino, valor);
                this.contas.atualizar(contaOrigem);
                this.contas.atualizar(contaDestino);
        }
}
```

Depois:
```java
public void transferir(ContaAbstrata contaOrigem, ContaAbstrata contaDestino, double valor)
        throws SaldoInsuficienteException, RepositorioException, ValorInvalidoException {
        if (this.contas.existe(contaOrigem.getNumero()) || this.contas.existe(contaDestino.getNumero())) {
                this.debitar(contaOrigem, valor);
                this.creditar(contaDestino, valor);
                this.contas.atualizar(contaOrigem);
                this.contas.atualizar(contaDestino);
        }
}
```

---

**Grupo3-2**

Classe Banco

Antes:
```java
public void creditar(ContaAbstrata conta, double valor) throws RepositorioException, ValorInvalidoException {
        if (valor < 0)
                throw new ValorInvalidoException();
        conta.creditar(valor);
}
```

Depois:
```java
public void creditar(ContaAbstrata conta, double valor) throws RepositorioException, ValorInvalidoException {
        if (valor > 0)
                throw new ValorInvalidoException();
        conta.creditar(valor);
}
```

---

**Grupo3-3**

Classe Cliente

Antes:
```java
public void adicionarConta(String numeroConta)
                throws ClienteJaPossuiContaException {
        if (procurarConta(numeroConta) != -1)
                throw new ClienteJaPossuiContaException();
        this.contas.add(numeroConta);
}
```

Depois:
```java
public void adicionarConta(String numeroConta)
                throws ClienteJaPossuiContaException {
        if (procurarConta(numeroConta) != 1)
                throw new ClienteJaPossuiContaException();
        this.contas.add(numeroConta);

}
```

---

**Grupo3-4**

Classe Cliente

Antes:
```java
public void removerConta(String numeroConta)
                throws ClienteNaoPossuiContaException {
        int index = procurarConta(numeroConta);
        if (index == -1)
                throw new ClienteNaoPossuiContaException();
        this.contas.remove(index);
}
```

Depois:
```java
public void removerConta(String numeroConta)
                throws ClienteNaoPossuiContaException {
        int index = procurarConta(numeroConta);
        if (index != -1)
                throw new ClienteNaoPossuiContaException();
        this.contas.remove(index);
}
```

---

**Grupo3-5**

Classe Cliente

Antes:
```java
public void adicionarConta(String numeroConta)
                throws ClienteJaPossuiContaException {
        if (procurarConta(numeroConta) != -1)
                throw new ClienteJaPossuiContaException();
        this.contas.add(numeroConta);

}
```

Depois:
```java
public void adicionarConta(String numeroConta)
                throws ClienteJaPossuiContaException {
        if (procurarConta(numeroConta) == -1)
                throw new ClienteJaPossuiContaException();
        this.contas.add(numeroConta);
}
```
---

**Grupo3-6**

Classe Conta

Antes:
```java
public void debitar(double valor) throws SaldoInsuficienteException {
        if (this.getSaldo() < valor)
                throw new SaldoInsuficienteException(this.getNumero(),
        this.getSaldo());
        this.setSaldo(this.getSaldo() - valor);
}
```

Depois:
```java
public void debitar(double valor) throws SaldoInsuficienteException {
        if (this.getSaldo() < valor)
                throw new SaldoInsuficienteException(this.getNumero(),
        this.getSaldo());
        this.setSaldo(this.getSaldo() + valor);
}
```
---

**Grupo3-7**

Classe ContaAbstrata

Antes:
```java
public void creditar(double valor) {
        if(valor > 0)
                this.saldo = this.saldo + valor;
}
```

Depois:
```java
public void creditar(double valor) {
        if(valor > 0)
                this.saldo = this.saldo - valor;
}
```
---

**Grupo3-8**

Classe ContaEspecial

Antes:
```java
public void creditar(double valor) {
        super.creditar(valor);
        this.bonus = this.bonus + (valor * 0.01);
}
```

Depois:
```java
public void creditar(double valor) {
        super.creditar(valor);
        this.bonus = this.bonus - (valor * 0.01);
}
```
---

**Grupo3-9**

Classe ContaImposto

Antes:
```java
public void debitar(double valor) throws SaldoInsuficienteException {
        if (this.getSaldo() < valor)
                throw new SaldoInsuficienteException(this.getNumero(),
        this.getSaldo());
        double imposto = valor * CPMF;
        double total = valor + imposto;
        this.setSaldo(this.getSaldo() - total);
}
```

Depois:
```java
public void debitar(double valor) throws SaldoInsuficienteException {
        if (this.getSaldo() < valor)
                throw new SaldoInsuficienteException(this.getNumero(),
        this.getSaldo());
        double imposto = valor * CPMF;
        double total = valor / imposto;
        this.setSaldo(this.getSaldo() - total);
}
```
---

**Grupo3-10**

Classe Poupanca

Antes:
```java
public void renderJuros(double taxa) {
        double juros = this.getSaldo() * taxa;
        this.creditar(juros);
}
```

Depois:
```java
public void renderJuros(double taxa) {
        double juros = this.getSaldo() % taxa;
        this.creditar(juros);
}
```