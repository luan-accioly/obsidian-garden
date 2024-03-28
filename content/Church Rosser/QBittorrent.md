```bash
docker run -d \
  --name=qbittorrent \
  -e PUID=0 \
  -e PGID=0 \
  -e TZ=America/Fortaleza \
  -e WEBUI_PORT=3344 \
  -p 3344:3344 \
  -p 6881:6881 \
  -p 6881:6881/udp \
  -v ~/server/qbittorrent/config:/config \
  -v ~/server/qbittorrent/monitoring-folder:/monitoring \
  -v /mnt/hd_externo:/downloads \
  --restart unless-stopped \
  lscr.io/linuxserver/qbittorrent:latest
```


## Downloads

Alternativas:
- Indexadores (direto pela interface)
- Sincronização entre pastas com [[Syncthing#Sincronização de arquivos .torrent | syncthing]]

## Monitoramento de .torrent

| Pasta monitoriada | Local de salvamento       |
| ----------------- | ------------------------- |
| monitoring/Animes | downloads/Jellyfin/Animes |
| monitoring/Filmes | downloads/Jellyfin/Filmes |
| monitorin/Series  | downloads/Jellyfin/Series |


![[Pasted image 20231125011714.png]]

## Possíveis problemas

### Usuário padrão não reconhecido

Arquivo de configuração:
`~/server/qbittorrent/config/qBittorrent/qBittorrent.conf`

- Desligar o container
- Adicionar no arquivo de configuração:
```bash
WebUI\Password_PBKDF2="@ByteArray(ARQ77eY1NUZaQsuDHbIMCA==:0WMRkYTUWVT9wVvdDtHAjU9b3b7uB8NR1Gur2hmQCvCDpm39Q+PsJRJPaCU51dEiz+dTzh8qbPsL8WkFljQYFQ==)"
```
- Ligar o container

#### Erro ao iniciar o download

- Provavelmente problema com permissão de escrita no disco
- Verificar permissões no disco:
	- `ls -ld <ponto_montagem>` - Exibe as permissões
	- `drwxr-xr-x` - root-church-others
- Se o disco for FAT32:
	- Iniciar o container com `PUID=0` e `PGID=0` para permissão root