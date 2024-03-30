---
title: 'Configurações do SSH'
draft: false
---

**Dispositivos permitidos:**

- PC principal (Geralt)
- Notebook

Adicionar [[SSH| chaves]] públicas do pc principal:

``` sh
ssh-copy-id church@<server-ip>
```

## Ações Recomendadas

- Alterar a porta para uma diferente de 22. `Ex: 1231`
- Permitir apenas autenticação por chave SSH
- Desativar login como root

`sudo nvim /etc/ssh/sshd_config`

```sh
Port 1231
PasswordAuthentication no 
PubkeyAuthentication yes
PermitRootLogin no
```

