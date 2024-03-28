---
{
 draft: false,
 links: ["[[{IA} 2VA]]"]
}
---

<p align="center">
	<img src="./ufrpe-logo.png" width="100px" />
</p>

## Introdução

### Contexto

A observação e estudo dos corpos celestes representam uma tradição que remonta aos tempos antigos, onde culturas antigas rastreavam os movimentos das estrelas para navegação marítima, predição de eventos astronômicos e práticas religiosas. Ao longo dos séculos, essa prática evoluiu significativamente, impulsionada pelo avanço da tecnologia e pelo desenvolvimento de instrumentos cada vez mais sofisticados, desde telescópios terrestres até satélites espaciais. Hoje, com o advento da era da inteligência artificial e do aprendizado de máquina, surge uma nova oportunidade para a classificação e análise automatizadas desses corpos celestes, promovendo uma compreensão aprofundada do cosmos e impulsionando descobertas científicas significativas.

### Problema

Apesar dos avanços na observação e classificação de corpos celestes, ainda existem desafios significativos a serem superados. Um desses desafios é a necessidade de lidar com grandes volumes de dados astronômicos gerados por telescópios espaciais e terrestres modernos. A classificação manual desses dados é demorada e sujeira a erros humanos, destacando a necessidade de métodos automatizados e eficazes de classificação estelar.

### Justificativa

A utilização de técnicas de Aprendizado de Máquina (ML) na classificação estelar apresenta potencial para aprimorar a precisão e eficiência dessa tarefa, proporcionando insights valiosos sobre a natureza e a evolução das estrelas, galáxias e quasares. O ML pode ajudar a identificar padrões complexos nos dados astronômicos que podem não ser facilmente discerníveis por métodos tradicionais de classificação. Além disso, a automação da classificação estelar por meio do ML pode acelerar significativamente o processo de análise de grandes conjuntos de dados, permitindo avanços mais rápidos na compreensão do universo.

### Questão de pesquisa

Diante desse contexto, a questão de pesquisa deste estudo é: como as técnicas de Aprendizado de Máquina podem ser aplicadas de forma eficaz na classificação estelar para melhorar a precisão e eficiência da análise astronômica?

### Objetivos gerais e objetivos específicos

#### Objetivo geral:

Investigar a eficácia de diferentes algoritmos de ML na classificação estelar

#### Objetivos específicos:

- Realizar o levantamento e a seleção de bases de dados relevantes e adequadas para o escopo da pesquisa.
- Aplicar métodos de Aprendizado de Máquina para classificação automática de corpos celestes em grandes conjuntos de dados astronômicos.
- Comparar diferentes algoritmos de Aprendizado de Máquina para identificar o mais eficaz na classificação de astros.
- Contribuir para a literatura astronômica fornecendo insights sobre técnicas eficazes de classificação estelar.

---

## Revisão da Literatura

### Conceitos básicos usados na pesquisa

#### Aprendizado de Máquina (ML):

É um campo da ciência da computação e inteligência artificial que envolve o desenvolvimento de algoritmos e técnicas que permitem aos computadores aprender a partir de dados e realizar tarefas específicas sem serem explicitamente programados para elas. O objetivo é capacitar os sistemas a identificar padrões nos dados e fazer previsões ou tomar decisões com base nesses padrões. Existem diferentes tipos de aprendizado de máquina, incluindo supervisionado, não supervisionado e por reforço, cada um com suas próprias abordagens e aplicações. As técnicas de aprendizado de máquina são amplamente utilizadas em uma variedade de campos, incluindo reconhecimento de padrões, processamento de linguagem natural, visão computacional, medicina, finanças e muitos outros.

#### Quasar

Um quasar é uma fonte astronômica extremamente luminosa e distante, alimentada por um buraco negro supermassivo no centro de uma galáxia ativa. Estes objetos emitem uma quantidade imensa de energia, principalmente na forma de radiação eletromagnética, incluindo luz visível, ultravioleta e raios-X. O termo "quasar" vem de "quasi-stellar radio source", pois muitos quasares foram inicialmente identificados como fontes de rádio com características semelhantes às estrelas. Os quasares são importantes para o estudo da cosmologia, pois nos permitem investigar as condições do universo em tempos muito distantes, quando esses objetos eram mais comuns. Eles também fornecem informações valiosas sobre a formação e evolução das galáxias hospedeiras e dos buracos negros supermassivos que residem em seus centros.

#### Galáxia

Uma galáxia é um vasto sistema gravitacionalmente ligado, composto por estrelas, gás interestelar, poeira cósmica, matéria escura e outros componentes astronômicos. Esses sistemas podem variar enormemente em tamanho, forma e composição. Existem diferentes tipos de galáxias, incluindo espirais, elípticas, irregulares e galáxias em interação. As galáxias são os principais componentes do universo visível e são classificadas com base em sua morfologia, conteúdo estelar e dinâmica. Elas são os locais onde ocorrem a formação estelar e a evolução de sistemas estelares, bem como eventos cósmicos significativos, como fusões de galáxias e explosões de supernovas. Estudar galáxias é fundamental para entender a estrutura e a evolução do universo em larga escala.

#### Estrela

Uma estrela é uma esfera de plasma altamente luminosa e autossustentável, mantida pela fusão nuclear em seu núcleo. As estrelas são os constituintes fundamentais do universo, responsáveis por gerar e sustentar a luz e o calor que tornam a vida possível. Elas variam em tamanho, massa, temperatura e composição química. A energia é produzida no núcleo estelar pela fusão de átomos de hidrogênio em hélio, liberando enormes quantidades de energia na forma de radiação eletromagnética. Ao longo de suas vidas, as estrelas atravessam diferentes estágios evolutivos, desde a formação até a morte, eventualmente se transformando em anãs brancas, estrelas de nêutrons ou buracos negros, dependendo de sua massa inicial.

### Trabalhos relacionados

O artigo ([[#The miniJPAS survey star-galaxy classification using machine learning | BAQUI et al., 2021]]) discute a classificação de fontes miniJPAS em objetos estendidos (galáxias) e pontuais (por exemplo, estrelas), uma etapa necessária para as análises científicas subsequentes. O estudo visa desenvolver um classificador de aprendizado de máquina (ML) complementar às ferramentas tradicionais baseadas em modelagem explícita. Para isso, os autores realizaram a análise do conjunto de dados miniJPAS.
Para treinar e testar os classificadores ML, os autores cruzaram o conjunto de dados miniJPAS com dados do SDSS e HSC-SSP, cuja classificação é confiável dentro dos intervalos $15 \leq r \leq 20$ e $18.5 \leq r \leq 23.5$, respectivamente. Seis algoritmos de ML foram testados nos dois catálogos cruzados: K-vizinhos mais próximos, árvores de decisão, floresta aleatória (RF), redes neurais artificiais, árvores extremamente aleatórias (ERT) e um classificador de conjunto híbrido. Os autores observam que, quando informações morfológicas são utilizadas, a largura total na metade máxima é a característica mais importante.
Os melhores classificadores foram utilizados para produzir um catálogo de valor agregado, destacando a eficácia do uso de ML na classificação de corpos celestes em grandes conjuntos de dados astronômicos.

O artigo ([[#Identifying galaxies, quasars, and stars with machine learning A new catalogue of classifications for 111 million SDSS sources without spectra | CLARKE et al., 2020]]) apresenta um método inovador para a classificação de fontes astronômicas utilizando aprendizado de máquina. Utilizando 3.1 milhões de fontes rotuladas espectroscopicamente do Sloan Digital Sky Survey (SDSS), os autores treinaram um classificador de floresta aleatória otimizado usando fotometria do SDSS e do Widefield Infrared Survey Explorer (WISE). Este modelo de aprendizado de máquina foi então aplicado a 111 milhões de fontes não rotuladas previamente do catálogo fotométrico do SDSS que não tinham observações espectroscópicas existentes.
O novo catálogo resultante contém 50.4 milhões de galáxias, 2.1 milhões de quasares e 58.8 milhões de estrelas. Os autores fornecem probabilidades de classificação individuais para cada fonte, com 6.7 milhões de galáxias (13\%), 0.33 milhões de quasares (15\%) e 41.3 milhões de estrelas (70\%) tendo probabilidades de classificação superiores a 0.99; e 35.1 milhões de galáxias (70\%), 0.72 milhões de quasares (34\%) e 54.7 milhões de estrelas (93\%) tendo probabilidades de classificação superiores a 0.9.
Os autores também examinaram o efeito do desequilíbrio de classes em seu modelo de aprendizado de máquina e discutiram as implicações da transferência de aprendizado para populações de fontes em magnitudes mais fracas do que o conjunto de treinamento.
Para visualizar a separação de galáxias, quasares e estrelas em um espaço bidimensional, os autores empregaram uma técnica de redução de dimensão não linear, a Aproximação e Projeção Uniforme de Manifold (UMAP), em esquemas não supervisionados, semi-supervisionados e totalmente supervisionados. Quando aplicado a 111 milhões de fontes sem espectros, o algoritmo UMAP concorda fortemente com os rótulos de classe aplicados pelo modelo de floresta aleatória.

O artigo ([[#Galaxy classification A machine learning analysis of GAMA catalogue data | NOLTE et al., 2019]]) apresenta uma análise da utilização de Aprendizado de Máquina em 5 catálogos de galáxias do Galaxy and Mass Assembly (GAMA): utilizando características morfológicas dos catálogos SersicCatVIKING e SersicCatUKIDSS, características espectroscópicas do catálogo GaussFitSimple, parâmetros físicos para galáxias do MagPhys e medições fotométricas do Lambdar

#### Bases utilizadas

Abaixo uma descrição de algumas das bases utilizadas nos trabalhos relacionados. Todavia, cabe ressaltar que existem outras bases de dados astronômicos disponíveis. Estas foram selecionadas pois são as mais comumente utilizadas.

##### SDSS - Sloan Digital Sky Survey

A base de dados SDSS (Sloan Digital Sky Survey) é um levantamento de dados astronômicos projetado para mapear o universo e fornecer dados sobre bilhões de objetos celestes. Lançado em 2000, o SDSS utiliza um telescópio óptico no Observatório Apache Point, nos EUA, para capturar imagens digitais do céu em várias faixas de comprimento de onda. Essas observações são organizadas em diferentes versões de lançamento, contendo informações detalhadas, como coordenadas celestes precisas, medidas de brilho em várias bandas de cores e espectros de objetos selecionados.

##### MiniJPAS

O MiniJPAS é um projeto de pesquisa que observou aproximadamente 1 grau² do campo AEGIS com 56 filtros de banda estreita e 4 filtros de banda larga ugri. O catálogo primário do miniJPAS contém aproximadamente 64.000 objetos na banda de detecção r (magAB ≤ 24), com fotometria forçada em todos os outros filtros.

##### Hyper Suprime-Cam Subaru Strategic Program (HSC-SSP)

A base HSC-SSP é um programa de pesquisa astronômica que utiliza o telescópio Subaru para realizar um levantamento de imagem em várias bandas (grizy mais 4 filtros estreitos) em três camadas diferentes (Wide, Deep e Ultradeep). Ao combinar dados das três camadas, o programa visa abordar problemas fundamentais da cosmologia e astrofísica modernas, incluindo lentes gravitacionais fracas, evolução de galáxias, supernovas e matéria escura. O levantamento foi projetado para controlar erros sistemáticos e está programado para 300 noites de observação ao longo de 5-6 anos, tendo iniciado em março de 2014. Disponível em https://hsc.mtk.nao.ac.jp/ssp/

##### Widefield Infrared Survey Explorer (WISE)

A Wide-field Infrared Survey Explorer (WISE) é uma missão espacial da NASA que opera um telescópio espacial infravermelho, projetado para mapear todo o céu em várias bandas de infravermelho. Lançado em 2009, o WISE tem como objetivo detectar objetos celestes, incluindo estrelas, galáxias e asteroides, em diferentes faixas espectrais de infravermelho. Disponível em https://www.jpl.nasa.gov/missions/wide-field-infrared-survey-explorer-wise

##### Galaxy and Mass Assembly (GAMA)

O Galaxy and Mass Assembly (GAMA) é um projeto de pesquisa que utiliza instalações terrestres e espaciais para estudar cosmologia e a formação e evolução de galáxias. Seu principal componente é o levantamento espectroscópico GAMA, que mapeia cerca de 300.000 galáxias em uma área de aproximadamente 286 deg². O objetivo é testar teorias de formação de estrutura, medir a eficiência da formação estelar em grupos de galáxias e entender os mecanismos de acumulação do conteúdo estelar. O GAMA visa fornecer um conjunto de dados de grande valor para a comunidade científica, com uma abordagem multidisciplinar que abrange diferentes aspectos da evolução galáctica em escalas diversas. Disponível em https://www.gama-survey.org/

---

### Referências

#### The miniJPAS survey: star-galaxy classification using machine learning

BAQUI, P. O. et al. The miniJPAS survey: star-galaxy classification using machine learning. EDP Sciences, 2021. A87 p. Disponível em: <http://dx.doi.org/10.1051/0004-6361/202038986>.

#### Identifying galaxies, quasars, and stars with machine learning: A new catalogue of classifications for 111 million SDSS sources without spectra

CLARKE, A. O. et al. Identifying galaxies, quasars, and stars with machine learning: A new catalogue of classifications for 111 million SDSS sources without spectra. EDP Sciences, 2020. A84 p. Disponível em: <http://dx.doi.org/10.1051/0004-6361/201936770>.

#### Galaxy classification: A machine learning analysis of GAMA catalogue data

NOLTE, A. et al. Galaxy classification: A machine learning analysis of GAMA catalogue data. Elsevier BV, 2019. 172–190 p. Disponível em: <http://dx.doi.org/10.1016/j.neucom.2018.12.076>.