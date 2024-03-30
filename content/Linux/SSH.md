## Criando e adicionando chaves

Pra não virar baderna, vamos reunir todas as chaves na pasta `.ssh`

```bash
cd ~/.ssh
```

Sintaxe para criar uma chave

```bash
ssh-keygen -t rsa -C "seu-email" -f "nome-da-chave"
```

Adicionar ao SSH Agent

```bash
ssh-add -K ~/.ssh/<nome-da-chave>
```

Listar chaves adicionadas

```bash
ssh-add -l
```

## Como lidar com múltiplas chaves SSH em diferentes contas de GitHub

>[!MESSAGE] Importante:
>Estamos criando 'aliases' para cada conta do GitHub. Portanto, é necessário utilizar o mesmo 'alias' quando for importar um projeto novo, assim como atualizar links para os repositórios remotos já existentes na máquina.

1. Criar um arquivo `config` na pasta `.ssh`
2. Adicionar configurações individuais:

```
#squirtle-with-glasses account
Host github.com-squirtle-with-glasses
	 HostName github.com
	  User git
	  IdentityFile ~/.ssh/squirtle-with-glasses-key

#church-rosser account
Host github.com-church-rosser
	 HostName github.com
	 User git
	 IdentityFile ~/.ssh/church-rosser-key
```

- `alias 1`: squirtle-with-glasses
- `alias 2`: church-rosser

### Clonando um repositório

```
git clone git@github.com-{alias-criado}:{nome-usuario}/{nome-repo}.git
```

```
git clone git@github.com-squirtle-with-glasses:acciolyinho/obsidian-garden.git
```

>[!TIP] Ainda não testado:
>Analisar a possibilidade de criar um alias **apenas** para uma segunda conta, de forma que não seja necessário atualizar os links de repositórios remotos dos repositórios locais já clonados.