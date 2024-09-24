### 1.

1. Considere três processadores diferentes, P1, P2 e P3, executando o mesmo conjunto de instruções. P1 tem uma taxa de clock de 3 GHz e um CPI de 1,5. P2 tem uma taxa de clock de 2,5GHz e um CPI de 1,0. P3 tem uma taxa de clock de 4,0 GHz e um CPI de 2,2. (5 pts)

**a) Qual processador possui o desempenho mais rápido expressado pelas instruções por segundo?**

**Desempenho P1** (instruções/segundo) = 3 x $10^9$/ 1,5 = 2 x $10^9$. 

**Desempenho P2** (instruções/segundo) = 2,5 x $10^9$/ 1,0 = 2,5 x $10^9$. 

**Desempenho P3** (instruções/segundo) = 4 x $10^9$/ 2,2 = 1,8 x $10^9$. 

P2 executa mais instruções por segundo.


**b) Se cada processador executa um programa em 10 segundos, encontre o número de ciclos e o número de instruções. c) Ao tentar reduzir o tempo de execução em 30%, a CPI aumenta em 20%. Qual a taxa de clock que deve ser utilizada para a redução de tempo?**


**ciclos P1** = 10 x 3 x $10^9$= 30 x $10^9$

**ciclos P2** = 10 x 2,5 x $10^9$= 25 x $10^9$

**ciclos P3** = 10 x 4 x $10^9$= 40 x $10^9$

**Número de Instruções P1** = 30 x $10^9$/ 1,5 = 20 x $10^9$. 

**Número de Instruções P2** = 25 x $10^9$/ 1,0 = 25 x $10^9$. 

**Número de Instruções P3** = 40 x $10^9$/ 2,2 = 18,18 x $10^9$.


**c) Ao tentar reduzir o tempo de execução em 30%, a CPI aumenta em 20%. Qual a taxa de clock que deve ser utilizada para a redução de tempo?**

$$CPI_{novo}= CPI_{velho} \times 1,2$$

$$CPI_1= 1,5 \times 1,2 = 1,8$$ 

$$CPI_2= 1,0 \times 1,2 = 1,2 $$ 
$$CPI_3 = 2,2 \times 1,2 = 2,6 $$

$$\text{Nova Taxa de Clock} = \frac{\text{Número de instruções} \times \text{novo CPI}}{\text{Novo Tempo}} $$

$$Tempo_{novo}= 0,7 * Tempo_{velho} = 0,7 * 10 = 7 segundos $$

$$frequencia_1 = \frac{20 \times 10^9 \times 1,8}{7} = 5,14 GHz$$ 

$$frequencia_2 = \frac{25 \times 10^9 \times 1,2}{7} = 4,28 GHz$$

$$frequencia_3 = \frac{18,18 \times 10^9 \times 2,6}{7} = 6,75 GHz$$

### 2.

## 1ª página

**$t0**:
1. 0x0000
2. 0x0004
3. 0x0008
4. 0x000C
5. 0x0010
6. 0x0014
7. 0x0018
8. 0x001C
9. 0x0020
10. 0x0024 = (0 * 16^3)
			+ (0 * 16^2)
			+ (2 * 16^1) 
			+ (4 * 16^0)

**$t1**:

É o contador a ser decrementado a cada iteração do loop, termina `igual a zero`.

**$t2**:

> Houve uma complicação na escrita do código, portanto consideramos que ele quis dizer `$t2 == $t3`

É o registrador que armazena o valor do somatório, seu valor final é de `45`


## 2ª paǵina

**$t0**:

1. 0x0000
2. 0x0004
3. 0x0008
4. 0x000C
5. 0x0010
6. 0x0014
7. 0x0018
8. 0x001C
9. 0x0020
10. 0x0024
11. 0x0028 = (0 * 16^3)
			+ (0 * 16^2)
			+ (2 * 16^1)
			+ (8 * 16^0)

**$t1**:

Contador. Termina em `zero`

**$t2/\$t3**:

45 - 5 = `40`

## 3ª paǵina

**$t0**:

> Agora utilizando .byte invés de .word, a incrementação será feita de 1 em 1 no registrador.

1. 0x0000
2. 0x0001
4. 0x0002
3. ...
4. 0x000E
5. 0x000F

Como são feitas 16 iterações iniciando do zero, o valor final do registrador `$t0` é `0x000F == 15`

**$t1**:

Contador. Termina em `zero`

**$t2/\$t3**:

> O array `a` tem 17 elementos mas o loop só itera 16 vezes. Portanto, o valor `-2` será desconsiderado no somatório.

128
