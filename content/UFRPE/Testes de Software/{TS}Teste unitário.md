---
draft: false
---


## Roteiro

1. Teste de componentes vs integração
2. Categorias de técnicas de teste

## Teste de componentes vs integração
![[Pasted image 20231204173603.png]]

### Teste de componente
- Necessidade de construir stubs e drivers
- Top-down: 
	- Necessita de mais stubs
- Bottom-up:
	- Necessita de mais drivers

#### Driver vs Stub

> Quando um componente depende de outros componentes e queremos testá-los de forma isolada, temos que construir "imitações" dos outros componentes 

**Driver**
- Simula **clientes** do componente que será testado

**Stub**
- Simula **componentes** que a unidade sobre testes **depende**

![[Pasted image 20231204173801.png]]

## Categorias de técnicas de teste

![[Pasted image 20231204174034.png]]

**Técnicas estáticas:**
- Não executam o sistema
- Avalia documentação de diversos tipos através de revisões ou via ferramentas
	- Requisitos
	- Diagramas
	- Código fonte

**Técnicas dinâmicas:**
- **Caixa preta**
	- O sistema é uma caixa-preta
	- Dadas as entradas, sabemos quais são as saídas esperadas
	- Não sabemos como o sistema é internamente
		- Não olhamos código fonte
		- Não olhamos o documento da arquitetura
		- Não conhecemos a estrutura interna do sistema
- **[[{TS} Caixa-branca| Caixa-branca]]**
	- O sistema é uma caixa-branca (transparente)
	- Os testes são produzidos a partir de informações sobre a estrutura interna do sistema
		- Tipicamente, código fonte
- **Exploratório**
	- Baseado na experiência
		- Conhecimento e experiência do testador são usados para projetar os testes