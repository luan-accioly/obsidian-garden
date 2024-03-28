---
draft: false
---


**DEPARTAMENTO DE COMPUTAÇÃO - DC**

Rua Dom Manoel de Medeiros, s/n – Dois Irmãos 52171-900   Recife-PE

www.dc.ufrpe.br


|**DISCIPLINA**: Inteligência Artificial                                              **CÓDIGO**: 14074|
| - |
|**DEPARTAMENTO**: Computação                   **ÁREA**: Fundamentos da Computação|
|**CURSO**: Licenciatura em Computação** |
|**PROFESSOR RESPONSÁVEL**:** Luciano Demétrio Santos Pacífico |
|**E-Mail**: <luciano.pacifico@ufrpe.br>|
|**DATA MÁXIMA DE ENTREGA DOS TEMAS: 06-02-2024**|
|**DATA MÁXIMA DE ENTREGA DO MATERIAL: 13-02-2024**|
|**DATA DAS APRESENTAÇÕES PRESENCIAIS: 15-02-2024**|

**Projeto I - 2ª Verificação de Aprendizagem**

**O projeto tem por objetivo avaliar o entendimento do aluno na solução de problemas como problemas de Aprendizagem de Máquina Supervisionada (Classificação), assim como oferecer ao aluno uma oportunidade da realização de uma revisão da literatura no tema do projeto pretendido.**

**REGRAS DO PROJETO I – 2ª VERIFICAÇÃO DE APRENDIZAGEM**

1. Os Projetos serão em equipes de até no máximo 2 (dois) alunos.

1. O Tema do Projeto I será único por equipe (não é permitido que duas ou mais equipes façam uso de um mesmo Tema de Projeto I).

1. Cada Tema de Projeto I escolhido deverá ser validado previamente, através de consulta ao Professor, devendo a equipe procurar o Professor da disciplina com antecedência para a validação de seu tema (nas aulas, aula de acompanhamento, ou via e-mail <luciano.pacifico@ufrpe.br>).

1. A data máxima de validação e envio dos temas é 06-02-2024, e o envio do material correspondente realizado unicamente através de atividade do Google Classroom criada para este objetivo. NÃO HAVERÁ TOLERÂNCIA A ATRASOS.

1. A Planilha dos Temas de Projeto I (compartilhada via Google Drive do Grupo da Disciplina no Classroom) indicará quais temas já foram selecionados por cada equipe e validados pelo Professor, evitando a escolha de temas repetidos.

1. Todo o material correspondente a este projeto deve ser submetido unicamente via atividade criada no grupo do Google Classroom da disciplina para este propósito.

1. Todas as regras previstas no Documento de Regras da Disciplina (vide Mural do Google Classroom) serão aplicadas ao Projeto I. 


**ESPECIFICAÇÃO DO PROJETO I**

Execute experimentos conforme especificado abaixo:

**TEMA DO PROJETO**

1. Cada equipe deve escolher uma **aplicação prática** (**base de dados real**) para os algoritmos de aprendizagem de máquina estudados.

1. O tema será **único por equipe**, e precisa ser **validado previamente através de consulta ao pelo professor,** e enviado via atividade até a **DATA MÁXIMA DE ENTREGA DO TEMA**.

1. Equipes que não cumprirem o requisito de **escolha do tema** e **apresentação da base de dados** a ser utilizada até a **data máxima para a entrega do tema** receberão **FALTA AO PROJETO I** (o que acarreta **FALTA À 2ª VERIFICAÇÃO DE APRENDIZAGEM**). 

1. A **Lista de Exercícios 03** conterá as regras de entrega dos temas validados.


**BASE DE DADOS**

1. As equipes devem escolher problemas e bases de dados reais, que não sejam consideradas benchmark.

1. Problemas e aplicações consideradas *benchmark*, como as bases de dados do **UCI Machine Learning**, **MNIST**, **CIFAR**, **problemas de otimização de funções**, assim como aplicações como ***Pathfinding***, **Problema do Caixeiro Viajante**, dentre **outros problemas benchmark**, **não serão consideradas válidas para os projetos**.

1. **Não é permitido** o uso do mesmo problema ou base de dados por equipes diferentes.

**PRÉ-PROCESSAMENTO**

1. **Ao menos um método de pré-processamento deve ser usado**, gerando uma nova base de dados.

1. O tipo de pré-processamento utilizado deve estar relacionado ao **contexto da aplicação**.

1. Remoção de vírgulas, espaços em branco, identificador dos padrões, etc. **não serão considerados pré-processamento válidos**.

**EXPERIMENTOS E ANÁLISE DOS RESULTADOS**

1. Os experimentos devem ser executados de acordo com o esquema abaixo para cada uma das bases de dados geradas (tanto a base de dados “brutos” quanto a base de dados pré-processadas):
   1. **Deve-se executar o 10-*fold cross-validation* 5 vezes para cada base de dados**, com cada uma das cinco execuções partindo de uma distribuição aleatória dos dados entre cada *fold*, resultando em um total de 50 experimentos por base de dados (10 x 5).
   1. Em cada um dos 50 experimentos, **os conjuntos de treinamento e teste devem ser mantido o mesmo para cada algoritmo a ser testado** (mesmo ponto de partida para cada modelo), de modo a obter-se uma avaliação justa dos resultados.
   1. Ao menos **três algoritmos** devem ser testados e comparados: 
      1. **Árvore de Decisão;**
      1. **Naïve Bayes;**
      1. **K-Vizinhos Mais Próximos (K-NN) -** variando-se **3 vezes o número do parâmetro *k*;**
      1. **Rede Neural Artificial treinada por *Backpropagation***. 
      1. **Outros Algoritmos de Aprendizagem Supervisionada (Classificadores) mediante validação prévia do Professor**.
1. Ao menos **duas métricas (índices) de avaliação** deverão ser empregadas na análise experimental, **além do tempo médio de execução de cada um dos algoritmos**. 
1. As métricas escolhidas devem ser justificadas pela **Revisão da Literatura**.

A **análise experimental** deve ser feita de forma **empírica** (baseado nas medidas obtidas) e **através de uma discussão dos resultados experimentais**.

**MATERIAL A SER ENTREGUE AO PROFESSOR**

A entrega do projeto deverá conter os itens especificados abaixo:

1. Os **códigos fonte comentados** desenvolvidos.
1. As **bases de dados originais e pré-processadas**.
1. O **slide da apresentação do projeto** (em .pdf).

**APRESENTAÇÃO DOS PROJETOS**

1. Os Projetos deverão ser apresentados em **sala de aula**, na data prevista para as apresentações (**15-02-2024**). 
1. As apresentações **terão duração entre 10 (dex) e 15 (quinze) minutos por equipe**.
1. <a name="_gjdgxs"></a>A ordem de apresentação será decidida no dia previsto para as mesmas por **meio de sorteio**, **devendo todas as equipes estarem presentes no início da aula**. 

**A Não Apresentação do Projeto, Ausência no Momento do Sorteio, e/ ou a Não Resposta às Perguntas Sobre o Projeto** será considerada **FALTA AO PROJETO I** (o que acarreta **FALTA À 2ª VERIFICAÇÃO DE APRENDIZAGEM**).

