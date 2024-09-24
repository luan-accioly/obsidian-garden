### 1. Descreva as etapas que transformam um programa escrito em linguagem de alto nível, como C, em uma representação que é executada diretamente por um processador de computador.

**Resposta:**

- Antes de ser compilado, o código passa por um pré-processador, que lida com diretivas como importação de bibliotecas. 
- O compilador transforma o código-fonte pré-processado em código objeto, que é uma versão do programa em linguagem de máquina (binário), que irá conter instruções para o processador
- O sistema operacional carrega o executável em memória e prepara o ambiente de execução, alocando espaço para variáveis e preparando a execução.
- o processador lê e executa  as instruções de linguagem de máquina diretamente, um a uma, realizando as operações descritas pelo programa original.

### 2. Uma armadilha comum na avaliação de processadores é a utilização de um subconjunto da equação de desempenho como uma métrica de desempenho. Para ilustrar isso, considere os dois processadores a seguir. P1 tem uma taxa de clock de 4ghz, CPI médio de 0,9 e requer a execução de 5,0E9 instruções. P2 tem uma taxa de clock de 3 GHz, CPI médio de 0,75 e requer a execução de 1,9E9 instruções. Baseado apenas nestas informações determine qual dos três processadores tem o melhor desempenho

$$
\text{Tempo de Execução} = \frac{\text{Instrucões}}{\text{Taxa de Clock}} \times CPI
$$

### 3. Para a instrução C a seguir, qual é o código assembly do MIPS correspondente? Suponha que as variáveis f, g, h, i e j sejam atribuídas aos registradores \$s0,\$s1, \$s2, \$s3 e \$s4, respectivamente.  Suponha que o endereço base dos arrays A e B estejam nos registradores $s6 e $s7, respectivamente

```
B[8] = A[i - j];
```

**Resposta:**

.words:

```
sub $t0, $s3, $s4   # $t0 = i - j
sll $t0, $t0, 2     # Multiplica o índice por 4
lw  $t1, 0($t0)     # Carrega o valor de A[i - j] em $t1
li  $t2, 8          # Carrega o valor 8 em $t2
sll $t2, $t2, 2     # Multiplica 8 por 4 para calcular o deslocamento de B[8]
sw  $t1, 0($t2)     # Armazena o valor de A[i - j] em B[8]
```

.Bytes:

```
sub   $t0, $s3, $s4     # $t0 = i - j
add   $t2, $s6, $t0     # $t2 = endereço de A[i - j]
lb    $t3, 0($t2)       # $t3 = A[i - j] (carrega um byte)
addi  $t4, $s7, 8       # $t4 = endereço de B[8]
sb    $t3, 0($t4)       # B[8] = A[i - j] (armazena um byte)
```

### 4. Considere o seguinte loop em MIPS:

```mips
LOOP: slt, $t2, $0, $t1
	  beq $t2, $0, DONE
	  subi $t1, $t1, 1
	  addi $s2, $s2, 2
	  j LOOP
DONE:
```

Suponha que o registrador $t1 seja inicializado com o valor 10. Qual é o valor no registrador $s2, supondo que $s2 seja inicialmente zero?

**Resposta:**

```mips
LOOP: slt, $t2, $0, $t1 # verifica se 0 é menor que $t1
	  beq $t2, $0, DONE # Se $t2 for igual a zero, pule para DONE 
	  subi $t1, $t1, 1  # Decrementa 1 de $t1 ($t1 = $t1 - 1)
	  addi $s2, $s2, 2  # Incrementa 2 em $s2 ($s2 = $s2 + 2)
	  j LOOP
DONE:
```

`slt` : set on less than = verifica se o segundo parâmetro é menor que o terceiro. Se for, atribui 1 ao primeiro parâmetro. Se não, atribui 0