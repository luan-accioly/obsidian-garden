---
draft: false
---

[[Classificação de Questões do ENEM | Descrição da atividade]]

---

```py
import pandas as pd
import numpy as np
import spacy

from sklearn.naive_bayes import GaussianNB
from sklearn.feature_extraction.text import TfidfVectorizer
```

## Tratando uma coluna do dataset

1. [[tokenize | Tokenizar]] cada string
2. Remover tokens sem utilidade
	1. Stopwords
	2. Pontuações
	3. Quebras de linha ('\\n')
	4. Tokens com tamanho inferior a 2 (Ex: 'H.')
	5. Tokens que sejam numéricos
3. Transformar a lista de tokens em uma string 

### Função

```py
def trata_coluna(coluna):
  coluna_tratada = []
  for item in coluna:
    tokens = nlp(item)
    tokens_sem_stopwords = [token.text for token in tokens 
                            if not(token.is_stop 
                                  or token.is_punct 
                                  or token.text in ('\n', ' \n')
                                  or len(token) <= 2
                                  or token.is_digit)]
    frase_completa = ' '.join(tokens_sem_stopwords)
    coluna_tratada.append(frase_completa)
  return coluna_tratada
```

### Exemplos

#### Sem processamento

```
A perfuração de poços para a extração de petróleo causa soterramento do leito\nsubmarino, 
contaminação química e aumento da turbidez da água. Além disso, o vazamento\ndesses 
hidrocarbonetos gera efeitos adversos, em especial no metabolismo de organismos\naquáticos, 
influenciando as cadeias alimentares de ecossistemas marinhos. Essas\nconsequências 
negativas advêm das propriedades do petróleo, uma mistura oleosa de\nsubstâncias orgânicas, 
de coloração escura e menos densa que a água.\nA consequência do vazamento dessa mistura na 
produtividade primária do ecossistema é o(a)
```

#### Com processamento

```
perfuração poços extração petróleo causa soterramento leito submarino contaminação química
aumento turbidez água vazamento desses hidrocarbonetos gera efeitos adversos especial
metabolismo organismos aquáticos influenciando cadeias alimentares ecossistemas marinhos 
consequências negativas advêm propriedades petróleo mistura oleosa substâncias orgânicas 
coloração escura densa água consequência vazamento mistura produtividade primária 
ecossistema o(a
```


## Representação Vetorial

### BOW - CountVectorizer()

```
vectorizer = CountVectorizer()

X = vectorizer.fit_transform(enunciados)
X_test = vectorizer.transform(df_test['ENUNCIADO_QUESTAO']) 
```