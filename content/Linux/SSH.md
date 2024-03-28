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