---
draft: true
---


**Estrutura:**
	- Orientado a documentos
	- Onde é usado na indústria
	- Modelagem
		- Vantagens
		- Desvantagens
		- Como estruturar
		- Tipos de modelagem
	- Como utilizar
		- Atlas
		- Compass
		- 3T

[[{DBNC}{Rascunho} Slides| Slides]]

### Orientação a documentos
A principal diferença entre MongoDB e os principais sistemas tradicionais de bancos de dados relacionais conhecidos como RDBMS, é que, em vez de tabelas, linhas e colunas, a base para armazenamento no MongoDB é um documento.

Os documentos são normalmente modelados usando a formatação JSON e, em seguida, inseridos no banco de dados onde são convertidos em um formato binário para armazenamento.

Relacionado à base de documentos para armazenamento, está o fato de que os documentos MongoDB não têm esquema fixo. O principal benefício disso é a sobrecarga amplamente reduzida.

A reestruturação do banco de dados é fácil de ser aplicada e não causa os problemas massivos, travamentos de sites e violações de segurança observados em aplicativos que utilizam banco de dados relacionais.