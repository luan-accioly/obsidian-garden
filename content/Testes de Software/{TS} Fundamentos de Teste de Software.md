---
draft: false
---


#### Roteiro
1. Conceitos fundamentais
2. Princípios de teste de software
3. Tipos de teste
4. Níveis de teste
5. Processo de testes

## Conceitos fundamentais

**O que é qualidade de software?**
Não existe uma definição única.

Dimensões da qualidade:
![[Pasted image 20231202110256.png]]

**Qualidade interna e externa:**
- Funcionalidade:
	- Adequação
	- Acurácia
	- Interoperabilidade
	- Segurança de acesso
	- Conformidade
- Confiabilidade
	- Maturidade
	- Tolerância a falhas
	- Recuperabilidade
	- Conformidade
- Usabilidade
	- Inteligibilidade
	- Apreensabilidade
	- Operacionalidade
	- Atratividade
	- Conformidade
- Eficiência
	- Comportamento em relação ao tempo
	- Utilização de recursos
	- Conformidade
- Manutenibilidade
	- Analisabilidade
	- Modificabilidade
	- Estabilidade
	- Testabilidade
	- Conformidade

### Modelo de desenvolvimento cascata
![[Pasted image 20231202110838.png]]

### Modelo de desenvolvimento em V
![[Pasted image 20231202110943.png]]

### Garantir vs Controlar a qualidade

**Garantia da qualidade:**
- Processo para produzir produtos com a qualidade esperada
- Pode ser parte de um sistema de gerência da qualidade
- Paralelo com a saúde:
	- Comer bem
	- Se exercitar
	- Tomar vacina
**Controle da qualidade:**
- Verifica a qualidade dos produtos produzidos dentro do processo de QA
- Teste é parte importante para a aferição da qualidade
- Paralelo com a saúde:
	- Marcar consultas
	- Fazer exames
![[Pasted image 20231202111559.png]]

### O que é teste de software?
- Processo com atividades variadas (Executar testes)
- Baseado em princípios (Testar o quanto antes)
- Testes se aplicam em diferentes níveis (Unidade, sistema)
- Testes possuem diferentes tipos (Funcional, Desempenho)
### Objetivos do teste de software
- **Verificar** se todos os requisitos são cumpridos
- **Validar** se o objeto de teste (software, framework) atende as expectativas
- **Reduzir o risco** de falhas não detectadas no desenvolvimento cheguem na produção
- **Criar confiança** no objeto do teste. Exemplo: Requisitos de maior risco estão maduros. Falhas de baixo impacto/frequência são aceitáveis
- **Prevenir** defeitos. (Encontrar defeito no requisito antes que o projeto seja feito a partir do requisito errado)
- **Atender** leis/normas/padrões que definem parâmetros de qualidade
- **Encontrar defeitos e falhas** nos artefatos do software (requisitos, estórias de usuário, projeto, código, dados)

### Bug, defeito, falha, falta

> São sinônimos

- Podem existir em qualquer tipo de artefato (requisitos, estória, projeto, código, manual)
- São erros de concepção, como omissão, incoerência, incompletude, ambiguidade, imprecisão, erro de lógica
- Exemplos:
	- Requisito incoerente
	- Projeto inconsistente
	- Código sem tratamento de erro

**De acordo com o ISTQB:**
- Falha
	- Surge durante o processo de verificação (teste): algo diferente do que está escrito/especificado
	- Exemplos
		- Uma saída diferente da esperada
		- Erro inesperado

### Verificação vs Validação
![[Pasted image 20231202113434.png]]

## Princípios do teste de software

#### Testar não garante a ausência de defeitos
- Testar prova a existência e não ausência de defeitos
- Achar defeitos mais impactantes é mais significativo do que encontrar todos
- A busca não deve ser pela perfeição mas por diminuir os riscos de problemas

- Teste exaustivo é impossível
	- Mesmo com automação é impossível explorar todas as combinações
	- Estratégias são necessárias para selecionar subconjuntos de testes.
		- Considerar testes associais a historias de maior prioridade

> Na prática: cobertura < 100%

## Tipos de teste

![[Pasted image 20231202114748.png]]

### Testes funcionais (caixa preta)

- Testa as funções do sistema
- Verifica o comportamento
- Teste baseado em especificações: 
	- Requisitos de negócio
	- Requisitos funcionais
	- Historias de usuário
	- Casos de uso
- A completude dos testes funcionais pode ser medida pela cobertura das funcionalidades

**Exemplos:**

- Operação de saque, onde o valor do saldo exibido na tela é menor do que antes do saque
- Ao pressionar shift+f5, o programa entra no modo visualização em tela cheia
- Ao pressionar \[X], o programa exibe uma janela confirmando se o usuário deseja realmente sair

### Teste estrutural (caixa branca)

> Objetivam cobrir o maior percentual de partes (externas ou internas) do objeto de testes

**Exemplo de partes a serem cobertas:**
- Linhas/Métodos/classes do código fonte
- Componentes/camadas da arquitetura

![[Pasted image 20231202115645.png]]

### Teste não funcional

> Testa características não funcionais do software

#### Teste de desempenho

Mede o tempo de resposta do sistema em diferentes situações de uso

#### Teste de carga

Coloca grandes volumes de dados e verifica os parâmetros do desempenho quando perto dos limites (grande carga)

#### Teste de Estresse

Coloca uma carga excessiva no sistema e observa se não acontecem quebras

#### Teste de Manutenibilidade

Verifica se o sistema é fácil de configurar, corrigir e atualizar

### Testes orientados a mudanças

> Testes executados após uma mudança no sistema

#### Reteste (ou Teste de Confirmação)

Testa se um defeito foi consertado

#### Teste de Regressão 

Testa se uma mudança não introduz erros (não regride)

**Possível cenário:**
- Os testes T1, T2, .... passam
- O sistema foi modificado em partes que (não) tem relação direta com os testes acima (defeitos removidos e/ou funcionalidades adicionadas)

**Regressão e automação:**
- Regressão requer a a execução de maior quantidade de testes (testa mesmo features estáveis)
- Teste de regressão pode ser feito com grande frequência
- São fortes candidatos para serem automatizados

## Níveis de teste

**Nível 1** - Teste de componente (unidade)
**Nível 2** - Teste de integração
**Nível 3** - Teste de sistema
**Nível 4** - Teste de aceitação

### Teste de componente

![[Pasted image 20231204160755.png]]

### Teste de integração
![[Pasted image 20231204161037.png]]

### Teste de Sistema
![[Pasted image 20231204161837.png]]

> Ambiente de testes deve ser o mais próximo do sistema de produção

### Teste de aceitação
![[Pasted image 20231204161955.png]]

### Resumo
![[Pasted image 20231204162024.png]]

---
**Pirâmide dos testes (Mike Cohn)**
![[Pasted image 20231204163036.png]]


## TDD (Test-Driven Development)
- Testes automáticos guiam o desenvolvimento: são criados antes do componente
- Componente precisa ser criado e funcionar para que os testes passem
- Código será completamente verificado

![[Pasted image 20231204161002.png]]

## Processo de testes

### Considerações
> Não existe um processo universal de testes, existem um conjunto comum de atividades

**Estratégia dos testes discute:**
- **Quais** atividades serão implementadas
- **Quando** atividades vão acontecer

### Planejar os testes

**Define:**
- Escopo dos testes
- Objetivos dos testes
- Quais as técnicas de teste utilizadas
- Quem vai realizar as atividades
- Qual o ambiente para os testes
- Cronograma
- Critérios de aceitação

