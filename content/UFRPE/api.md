---
draft: true
---



- Vai iniciar como um clone do [[gateway]] 
	- Mantendo apenas as funções de envio de emails
- Vai estar na VM do Google, isolada de acessos externos
	- Abstrai a preocupação com vazamento das rotas

## TO-DO:
- [x] Rota para pegar apenas a contagem de inscritos
- [ ] Limite de usuários cadastrados
- [x] Rota para envio de emails
- [x] Serviço SMTP

### Deploy
- Configuração [VERCEL](https://vercel.com/luanaccioly)
- Integração com [MongoDB](https://vercel.com/integrations/mongodbatlas)

### Ferramentas:
- [[Email service]]
- 