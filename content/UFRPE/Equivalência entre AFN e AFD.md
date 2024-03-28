---
draft: true
---


# Equivalência entre Autômatos Determinísticos e Não-Determinísticos

----

- Autômatos finitos determinísticos e não-determinísticos reconhecem a mesma classe de linguagens.  

- Duas máquinas são equivalentes se elas reconhecem a mesma linguagem

- **Teorema**: Todo AFN tem um AFD equivalente
  
  - Logo, 
    
    - Corolário: Uma linguagem é regular se e somente se algum AFN a reconhece

----

## Fazendo a conversão

- Vamos converter um AFN em um AFD equivalente que o simule

- Se k é o número de estados do AFN, ele tem 2^k subconjuntos de estados.

- Cada subconjunto corresponde a uma das possibilidades de que o AFD tem que se lembrar. Portanto, o AFD que simula o AFN terá 2^k estados

##### Como proceder com cadeia vazia

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-03-00-44-29-image.png)

- Lembrar de considerar o caso em que o estado inicial pode atingir estados de aceitação em E(s)
  
  - O estado inicial será o estado inicial do AFN mais os estados que são atingidos pela transição E
  
  - O estado (q0, q1) será o estado inicial

- A transição para o símbolo 0 irá para o estado do conjunto vazio, pois não há opções para esse símbolo nos estados (q0) e (q1)

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-03-00-48-34-image.png)

- Todos os subconjuntos possíveis de Q é um estado do AFD

- Indo para vários estados ao mesmo tempo do AFD= ir a um subconjunto de Q, que agora será um estado do AFD

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-03-00-54-24-image.png)

- Em caso de conjunto vazio, Ø = morre

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-03-00-55-14-image.png)

----

## Exemplo

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-03-01-03-29-image.png)

1. **Identificando o estado inicial**
- q0 pode atingir q1 em E (q0 -> q1)

- O próprio q0

- Novo estado inicial: {q1, q1}
  
  ![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-03-01-06-08-image.png)
2. **Construindo a tabela reconhecendo as possibilidades**

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-03-01-07-19-image.png)

3. Definindo os novos estados

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-03-01-08-34-image.png)

4. **Resultado final**

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-03-01-10-05-image.png)
