---
draft: true
---


# Autômatos Finitos Determinísticos

- Modelos que possuem um número finito de estados

- Contém uma quantidade extremamente limitada de memória
  
  - O que um computador pode fazer com uma memória tão pequena?
    
    - O controlador para uma porta automática é um exemplo de tal dispositivo.
    
    - As lavadoras de louça/roupa, termômetros eletrônicos, relógios digitais, calculadoras e máquinas de venda automática

- Têm como características estarem a todo o momento em um determinado "estado" de um conjunto finito deles.

- Como o conjunto é finito, a história de execução não pode ser memorizada. Assim, o sistema deve ser projetado a fim de memorizar apenas o que é relevante

- A vantagem de usar um número finito de estados é que é possível implementá-lo de uma forma simples em hardware como um circuito, ou em um software que possa tomar decisões examinando apenas um número limitado de dados ou a própria posição no código

--------------------------------

#### Exemplo:

Um interruptor que memoriza se está no estado "ligado" ou "desligado" e permite que o usuário pressione um único botão cujo será diferente de acordo com o estado em que o interruptor se encontra, ou seja, se ele estiver ligado e for pressionado ele irá ligar e vice-versa

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-07-30-23-12-51-image.png)

------------------------

## Representação de um AFD

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-07-30-23-20-16-image.png)

#### Estados:

**Estado inicial:** É o que sempre tem a seta apontada para si

**Estado de aceitação:** São os estados finais. Aqueles em que o automato parou e aquela ação é aceita como correta.

**Alfabeto:** O alfabeto de um autômato finito é o conjunto de símbolos possíveis dentro dele. Neste caso: **{0,1}** 

**Linguagem:** É o conjunto de palavras que este aceita
