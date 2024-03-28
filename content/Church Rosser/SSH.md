**Dispositivos permitidos até então:**
- PC principal (Geralt)
- Notebook Lenovo

Adicionar chaves públicas do pc principal:
``` sh
ssh-copy-id church@192.168.1.24
```

- Alterar a porta para uma diferente de 22
- Permitir apenas autenticação por chave SSH
- Desativar login como root

`sudo nvim /etc/ssh/sshd_config`

```sh
Port 2222

PasswordAuthentication no 

PubkeyAuthentication yes

PermitRootLogin no
```

