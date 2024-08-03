$$
Desempenho_{X} = \frac{1} {\text{Tempo de execução}_X}
$$

Normalmente queremos relacionar o desempenho e dois computadores diferentes quantitativamente. Usaremos a frase "X é *n* vezes mais rápido que Y" - ou, "X tem *n* vezes a velocidade de Y" - para indicar:

$$
\frac{\text{Desempenho}_X}{\text{Desempenho}_Y} = n
$$

Se X for *n* vezes mais rápido que Y, então o tempo de execução em Y é *n* vezes maior do que em X

$$
\frac{\text{Desempenho}_X}{\text{Desempenho}_Y} = \frac{\text{Tempo de execução}_Y}{\text{Tempo de execução}_X} = n
$$

### Exemplo

Se o computador A executa um programa em 10 segundos e o computador B executa o mesmo programa em 15 segundos, o quanto A é mais rápido que B?

### Resposta

##### Sabemos que A é *n* vezes mais rápido que B se:

$$
\frac{\text{Desempenho}_A}{\text{Desempenho}_B} = \frac{\text{Tempo de execução}_B}{\text{Tempo de execução}_A} = n
$$

$$
\frac{15}{10} = 1,5
$$

##### Portanto, A é 1,5 vezes mais rápido que B.

## Medindo o desempenho

> [!INFO] Tempo de execução de CPU
> O tempo real que a CPU gasta calculando para uma tarefa específica

> [!INFO] Tempo de CPU do usuário
> O Tempo de CPU gasto em um programa propriamente dito

> [!INFO] Tempo de CPU do sistema
> Tempo de CPU gasto no sistema operacional realizando tarefas em favor do programa

Quase todos os computadores são construídos usando-se um clock que determina quando os eventos ocorrem no hardware. Esses intervalos de tempo discretos são chamados de [[Ciclos de Clock]]. 

### Desempenho da CPU e seus fatores

Uma formula simples para medir o desempenho final (baseado no tempo de execução da CPU) relaciona as métricas mais básicas (ciclos de clock e tempo do ciclo de clock) ao tempo da CPU:

$$
\text{Tempo de execução da CPU para um programa}
$$
$$
= 
$$
$$
\text{Ciclos de clock da CPU para um programa X Tempo do ciclo de clock}
$$

### Melhorando o desempenho

> A fórmula mencionada anteriormente deixa claro que o desempenho pode melhorar reduzindo o número de clocks necessários para o programa ou reduzindo o tamanho do ciclo de clock.

#### Exemplo

Um determinado programa executa em 10 segundos no computador A, que tem um clock de 2GHz. Estamos tentando ajudar um engenheiro a montar um computador B, que executará esse programa em 6 segundos. O projetista determinou que é possível haver um aumento considerável na taxa de clock(Hz), mas esse aumento afetará o restante do projeto da CPU, fazendo com que o computador B exija $1.2$ vezes a quantidade de ciclos de clock do computador A para esse programa. Que taxa de clock o projetista deve ter como alvo?

#### Resposta

##### Vamos primeiro achar o número de ciclos de clock exigidos para o programa em A

$$
\text{Tempo de CPU}_A = \frac{\text{Ciclos de clock de CPU}_A}{\text{Taxa de clock}_A}
$$

$$
\text{10 segundos} = \frac{\text{Ciclos de clock de CPU}_A}{2*10^9 \text{ciclos por segundo}}
$$

$$
\text{Ciclos de clock de CPU}_A = 10 \space \text{segundos} * 2 * 10^9 \frac{ciclos}{segundo} = 20*10^9 \text{ciclos}
$$

$$
\text{Ciclos de clock exigidos pelo programa no computador A: } 20*10^9
$$

##### Agora vamos decobrir o tempo de CPU para B:

$$
\text{Tempo de CPU}_B = \frac{1,2 * \text{Ciclos de CPU}_A}{\text{Taxa de clock}_B}
$$

$$
\text{6 segundos} = \frac{1,2 * 20 * 10^9 \text{ciclos}}{\text{Taxa de clock}_B}
$$

$$
\text{Taxa de clock}_B =  \frac{1,2 * 20 * 10^9 \text{ciclos}}{\text{6 segundos}} 
 = \frac{0,2 * 20 * 10^9 \text{ciclos}}{\text{segundos}} 
 = \frac{4 * 10^9 \text{ciclos}}{\text{segundos}} = 4 \text{GHz} 
$$

##### Para executar o programa em 6 segundos, B deverá ter o dobro de taxa de clock de A

### Desempenho da instrução

> O tempo de execução é igual ao número de instruções executas multiplicado pelo tempo médio por instrução

Números de ciclos de clock exigidos para um programa pode ser escrito como:

$$
\text{Ciclos de clock de CPU}
$$

$$
= 
$$

$$
\text{Instruções para um programa}  * \text{Ciclos de clock médios por instrução}
$$

O termo **ciclos de clock por instrução**, que é o número médio de ciclos de clock que cada instrução leva para executar, normalmente é abreviado como **CPI**

#### Exemplo

Suponha que tenhamos duas implementações da mesma arquitetura de conjunto de instruções. O computador A tem um tempo de ciclo de clock de 250 ps e um CPI de 2.0 para um programa, e o computador B tem um tempo de ciclo de clock de 500 ps e um CPI de 1.2 para o mesmo programa. Qual computador é mais rápido para este programa e por quanto?

#### Resposta

Sabemos que cada computador executa o mesmo número de instruções para o programa. Vamos chamar esse número de *I*. Primeiro, encontramos o números de ciclos de clock do processador para cada computador

$$
\text{Ciclos de clock de CPU}_A = I*2,0
$$
$$
\text{Ciclos de clock de CPU}_B = I*2,0
$$

Agora, podemos calcular o tempo de CPU para cada computador

$$
\text{Tempo de CPU}_A = \text{Ciclos de clock de CPU}_A * \text{Tempo de ciclo de clock} = I * 2,0 * 250 ps = 500 * I \text{ps}
$$

