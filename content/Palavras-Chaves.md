---
draft: true
---


# Questão 1

- **Mark-scan**: LISP; 1º GC; Suspensão do programa;
  
  - Inicialmente, todas as células estão na freelist
  
  - O processo de usuário vai usando as células
  
  - A reescrita no grafo gera lixo na memória
  
  - Até o momento que a free-list fica vazia e é suspenso o processo do usuário
  
  - é feita a marcação das células em uso que podem ser acessadas pela raiz
  
  - é feita agora uma varredura, devolvendo as células de lixo para a freelist
  
  - retorna-se o processo do usuário

- **Reference-counting**: LISP; Gerenciamento de memória em passos intermediários; Não funciona com estruturas cíclicas (Dueire e alunos resolveram); Não suspende programa;
  
  - A função new chama uma nova célula da freelist
  
  - a operação copy, copia um ponteiro, exemplo copy(a.direita, B -> C)
    
    - Não altera a free list
    
    - é incrementado o contador da célula destino
  
  - delete: deleta um ponteiro
    
    - em seguida, o método delete é chamado para o filhos do ponteiro indicado, delete(sons_C).
    
    - se ao deletar um ponteiro o contador da célula for igual a 0, é chamado a operação free(), que retorna a célula para o topo da pilha da freelist 

---

- **Cópia Fenichel-Yochelson**: 
  
  - O heap é dividido em dois sub espaços de tamanho igual
  
  - Heap Point aponta para o endereço inicial do heap em uso e é movido para o próximo conforme o endereço atual vai se ocupando.
  
  - Quando o semi espaço fica esgotado, copia-se o grafo em uso para o outro semi espaço, deixando o lixo para trás.
  
  - Quando o heap point chega ao fim da heap em uso, o processo de usuário é suspenso e se inicia a cópia.
  
  - Começa a cópia com a primeira célula apontada pela raiz
  
  - Cada célula armazenada contém os ponteiros originais.
  
  - A célula original vai armazenar uma indireção para o novo endereço.
  
  - Faz-se a marcação da célula copiada e o HP avança para a posição seguinte no heap 2.
  
  - Para cada ponteiro atualizado, é testado se ele aponta para uma célula nova ou velha
  
  - Finalizando todas as cópias, o programa sai de suspensão e volta a executar.
  
  - As células deixadas na heap anterior são descartadas 
  
  Características:
  
  - A cópia é recursiva
  
  - Há suspensão do processo de usuário
  
  - Eficiente em máquinas com memória virtual
  
  - Não necessita de espaço extra na célula para marcação
  
  - Complexidade computacional proporcional ao grafo em uso
  
  - Degrada com a ocupância
  
  - Compacta os dados sem custo extra
  
  - Motion Sickness
  
  ---

- **Cópia Cheney**: Memória Virtual; Não recursivo; 2 semi-espaços no HEAP; Breadth-first; Suspende o programa; Deixa o lixo;
  
  - A reescrita do grafo gera lixo
  
  - O Heap Pointer se move 
  
  - Quando o primeiro heap fica cheio, é interrompido o processo do usuário e se inicia o processo de cópia
  
  - A célula é movida mantendo os ponteiros originais
  
  - O Copypointer vai ser utilizado para indicar qual a próxima célula a ser copiada.
  
  - É feita a cópia da célula indicada pelo CP, preservando os ponteiros originais
  
  - É feito o passo a passo até que todo grafo em uso tenha sido copiado.
  
  - As células deixadas na heap anterior são descaratadas.

# Questão 2 e 3

- **Fale sobre o trabalho de Zuze**: Máquinas Z1 a Z4; Z3 como uma das principais; Z3 possuía uma das primeiras linguagens de programação (passou despercebida).
- **Fale sobre o Colossus e sua importância**: Quebrar criptografia nazista 2ª GM; Tommy Flowers + equipe; Considerado primeiro computador; Usado por Alan Turing;
- **De onde vem o termo bug**: Grace Hopper; Mark II; Inseto que impediu a execução de um programa;
- **Maunchey-Eckett e sua importância na computação**: 1º computador comercial (UNIVAC); ENIAC como 1º computador eletrônico;
- **Qual a contribuição de John Von Neumann à computação**: arquitetura (CPU: ALU e Controle, Memória, Entrada e Saída); Trabalhou no ENIAC e EDIVAC; Noção de programas armazenados;
- **O que foi revolucionário e como foi criada a linguagem COBOL**: Portabilidade como revolucionário; Linguagem Orientada a Negócios; Marcou separação entre hardware e software; Motivação na quebra de máquina relacionada com folha de pagamento (EUA);
- **Fale sobre a importância da linguagem FORTRAN**: Alto nível; Eficiência em tempo de execução e compilação;
- **A linguagem Pascal e sua importância**: Propósito didático; Compilador de passo único; Linguagem de propósito geral; Eficiente;
- **RISC: quais os princípios e importância**: Conjunto reduzido de instruções; Maior eficiência para as instruções; Gerou aumento de registradores e cache (espaço sobrando no silício);
- **Explique a importância e pioneirismo da linguagem C**: Compiladores acessíveis; RISC; Linguagem de SO; Bootstrap, compilador usa a própria linguagem; PCC (Portable C Compiler); Conjunto de instrução básico (1/4) já seguira RISC;
- **Detalhe o que foi revolucionário na linguagem ALGOL**: Notação matemática; Subrotinas recursivas; Alocação dinâmica de memória; Programação estruturada; Variáveis locais; Arrays dinâmicas;
- **Qual a importância e contribuições de John Backus para a computação**: BNF para descrição de gramáticas; Trabalhou no FORTRAN; Programação através de funções/procedimentos;
- **Linguagem orientadas à objetos: paradigma ou não**: Sim; Definição de paradigma (estilo de programação e classificação de LPs);
- **Explique a “revolução JAVA”**: Modelo de computação distribuído; Programas como cidadãos de primeira classe (receber programas através da rede); Portabilidade; JVM;
- **Listas e seu impacto nas linguagens de programação**: Variáveis com tempo de vida maior que sub-rotinas; Sub-rotinas produzem side-effects; Essenciais para resolução de muitos problemas (ex Torre de Hanoi); Dinamicidade no tamanho; Geração de lixo na memória;
- **Que são linguagens de “implementação de sistemas”**: Voltadas para implementação de SO; C como exemplo; Dão alto controle da máquina ao programador;
- **O que significa o termo boot, explique por que é usado em computação**: Processo que realiza sozinho sem interferência externa; Bootstrapping; Booting (ligar computador, softwares se carregam sem intervenção do usuário);
- **Como a escolha de uma linguagem pode trazer portabilidade de software**: Linguagens são implementadas de forma distintas (compilação, interpretação, etc); Para utilizar uma linguagem, é necessário que exista suporte à máquina (SO, Arquitetura, etc); 
- **Como funciona um profiler**: Análise de um programa; Permite compreender o código; Profilers baseados em eventos; Profilers estatísticos (sampling: suspender programa e analisar sua pilha, heap, etc); Profilers de instrumentação (adicionar código externo durante compilação que permite a análise mais precisa, degradando a performance do programa); Métricas: uso de memória, invocação à funções, outros;
- **Como funciona um debugger**: Interpretador para debugar programas; Execução do programa alvo em condições controladas; Breakpoints;
- **A linguagem C é dita RISC. Você concorda com isso?**: Sim; Bootstrapping; PCC; 1/4 de C é usado para implementar os outros 3/4;
- **Quem foi Grace Hopper e qual a sua importância na computação**:  Criadora do termo "Bug"; Trabalhou em diversas máquinas (UNIVAC, MARK I, MARK II); Defensora de linguagens de alto nível; Influenciou o COBOL; Organizou o CODASYS que buscou criar uma linguagem independente de Hardware;
- **Subrotinas: como surgiram e sua importância**: Ada Lovelace como idealizadora; Conjunto reutilizável de código/instruções; EDSAC como primeira máquina com subrotinas; A forma de visualização de memória (CODE, STATIC, STACK: registros de ativação, HEAP) é diretamente ligada com esse conceito;
- **Como você deve escolher uma linguagem para o desenvolvimento de um projeto?**: Entender os requisitos do projeto; Necessidade de portabilidade; Necessidade de eficiência; Compreender onde será utilizado (portabilidade, compatibilidade); Linguagens como ferramentas;
- **Linguagens funcionais: marcos, importância e contribuições**: Lambda Cálculo; Funções de alta ordem; Transparência referencial; Computabilidade Efetiva; Lazy evaluation; Avaliação estrita; Backus defendeu tais linguagens; Haskell;
- **Linguagens lógicas e sua relevância**: Lógica formal; Métodos formais; Prova de corretude; Prolog;
- **O que foi e como foi resolvido o "bug do milênio"**: Questão do armazenamento dos anos; Poucos bits para salvar recursos; Ansiedade do que a transição dos anos geraria (crashes, etc); Diversas soluções; Aumentar quantidade de bits para armazenamento da data; Adição de patches para adiar o problema; Não ocorreu: programadores conseguiram evitar usando diferentes soluções;
- **Por que até os anos 1980 os compiladores eram comprados e hoje são grátis**: C; PCC; RISC; Bootstrapping; Basta usar C;
- **Explique a importância da linguagem BASIC na computação**: Didática; Alto Nível; Interativa; Especialistas podiam adicionais mais funcionalidades; Mensagens de erros claras; Proteção do SO do usuário; Time-sharing;
- **Fale sobre o pioneirismo da linguagem LISP**: Garbage Collection; Listas como tipo primitivo; LP funcional; Estrita e Impura; Avaliador para lambda-expressões;
- **Passos de compilação: o que são, vantagens e desvantagens de um ou mais**: Gap semântico; Passos produzem saídas visivéis aos usuários; Mais passos = mais fácil manter/alterar; Menos passos = maior eficiência (tempo e espaço de compilação); Front-end (Análise Léxica, Sintática, Semântica, Cód. Intermediário) como Linguagen; Back-end (Otimização C. Intermediário, Geração/Otimização Código Objeto) como Máquina Física;
- **Compiladores, interpretadores, emuladores, cross-compilers: o que são e para que servem**: Interpretador simples de implementar, execução passo a passo, pouca margem para otimização; Compilador mais complexo, otimização obrigatória, programa visto como um todo; Emulador executa um programa simulando como seria em uma outra plataforma usado quando plataforma destino não disponível, pequena ou não possui ambiente de desenvolvimento próprio (profilers, debuggers); Cross-compiler é um compilador que gera código para ser usado em outra plataforma (casos de uso similares aos de emulador); Debugger é um interpretador;
- **Detalhe como você deve fazer para desenvolver um programa que deve tem bom desempenho em tempo-de-execução**: Linguagem Compilada; Uso de Flags (otimização de código intermediário); Escolha correta dos algoritmos e estruturas de dados; Uso de Profiler;

# Questão 4

- **Quais as vantagens do uso de uma ferramenta como o LEX?**: Portabilidade; Programação alto-nível; Geração de autômatos mínimos; Uso de ER;
- **Como você construiria um reconhecedor de senhas tal que a senha**: ER;
- **Fórmula de Thompson**: Transição Vazia; Separação das partes; 
- **Quais as vantagens e desvantagens da separação entre análise léxica e sintática**: Simplicidade como vantagem; Eficiência como vantagem; Mais passos de compilação como desvantagem; Explicar cada um (contexto);
- **Fale sobre as vantagens e desvantagens de parsers preditivos**: Top-down; Não requer backtracking (vantagem); Simples de construir (vantagem); Necessita de modificação na gramática para tratar ambiguidade (desvantagem); Recursividade como desvantagem;
- **Parsers top-down x bottom-up vantagens e desvantagens**: Definição de ambos; Bottom-up mais "poderoso" (menos restrições nas gramáticas); Bottom-up mais complexo de manter; YACC e Bison podem gerar parsers bottom-up para sub-classes de linguagens LR;
- **Parsers LR: tipos e poder computacional**: Bottom-up; SLR (Simple LR) fácil de implementar, menos poderoso; LR Canônico difícil de implementar, mais poderoso; LALR (Look-ahead) meio termo;
- **Em que se baseia, poder de reconhecimento, vantagens e desvantagens de uma ferramenta como o YACC**: Gerador de parser LALR; Menos poderoso que LR canônico;  Mais poderoso que SLR; Usa o LEX; Portável; Resolve conflitos através de regras;
