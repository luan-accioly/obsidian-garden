> Consiste no uso de técnicas de computação para traduzir texto ou fala de uma linguagem para outra, incluindo contexto, idiomáticas e nuances pragmáticas de ambas as linguagens.

- As primeiras abordagens eram baseadas em [[#Baseado em regras | rule-based]] ou em estatísticas
- Atualmente são utilizados neural-machine-translation ou large-language-models

## Aplicações

> Antes do início dos métodos de machine learning, os métodos estatísticos exigiam muitas regras acompanhadas de anotações morfológicas, sintáticas e semânticas.

### Baseado em regras

- Usada principalmente na criação de dicionários e programas de gramática. 
- O maior motivo para sua queda foi a complexidade:
	- Variações ortográficas e entradas errôneas deviam ser incluídas no analisador

#### Transfer-based

Cria uma tradução a partir de uma representação intermediária que simula o significado da sentença original. 

Dependia parcialmente do par de idiomas envolvidos na tradução

#### Dictionary-based

Baseado em entradas de dicionário. As palavras eram traduzidas como estão por um dicionário.

### Statistical

- Utiliza métodos estatísticos e [[Corpus Linguístico]] para gerar traduções.
- Eficaz pra textos similares
- Limitado devido à escassez desses corpora para muitos pares de idiomas. 
- Depende de grandes quantidades de textos paralelos e tem dificuldade com línguas ricas em morfologia

## Problemas

- Tradução de partes ambíguas, cuja tradução correta requer um processamento semântico da linguagem semelhante ao senso comum ou ao contexto.
- Erros no texto fonte