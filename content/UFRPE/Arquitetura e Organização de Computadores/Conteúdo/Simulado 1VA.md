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
