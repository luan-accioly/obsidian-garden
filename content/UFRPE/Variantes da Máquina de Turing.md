---
draft: true
---


# Variantes da Máquina de Turing

> São definições alternativas, mas que não alteram a classe de linguagens reconhecidas por uma MT. Daí dizemos que as MTs têm *robustez*

- **Exemplo**: Suponha que tivéssemos permitindo que a MT tenha a capacidade de permanecer parada.

- A função de transição teria então a forma
  
  `δ: QxΓ -> QxΓ{E,D,P}`

**Variantes:**

- Máquinas de Turing Multifita

- Máquinas de Turing Não-Determinísticas

- Enumeradores

## Multifitas

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-27-23-15-46-image.png)

1. Cada fita tem seu cabeçote de leitura/escrita

2. Inicialmente, entrada na fita 1 e demais em branco

3. Transição implica em ler/escrever/mover sobre todas as fitas simultaneamente:
- A função de transição teria então a forma
  
  $δ: QxΓ^k$ -> $QxΓ^kx${E,D}, onde k é o número de fitas

> Chame uma linguagem de turing-reconhecível (ou recursivamente enumerável) se alguma máquina de Turing **multifitas** a reconhece

**Toda MT multifita tem uma MT de única fita que lhe é equivalente**

- Seja S uma MT de fita única e M uma MT de k fitas.
  S pode simular M:

    ![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-27-23-44-07-image.png)

- Identificamos na fita de S, quais elementos estavam sendo observados em cada fita de M:
  
  ![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-27-23-45-20-image.png)

### Exemplo:

#### L = {$a^nb^nc^n$ $|$ $n \ge 0$ }

**Estratégia:**

- Utilizar três fitas:
  
  - A primeira servirá para entrada
  
  - A segunda servirá para armazenar os a’s
  
  - A terceira servirá para armazenar os b’s
  
  - A cada “a” lido, gravar “a” na fita 2 e andar para a direita nas fitas 1 e 2. Fita 3 não lê, nem grava e permanece na mesma posição.
  
  - A cada “b” encontrado na entrada, gravar um “b” na fita 3 e andar para direita em 1 e 3. Na fita 2 nenhuma operação é realizada
  
  - No primeiro “c” encontrado na entrada, gravar um “c” na fita 1 e permanecer parado. Nas fitas 2 e 3 nenhuma operação (leitura/gravação) é realizada e percorre para esquerda em ambas
  
  - A cada “c” deve ser feito o “batimento” nas fitas 2 e 3 em relação a quantidade de a’s e b’s
  
  - Se todas as fitas alcançarem o marcador de fita vazia juntamente, a entrada é aceita.

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-27-23-53-56-image.png)
