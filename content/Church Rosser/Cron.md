> Permite agendar tarefas a serem realizadas futuramente, podendo ser horas depois ou em outro dia

Instalar algum cron

```bash
yay -S cronie
```

Habilitar o serviço do cronie

```bash
sudo systemctl enable cronie.service
```

**Comandos:**

- `crontab -e` - Abre o editor de texto no arquivo do cron
- `crontab -l` - Lista todos os agendamentos
- `journalctl --since "20 minutes ago" | grep CROND` - Verifica os logs do cron

### Utilização no CR-I:

```bash
*/20 * * * * source ~/linux-scripts/church-rosser/newsletter-crawler.sh
0 0 * * * source ~/linux-scripts/church-rosser/obsidian-backup.sh
```

- A cada 20 minutos: executa o crawler da newsletter
- Todo dia às 00h: executa o backup do obsidian

### Possíveis problemas:

#### Falta de um editor padrão no shell

Adicionar ao .bashrc

```bash
export VISUAL=nvim
```
