---
draft: true
---


[Repositório](https://github.com/LuanAccioly/crawler-newsletter)
## Utilizando:
- python
- selenium
- requests (lib padrão do python)

## TO-DO
- [x] Adicionar lista com links para as imagens em cada notícia, se houver
- [x] Pegar HTML invés do texto
- [x] Adicionar requisição enviando o corpo da notícia
- [x] Decidir entre [CRON](https://wiki.archlinux.org/title/cron) ou WHILE TRUE
	- Onde vai rodar?
		- [[Google Cloud Plataform]]
	- Existe algum sistema de hospedagem de notebooks python com possibilidade de instalação de dependências?
- [x] Criar um regex para substituir instâncias de `\n` no corpo da notícia por `<br/>`
- [x] Retornar no objeto o link para a notícia original
- [x] Retornar arquivos na noticia (pdf)

## Funcionamento:
1. Visita a página de notícias da UFRPE
2. Pega o título da primeira notícia disponível (`views-row-1`)
3. Compara o título com o título da última notícia guardada no arquivo `last_news.txt`
	-  Se for diferente:
		- Navega até a página da notícia e guarda o conteúdo do título e do corpo
		- Envia um objeto contendo as informações da notícia para a [API](email-service.md)
		- Reescreve o arquivo `last_news.txt` com o título da nova notícia
		- Printa na tela `Nova notícia disponível: <título da notícia>`
	- Se for igual:
		- Printa na tela: `Sem novas notícias`