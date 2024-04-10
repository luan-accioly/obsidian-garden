Rotulando as questões do ENEM DIGITAL

### Descrição do desafio

Com base nas provas digitais do ENEM, originalmente disponibilizadas no site do [INEP](https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/enem).

O objetivo é classificar as perguntas com base se pertence ao bloco **Ciências Humanas e suas Tecnologias** representado na base como 1 , ou demais áreas do conhecimento representado como 0.

### Evaluation

Para essa primeira atividade será avaliada apenas a Acurácia do classificador.

## Submission File

Dica muito **IMPORTANTE**: No momento de exportar o dataframe utilizar de preferência .csv e lembre-se de passar a flag _index=false_ para que no momento da exportação do arquivo csv não seja criado um novo índice, criando assim uma nova label para a base.

```json
id,label
241,0
90,0
97,0
```

## Colunas do dataframe

- `ID_QUESTAO` - ID da questão
- `LABEL_QUESTAO` - O rótulo que deve ser previsto
- `ENUNCIADO_QUESTAO` - O texto do enunciado da questão da prova
- `ALTERNATIVA_A`- O texto da alternativa de A
- `ALTERNATIVA_B`- O texto da alternativa de B
- `ALTERNATIVA_C`- O texto da alternativa de C
- `ALTERNATIVA_D`- O texto da alternativa de D
- `ALTERNATIVA_E`- O texto da alternativa de E