---
draft: true
---


# Decibilidade

> **A tese de Church-Turing:** "Se um problema de decisão tem solução, então existe uma MT que o soluciona"

## Problemas de decisão

Exemplo: Determinar se um número n é primo

Instâncias do problema (chamadas de p's)

$P_1$ 1 é primo?

$P_2$ 2 é primo?

$P_3$ 3 é primo?

Problemas decidíveis

$\real <V_1, V_2, ..., V_n>$ -> MT [sim|não]

$<V_1, V_2, ..., V_n>$ -> representa qualquer palavra W

W -> representa uma instância

> Para o nosso problema ser decidível, cada instância desse conjunto P devem ter uma resposta através de uma MT

### Exemplo

Determinar se um número binário n é par

$L_1  = $ {$W \in$ {0,1}* | W é par 

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-09-20-23-29-46-image.png)

## Problema da Parada

Dada uma MT arbitrária M e uma palavra arbitrária W, determinar se a computação de M com a entrada W para
