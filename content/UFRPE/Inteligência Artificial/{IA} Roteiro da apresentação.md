---
draft: true
---


**Slide 01: Metodologia**

Vamos analisar a metodologia da equipe."

**Slide 02: Como os Autores Lidaram com o Problema?**

" Em um resumo, a jornada foi dividida em três passos fundamentais: 
- Montar a base de dados das imagens juntamente com as anotações das mesmas
- Treinar um Modelo de Detecção de Objetos
- Fazer a Transcrição das detecções para LaTeX."

**Slide 03: Criação do Conjunto de Dados**

"No primeiro passo, os autores criaram do zero uma base de dados única. Quatro anotadores colaboraram para desenvolver uma coleção de expressões matemáticas básicas manuscritas. Este conjunto incluiu expressões de adição e subtração no formato vertical, algo que não havia sido explorado na literatura até o momento. Além disso, os autores utilizaram o conjunto de dados MNIST, gerando imagens artificiais com essa nova estrutura."

**Slide 04: Detecção de Objetos**

"No segundo passo, os autores iniciaram a tarefa de identificar os símbolos matemáticos dentro das imagens. Para isso, foram avaliados vários algoritmos de detecção de objetos , incluindo YOLO v7, YOLO v8, YOLO-NAS e outros. O objetivo era localizar com precisão as caixas delimitadoras dos símbolos matemáticos e rotular cada elemento identificado."

**Slide 05: Método de Transcrição**

"No terceiro passo, os autores propuseram um método de transcrição. Esse estágio considerou as relações espaciais entre os símbolos identificados e adotou uma abordagem simplificada com base na estrutura posicional das caixas delimitadoras. A rotulagem da transcrição foi alcançada por meio de um mapeamento direto das classes para a expressão LATEX, proporcionando uma solução para transformar as caixas delimitadoras em expressões matemáticas."