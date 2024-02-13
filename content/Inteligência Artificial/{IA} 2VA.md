---
draft: false
---

## Classificação Estelar

**Área de aplicação:** Astronomia

**Alunos:**

- João Victor
- Luan Lucas Dias Accioly

**Algoritmos utilizados:**

- **Naive Bayes**
- **Random Forest**
- **Decision Tree**
- **KNN**

### Base de dados

[Link](https://www.kaggle.com/datasets/fedesoriano/stellar-classification-dataset-sdss17/)

>[!TIP] Sobre a base
> Os dados consistem em 100.000 observações do espaço obtidas pelo SDSS (Sloan Digital Sky Survey). Cada observação é descrita por 17 colunas de características e 1 coluna de classe que a identifica como uma estrela, galáxia ou quasar.

**Algumas colunas presentes no dataset:**

- `alfa` - Ângulo de ascensão reta
- `delta` - Ângulo de declinação
- `u` - Filtro ultravioleta no sistema fotométrico
- `g` - Filtro verde no sistema fotométrico
- `r` - Filtro vermelho no sistema fotométrico
- `i` - Filtro infravermelho próximo no sistema fotométrico
- `z` - Filtro infravermelho no sistema fotométrico
- `redshift` - valor do redshift com base no aumento do comprimento de onda

#### Pré-Processamento utilizado

**MinMaxScaler:** utilizada para dimensionar (ou normalizar) os recursos em um intervalo especifico, geralmente entre `0 e 1` ou `-1 e 1`

$$\text{Fórmula do MinMaxScaler:}$$

$$X_{\text{norm}} = \frac{X - X_{\text{min}}}{X_{\text{max}} - X_{\text{min}}}$$

Onde:

- $X_{\text{norm}}$ é o valor normalizado do recurso
- $X$ é o valor original do recurso
- $X_{\text{min}}$ é o valor mínimo do recurso
- $X_{\text{max}}$ é o valor máximo do recurso

```python
# Base sem processamento
brute_X = brute_df.drop(columns=['obj_ID',
                                 'field_ID',
                                 'spec_obj_ID',
                                 'fiber_ID',
                                 'plate',
                                 'run_ID',
                                 'rerun_ID',
                                 'MJD',
                                 'class']).to_numpy()

# Classes
y = brute_df['class'].to_numpy()

# Base com normalização de valores. -1 : 1
scaler = MinMaxScaler(feature_range=(-1, 1))
processed_X = scaler.fit_transform(brute_X)

```

### Resultados obtidos

#### Tabelas

##### Base bruta

**Tempo total: 38 minutos**

| Algoritmo      | Acurácia média | Precisão média | Recall médio | F1 médio | Tempo médio por seed | Tempo total |
|----------------|----------------|----------------|--------------|----------|----------------------|-------------|
| Random Forest  | 0.978703       | 0.978601       | 0.978703     | 0.978567 | 408.806              | 2044.028    |
| NaiveBayes     | 0.750222       | 0.794288       | 0.750222     | 0.694034 | 3.622                | 18.108      |
| Knn            | 0.816216       | 0.816692       | 0.816216     | 0.803001 | 14.518               | 72.591      |
| Decision Tree  | 0.964859       | 0.964953       | 0.964859     | 0.964896 | 23.052               | 115.260     |

##### Base processada

**Tempo total:  35 minutos**

| Algoritmo      | Acurácia média | Precisão média | Recall médio | F1 médio | Tempo médio por seed | Tempo total |
|----------------|----------------|----------------|--------------|----------|----------------------|-------------|
| Random Forest  | 0.977803       | 0.977693       | 0.977803     | 0.977667 | 376.884              | 1884.420    |
| NaiveBayes     | 0.762676       | 0.805553       | 0.762676     | 0.718344 | 3.363                | 16.817      |
| Knn            | 0.902928       | 0.906358       | 0.902928     | 0.901585 | 16.448               | 82.240      |
| Decision Tree  | 0.963394       | 0.963481       | 0.963394     | 0.963428 | 20.920               | 104.602     |

#### Gráficos

**Acurácia:**

![[Pasted image 20240212164610 1.png]]

**Precisão (média):**

![[Pasted image 20240212164829 1.png]]

**Recall (média):**

![[Pasted image 20240212164944 1.png]]

**F1 (média):**

![[Pasted image 20240212165050 1.png]]