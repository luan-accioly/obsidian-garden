---
draft: false
---


- Utiliza as estruturas internas do sistema para criar testes
	- Em caixa preta, *não sabemos como* o sistema funciona
	- Em caixa-branca, conhecemos o *como*
- Tipicamente, a "estrutura interna" é o código fonte

## Cobertura de comando
> Mede o percentual de comandos cobertos pelos testes

$$
\frac{\text{Número de comandos cobertos}}{\text{Número total de comandos}} \times100\%
$$

### Exemplo:

```C
int function SUT(int x, int y, int z) {
	if (x > y+z) {
		x = y+1;
	}
	x = x+1;
	return x;
}
```
Total de linhas: 5 (não contar linhas sem comandos)

```
Caso de teste 1:
Entrada: x=10, y=30, z=40
Resultado esperado: 11
```

Linhas cobertas pelo `teste 1`: 
- 1 - Declaração de função (por mais estranho que possa parecer)
- 2 - Condicional (mesmo que a condição não seja atendida)
- 4 - Comando
- 5 - Retorno

Cobertura de comando do `teste 1`: 4/5 = 0,8 = 80% 

### Exercício

Qual o percentual de cobertura de código considerando-se a soma da cobertura de todos os casos de Teste abaixo?

```C
int function SUT(int x, int y, int z) {
	if (x > y+z) {
		if (y > z) {
			x = y;
		}
		else {
			x = y+1;
		}
	}
	x = x+1;
	return x;
}
```

Total de linhas: 8 (contando o `else`)

```
Caso de teste 1:
Entrada: x=1, y=2, z=3
Resultado esperado: 2

Linhas cobertas: 1, 2, 7, 8
Cobertura: 4/8 = 0,5 = 50%
```

```
Caso de teste 2:
Entrada: x=10, y=2, z=3
Resultado esperado: 4 

Linhas cobertas: 1, 2, 3, 5, 6, 7, 8
Cobertura: 7/8 = 0,875 = 87,5%
```

```
Caso de teste :
Entrada: x=5, y=2, z=3
Resultado esperado: 6

Linhas cobertas: 1, 2, 7, 8
Cobertura: 4/8 = 0,5 = 50%
```


Cobertura total: 7/8 linhas -  87,5%

## Cobertura de Decisão

> Vamos cobrir as decisões

$$
\frac{\text{Numero de decisões V e F cobertas}}{\text{Numero total de deciões V e F}} \times 100\%
$$

**Comandos que possuem decisão:**
- if
- while
- do-while
- for
- case

- Em sistemas grandes, é difícil conseguir 100% de cobertura de decisão
- Qual seria o mínimo de cobertura aceitável?
	- Depende do nível de criticidade e tamanho do software
	- 75% 3 85% é o valor economicamente viável em sistemas grandes
	- Em sistemas muito grandes (> 1000 linhas de codigo), a cobetura fica em torno de 50%

## Cobertura de Condição

> Entre nos detalhes de uma decisão

*if((`x == y` && `y > z`) || `z == 0`)*

Temos que projetar Casos de Teste que tornem cada condição verdadeira ou falsa

$$
\frac{\text{Número total de condicões V e F}}{\text{Número de condições V e F cobertas}} \times 100\%
$$

## Cobertura de Caminho

![[Pasted image 20231205010433.png]]

