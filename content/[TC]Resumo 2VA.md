---
draft: true
---


#Resumo 
# Resumo 2VA

## Máquinas de Turing

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-09-22-19-02-06-image.png)

### Variantes

- Máquinas de Turing Multifita

- Máquinas de Turing Não-Determinísticas

- Enumeradores

Todas reconhecem a mesma classe de linguagem

#### Multifita

É uma Máquina de Turing comum com várias fitas. Inicialmente a entrada aparece na primeira fita e todas as outras vazias, como cada fita tem sua própria cabeça para ler e escrever, a função de transição pode ler, escrever e mover as cabeças em alguma ou todas as fitas simultaneamente

$\delta: Q$x$\Gamma^k$->$Q$x$\Gamma^k$x{$E,D$} onde k é o número de fitas

> Chame uma linguagem de Recursivamente Enumerável se uma MTMF a reconhece

#### Não-Determinísticas

Neste tipo de MT, em qualquer ponto numa computação a máquina pode proceder de acordo várias possibilidaes:

$\delta:$ $Q$x$T$->$P$($Q$x$\Gamma$x{$E,D$}) 

Onde P é a coleção de todos os sub-conjuntos de Q

#### Enumerador

> Fracamente definido

É uma máquina de Turing com uma impressora em anexo

- A máquina pode usar essa impressora como um dispositivo de saída para imprimir cadeias

- Toda vez que a máquina de Turing quer adicionar uma cadeia à lista, ela envia para a impressora.

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-09-22-18-29-05-image.png)

---

## Classificações de Problemas NP

**Classe P:**

- é a classe de linguagens que são decidíveis em tempo polinomial por uma MT determinística de um única fita

    ![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-09-22-19-20-04-image.png)

##### Problemas intratáveis

Podem ser classificados em várias categorias, com base no seu grau de dificuldade:

- NP
  
  - Problemas que a solução é feita em tempo não determinístico
  
  - A verificação é feita em tempo polinomial

- NP-Completo

- NP-Dificil
  
  - A solução é feita em tempo não determinístico
  
  - A verificação da solução é feita em tempo não determinístico

---

## Decibilidade

Uma linguagem é decidível se uma MT a reconhece (aceitando ou rejeitando)

> Um conjunto de cadeias que uma MT M "aceita" é chamada de linguagem M ou de linguagem reconhecida por M, denotada L(M)

**Definição:**

- Uma linguagem é Turing-reconhecível(Ou recursivamente enumerável) se ele é reconhecido por uma máquina de Turing

- MTS que nunca entram em loop são chamadas de "decisores". Um decisor M decide a linguagem que ele reconhece

- Uma linguagem é decidível(ou recursiva) se for decidida por uma máquina de Turing

- É fácil ver que o complemento de alguma linguagem decidível é também decidível

---

##### Vacuidade

Existe algum algoritmo para verificar se um AFD aceita alguma cadeia?

$V_{AFD} =${$(A) | A$} é um AFD e L(A) = Ø

Prova: 

- Um AFD aceita alguma cadeia se, e somente se, é possível ir do estado inicial a um estado de aceitação seguindo as transações

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-09-22-18-52-46-image.png)

---

##### Equivalencia

Como provar que dois AFD's são equivalentes? (reconhecem a mesma linguagem)

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-09-22-19-10-57-image.png)

Construimos um novo AFD C, a partir de A e B, tal que:

- C aceita somente cadeias que são aceitas ou por A ou por B, mas não por ambos. 

- A e B reconhecem a mesma linguagem se C está vazia

---

##### Aceitação

Dado um AFD e uma cadeia, verificar se este AFD aceita esta cadeia.

Apresentamos uma MT que aceita esse automato, tal que na entrada dessa MT vamos ter o automato e a cadeia e vamos simular a cadeia do automato de entrada

---

#### Decibilidade para GLC

$A_{GLC}$={<G,w>: G é uma GLC que gera cadeia w}

Teorema:

- $A_{GLC}$ é uma linguagem decidível

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-09-22-20-08-31-image.png)

---

Verificar se 

$V_{GLC}$ = {<G> G é uma GLC e L(G) = Ø}

Teorema:

$V_{GLC}$ é uma linguagem decidível

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-09-22-20-11-08-image.png)

---

Equivalencia para GLC

- A LLC não é fechada sob complementação ou interseção. Assim, a mesma técnica utilizada para $EQ_{AFD}$ não funciona

- Assim, $EQ_{GLC}$ é não decidível.
