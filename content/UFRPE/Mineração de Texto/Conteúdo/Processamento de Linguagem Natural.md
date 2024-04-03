---
draft: false
---

> De forma resumida, são técnicas que vão transformar textos/palavras em números

## Visão geral de PLN


**Etapas necessárias para obter uma representação eficiente do texto:**

![[Pasted image 20240403011906.png]]

- [[tokenize]]
	- Dividir um texto (não necessariamente somente palavras)
	- Uma pontuação (vírgulas e pontos) podem ser considerados tokens
- ssplit
	- Dividir texto em sentenças
- pos (part of speech)
	- Classe gramatical das palavras
- lemma
	- uma forma de converter as palavras ao seu formato original
- ner (Reconhecimento de Entidade Nomeada)
	- identifica e categoriza entidades nomeadas em dados como cidades, pessoas, marcas, etc
- depparse 
	- identifica estrutura sintática do texto

### Conceitos Básicos de PLN

- [[Análise Léxica]]
- [[Análise Sintática]]
- [[Análise Semântica]]
- [[Análise Pragmática]]

### Desafios em PLN

#### Ambiguidade de palavras

- Apple
- Design

#### Ambiguidade sintática

- Os alunos insatisfeitos reclamaram da nota **no trabalho**
	- Os alunos que eram insatisfeitos reclamaram da nota?
	- Por causa da nota os alunos reclamaram?
- A mãe pegou o filho **correndo na rua**
	- Quem tava correndo na rua? A mãe? O filho?

#### Anáfora

- **João** insistiu para **José** comprar um computador para **ele**
	- quem exatamente é **ele**?

#### Pressuposição

- Ele acabou de fumar
	- Para sempre?
	- Acabou de fumar um 🚬?


