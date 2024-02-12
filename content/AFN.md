---
draft: true
---


# AFN

## Introdução

### Entendendo a diferença entre AFD e AFN

- **AFD**: Quando a máquina está em um dado estado e lê o próximo símolo de entrada, sabemos qual será o próximo estado, está determinado. Chamamos isso de computação determinística.

- **AFN:** Várias escolhas podem existir para o próximo estado em qualquer ponto

### A computação em um AFN

- Não determinismo pode ser visto como uma espécie de computação paralela na qual múltiplos e independentes processos podem estar rodando concorrentemente

- Diremos que um AFN **A** "aceita" uma cadeia w se existir pelo menos uma computação em que:
  
  - **A** lê toda a cadeia w, e
  
  - Ao final da leitura, termina em um estado de aceitação
  
  - Diremos que um AFN **A** "rejeita" uma cadeia w se não existir nenhuma computação que satisfaça as condições acima.

#### Exemplo de um AFN:

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-02-15-30-00-image.png)

- Pode ter mais de uma transição no mesmo estado com o mesmo símbolo (ver q1)

- Um AFN pode não ter transições para todos os símbolos do alfabeto (ver q2, q3)

- Pode conter transições **ε**, com cadeira vazia (ver q2)
  
  - A máquina "se divide" em várias cópias sem ler qualquer entrada

- Utilizando a string 11 no exemplo acima:

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-02-15-37-22-image.png)

-----

### Resumo

- AFN funciona com computação paralela, criando várias cópias da mesma máquina;

- Pode ter mais de um caminho pra o mesmo símbolo;

- Pode não ter caminho pra um símbolo;

- Pode ter transição vazia **ε**

------

### Exemplos

- Desafio: projetar um autômato finito que aceita todas as palavras com 1 na ante-penultima posição
  
  - Exemplos aceitos: 01010**1**11 | **1**11 | 0**1**01
  
  - Exemplos rejeitados: 01010011 | 011 | 0001 

- Exemplo em **AFD**:
  
  ![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-03-00-15-23-image.png)

- Exemplo em **AFN**
  
  - Devido ao não determinismo, temos um autômato simples;
  
  - O autoômato fica no estado q1 até que "advinhe" que é a terceira posição partindo do final e verifica que é 1.

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-03-00-15-59-image.png)
