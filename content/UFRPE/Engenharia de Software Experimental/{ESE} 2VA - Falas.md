---
draft: true
---

### Contexto

- Observar o céu é uma prática que vem de culturas muito antigas, utilizadas para:
	- navegação marítima
	- agronomia
	- rituais religiosos
- O avanço da tecnlogia (Telescópios e Satélites) só fomentou a curiosidade
- Alta da IA trás oportunidade para análise automatizada desses corpos celestes

#### Problema

- Problemas que buscamos amenizar:
	- Dificuldade em lidar com quantias massivas de dados
	- Erro humano

- Justificativa:
	- Aprimoramento da precisão
	- Aceleramento da análise


### Conceitos básicos

**Machine Learning**

- Área da ciência da computação de Inteligência Artificial
- Busca desenvolver algoritmos que: 
	- possam analisar padrões em grandes quantias de dados
	- Fazer previsões a partir desse aprendizado

**Estrela**

- Esfera de plasma que:
	- Funciona através de fusão nuclear
	- Tem seu próprio brilho
	- É autossustentável

**Galáxia**

- Sistema gravitacional que agrega planetas, estrelas, poeira cósmica
- Possuem diversos tipos:
	- Espirais
	- Irregulares
	- Outras

**Quasar**

- Buraco negro supermassivo 
- Consomem tanta matéria e emitem tanta luz, que:
	- São os objetos mais brilhantes do universo
- Costumam ser o centro de uma galáxia ativa

### Trabalhos relacionados

#### MiniJPAS:

- Esse artigo busca:
	- Como usar algoritmos de aprendizado de máquina para classificar astros observados pelo miniJPAS
	- Diferenciar objetivos estentidos(galáxias) e pontuais(estrelas)
- Utilizaram dados do: 
	- miniJPAS 
	- SDSS(classificação confiável)
	- HSC-SSP(classificação confiável)
- Testaram 6 algoritmos:
	- KNN
	- Floresta Aleatória(melhor desempenho)
	- Floresta extremamente aleatória (melhor desempenho)
- Concluem que:
	- Algoritmos de ML podem competir com classificadores tradicionais de estrelas e galáxias

#### Identificando galáxias, quasares e estrelas com aprendizado de máquina

- Utilizaram as bases:
	- SDSS
	- WISE
- Treinaram o algoritmo Floresta Aleatória de forma otimizada, utilizando **fotometria** das bases
- Aplicaram o modelo a 111 milhões de fontes do SDSS não classificadas
- Com isso, geraram um novo catálogo rotulado

#### Classificação de Galáxias: Análise de aprendizado de maquina em na base GAMA

- Analisaram algoritmos de Aprendizado de Máquina baseados em inspeção visual em cinco catálogos do projeto GAMA (Um projeto que reúne dados dados de telescópios, observatórios e outros)
- Utilizaram características específicas de cada base
- Concluíram que:
	- Nem os dados individuais nem os dados combinados das bases, sustentam o esquema de classificação de galáxias baseado em inspeção visual
	- Apenas uma das classes (Esferóides azuis) se distinguiam das outras 