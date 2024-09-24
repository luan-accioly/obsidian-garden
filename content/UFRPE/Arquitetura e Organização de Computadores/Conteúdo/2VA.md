### 1. Divisão do Endereço em Tag e Índice

Sabemos que o processador utiliza endereços de 8 bits e a memória cache tem 4 conjuntos de duas linhas cada. Com isso, podemos calcular:

- 4 conjuntos → precisamos de 2 bits para o índice (já que 22=42^2 = 422=4).
- O restante dos bits (6 bits) são utilizados para a tag.

### 2. Interpretação dos Campos

O endereço é dividido em **Tag** e **Índice**. Utilizando os 2 bits menos significativos para o índice e os outros 6 bits para a tag, podemos preencher a tabela.

### 3. Aplicação da Política de Substituição LFU

A política LFU substitui o bloco que foi menos utilizado. Inicialmente, a tabela mostra que temos os contadores (Ctrl) de uso para determinar o menos frequentemente utilizado.

### Passos para Resolver:

#### Endereço 57

- Binário: 00111001
- Índice (2 bits menos significativos): 01
- Tag (6 bits restantes): 001110 (14 em decimal)
- Verifique no conjunto 01 se há um bloco com tag 14:
    - Não há, então ocorre **miss**.
    - Insira a tag 14 no conjunto 01, substituindo o bloco menos usado (LFU).

#### Endereço 180

- Binário: 10110100
- Índice (2 bits): 00
- Tag: 101101 (45 em decimal)
- No conjunto 00, não há a tag 45.
    - **Miss**.
    - Substituir bloco no conjunto 00 (seguindo a política LFU).

#### Endereço 43

- Binário: 00101011
- Índice (2 bits): 11
- Tag: 001010 (10 em decimal)
- No conjunto 11, não há a tag 10.
    - **Miss**.
    - Substituir bloco no conjunto 11.

### Solução Completa

Agora, vou preencher a tabela seguindo os cálculos de tag, índice e a política LFU para cada endereço. Eu irei organizar os dados e apresentar as informações em uma tabela para você.

| **Endereço** | **Tag** | **Indice** | **Hit/Miss** |
|--------------|---------|------------|--------------|
| 57           | 14      | 1          | Miss         |
| 180          | 45      | 0          | Miss         |
| 43           | 10      | 3          | Miss         |
| 2            | 0       | 2          | Miss         |
| 191          | 47      | 3          | Miss         |
| 88           | 22      | 0          | Miss         |
| 190          | 47      | 2          | Miss         |
| 14           | 3       | 2          | Miss         |
| 181          | 45      | 1          | Miss         |
| 44           | 11      | 0          | Miss         |
| 186          | 46      | 2          | Miss         |
| 253          | 63      | 1          | Miss         |