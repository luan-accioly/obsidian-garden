---
draft: true
---


# Máquina de Turing

- São dispositivos extremamente básicos que manipulam símbolos

- Simples, porém podem ser adaptadas para simular a lógica de qualquer computador

**Definição formal:** É uma 7-upla, `(Q, Σ, Γ, δ, q0, Qaceita, Qrejeita)`, onde Q, Σ, Γ são todos conjuntos finitos e

- Q é o conjunto de estados

- Σ é o alfabeto de entrada não contendo o símbolo em branco U

- Γ é o alfabeto da fita, onde `U ∈ Γ e Σ ⊆ Γ`

- δ: `QxΓ -> QxΓx{E,D}` é a função de transição

- q0 ∈ Q é o estado inicial

- Qaceita ∈ Q é o estado de aceitação

- Qrejeita ∈ Q é o estado de rejeição, onde `Qrejeita != Qaceita` 

## Uma máquina Pensante

- O objetivo inicial da Máquina de Turing era criar um modelo capaz de computar qualquer coisa que um humano possa computar
  
  - Como isso é um objetivo filosófico, ele de fato não pode ser provado
    
    > **Tese de Church-Turing**: Qualquer "algorítimo"  pode ser executado por uma dessas máquinas 

## Noção intuitiva

O ponto de partida de Turing foi analisar a situação na qual uma pessoa, com um lápis e uma borracha, realiza cálculos em uma folha organizada em quadrados

- Inicialmente, a folha de papel contém somente os dados iniciais do problema

- O trabalho da pessoa pode ser resumido em sequências de operações simples como segue:
  
  - Ler um símbolo de um quadrado
  
  - Alterar um símbolo em um quadrado
  
  - Mover os olhos para outro quadrado

- Quando é encontrada alguma representação satisfatória para a resposta desejada, termina-se os cálculos;

- Para viabilizar esse procedimento, algumas hipóteses são consideradas:
  
  - **Aceitáveis:**
    
    - A natureza bidimensional do papel não é requerimento essencial para os cálculos;
    
    - É assumido que o papel consiste de uma fita infinita organizada em quadrados (células)
    
    - Conjunto de símboos pode ser finito
    
    - Conjunto de estados da mente da pessoa durante o processo de cálculo é finito;
    
    - Existem dois estados em particular: *estado inicial* e *estado final*, correspondendo ao início e ao fim dos cálculos, respectivamente
    
    - O comportamento da pessoa a cada momento é determinado somente pelo seu **estado presente** e pelo **símbolo** para o qual sua atenção está voltada
    
    - A pessoa é capaz de observar e alterar o símbolo de apenas um quadrado de cada vez, bem como de transferir sua atenção somente para um dos quadrados adjacentes.

## Modelo de Máquina de Turing

- Usa uma fita infinita como sua memória ilimitada

- A fita tem uma cabeça que pode ler e escrever símbolos e mover-se sobre a fita

- Inicialmente, a fita contém apenas a cadeia de entrada e está em branco em todo o restante

- Se a máquina precisa armazenar informação, ela pode escrevê-la sobre a fita.

- Para ler a informação que ela escreveu, a máquina pode mover sua cabeça de volta para a posição onde a informação foi escrita

- A máquina continua a computar até que ela decida produzir uma saída.

- As saídas *aceite* e *rejeite* são obtidas entrando em estados designados de aceitação e rejeição

- Se não entrar num estado de aceitação ou de rejeição, ela continuará para sempre, nunca parando.

## Configuração

- Para um estado *q* e duas cadeiras u e v sobre o alfabeto da fita Γ, escrevemos `uqv` para a configuração na qual o estado atual é q, o conteúdo atual da fita é `uv` e a posição atual da cabeça é sobre o primeiro símbolo de v. 

### Exemplo:

- 1011q01111
  
  - Representa a configuração quando a fita é 101101111, o estado atual é q, e a cabeça está atualmente sobreo segundo 0.
  
  ![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-27-20-25-47-image.png)

----

## Definição Formal

- Dizemos que a configuração C1 origina a configuração C2, se a máquina de Turing puder ir de C1 para C2 em um único passo.

- Suponha que temos `a, b, c, u, v` em Γ e os estados q1 e qj.

- UAQ**i**BV origina UQ**j**ACV se:

- δ(Qi, b) = (Qj, c, E).
  
  - Isso cobre o caso em que a máquina de Turing move para a esquerda

- Para um movimento para a direita, digamos que:
  
  - $uaq_ibv$ origina $uacq_jv$ se:
  
  - δ($q_i$, b) = ($q_j$, c, D).

---

## Exemplo

- Encontre um MT que calcula a lingagem L = {$a^n b^n$: n >= 0}

- Repita:
  
  - Apague um "a".
  
  - Passe pelos "a's".
  
  - Apague um "b".
  
  - Passe pelos "b's"

- Vá parao começo da entrada.
  
  - Até que toda entrada seja apagada (aceita) ou se você não encontrar padrões de "as" ou "bs" (rejeita)

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-27-20-39-09-image.png)
