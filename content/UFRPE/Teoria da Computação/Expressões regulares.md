---
draft: true
---


# Expressões regulares

----

Muito utilizadas para a busca de padrões em textos

- Pense no CPF:
  
  - ∑ = {0, 1, 2,...,0, ., -}
  
  - CPF: 000.000.000-00

- Telefone
  
  - (00) 0000-0000

- Email

----

#### Operações básicas das linguagens regulares

- Sejam *A* e *B* linguagens. Definimos as operações regulares **união, concatenação e estrela** da seguinte forma:
  
  - **União**: A U B = {x | x ∈ A ou x ∈ B}
  
  - **Concatenação**: A o B = {xy | x ∈ A e y ∈ B}
  
  - **Estrela**: A* = {x1 x2...xk | k >= 0 e cada xi ∈ A} 

- Se A e B são linguagens regulares, A U B, A o B e A* também são

- Suponha que o alfabeto padrão composto de 26 letras {a,b,c,...,z}. Se A = {legal, ruim} e B = {garoto, garota} , então:
  
  - A U B = {legal, ruim, garoto, garota}
  
  - A o B = {legalgaroto, legalgarota, ruimgaroto, ruimgarota}
  
  - A* = {ε, legal, ruim, legallegal, legalruim, ruimlegal, ruimruim, ...}

----

#### Expressões regulares básicas

- x ∈ ∑, x é uma ER
  
  Representa apenas a cadeira que tem apenas o símbolo x.
  
  L(x) = {x}

- ε é uma ER
  
  Representa apenas a própria cadeia vazia
  
  L(ε) = {ε}
  
  - Visão algorítmica: seria como um comando "não gere símbolo" (como um skip ou nop)

- Ø
  
  Não representa nenhuma cadeia.
  
  L(Ø) = {}
  
  - Visão algorítmica: da a ideia de um comando "aborte" que causa o cancelamento de qualquer trecho já gerado da saída.
  
  ----

#### Exemplos

##### ∑ = {0,1}

- {w | w contém um único 1}
  
  0* 1 0*

- {w | w contem pelo menos um símbolo 1}
  
  ∑* 1 ∑*

- {w | todo 0 em w é seguido por pelo menos um 1}
  
  1*(01+)*

- {w | w é uma cadeia de comprimento par}

   (∑∑)*

- {01,10}
  
  01 U 10

**Agora o contrário**

- 0 ∑* 0 U 1 ∑* 1 U 0 U 1 
  
  {w | w começa e termia com o mesmo símbolo}

- (0 U ε)1*
  
  01* U 1*

----

## Equivalência entre AFs e expressões regulares

Qualquer expressão regular pode ser convertida num autômato finito que reconhece a linguagem que ela descreve e vice versa.

- **Teorema**: Uma linguagem é regular se e somente se alguma expressão regular a descreve
  
  - Esse teorema tem duas direções. Enunciamos e provamoscada uma das direções como um lema separado

- **Lema 1.55**: Se uma linguagem é descrita por uma expressão regular, então ela é regular.
  
  ----

## Exemplo:

### R = (ab U a)*

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-11-19-11-52-image.png)

----

## AFNG

Lema 1.60: Se uma linguagem é regular então ela é descrita por uma expressão regular.

- **Ideia da prova**: Precisamos mostrar que, se uma linguagem A for regular, uma expressão regular a descreve. Dado que A é regular, ela é aceita por um AFD.

- Descrevemos um procedimento para converter AFDs em expressões regulares equivalentes

- Dividimos esse procedimento em duas partes, usando um novo tipo de autômato finito chamado *autômato finito não-determinístico genegralizado*, AFNG 
