> Responsável por identificar e categorizar os elementos individuais ([[Processamento de Linguagem Natural#Visão geral de PLN | Tokens]]) presentes no texto, como palavras-chave, identificadores, números, operadores e símbolos.


## Termos

- **Padrão:** é a forma que os lexemas de uma cadeia de caracteres pode assumir.
	- No caso de palavras reservadas, é a sequência de caracteres que formam a palavra reservada.
	- No caso de identificadores, são os caracteres que formam os nomes das variáveis e funções
- **Lexema:** é uma sequência de caracteres reconhecidos por um padrão
- **Token:** é um par constituído de um nome e um valor de atributo. 
	- O nome de um token é um símbolo que representa a unidade léxica.
		- Ex: palavras reservadas; identificadores; números

## Exemplo

| **Token**          | **Padrão**                          | **Lexema**     | **Descrição**      |
| ------------------ | ----------------------------------- | -------------- | ------------------ |
| `<const, >`        | Sequência de palavras c, o, n, s, t | const          | Palavra reservada  |
| `<numero, 18>`     | Dígitos numéricos                   | 0.6, 18, 0.009 | Constante numérica |
| `<literal, "Olá">` | Caracteres entre ""                 | "Olá, mundo    | Constante literal  |

### Exemplo 1

`printf("Total = %d\n", score)`

onde: 

- `printf` e `score` são lexemas que casam com o padrão `identificador`.
- `Total = %d\n` é um lexema que casa com o padrão literal
- `()` lexemas que auxiliam a identificação de uma funçào