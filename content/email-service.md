---
draft: true
---



- Vai iniciar como um clone do [[gateway]] 
	- Mantendo apenas as funções de envio de emails
- Vai estar no Church Rosser (homelab), isolada de acessos externos
	- Abstrai a preocupação com vazamento das rotas

## TO-DO:
- [x] Rota para pegar apenas a contagem de inscritos
- [ ] Limite de usuários cadastrados
- [x] Rota para envio de emails
- [x] Serviço SMTP

### Deploy
- Integração com [MongoDB](https://vercel.com/integrations/mongodbatlas)

### Ferramentas:
- [[SMTP Server]]

## Docker

### DockerFile

```Dockerfile
FROM node:18.16.0

WORKDIR /usr/src/app

COPY .env ./

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8800

CMD ["npm", "start"]
```

### Criando a imagem
- Na raiz do projeto, executar:
```bash
docker build -t ufrpe-email-service .
```

- Executar o container:
```bash
docker run -d --name=ufrpe-email-service -p 8800:8800 --restart unless-stopped ufrpe-email-service
```
