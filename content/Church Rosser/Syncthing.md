## Docker
[hub.docker](https://hub.docker.com/r/linuxserver/syncthing)

```bash
docker run -d \
  --name=syncthing \
  -e PUID=0 \
  -e PGID=1000 \
  -e TZ=America/Fortaleza \
  -p 8384:8384 \
  -p 22000:22000/tcp \
  -p 22000:22000/udp \
  -p 21027:21027/udp \
  -v ~/server/syncthing:/config \
  -v ~/syncthing:/data1 \
  -v ~/server/qbittorrent/monitoring-folder:/data2 \
  --restart unless-stopped \
  lscr.io/linuxserver/syncthing:latest
```

| Parameter | Function             |
| --------- | -------------------- |
| 8384      | Application WebUI    |
| 22000/tcp | Listening port (TCP) |
| 22000/udp | Listening port (UDP) |
| 21027/udp | Protocol discover    |

## Systemd (Dispositivos comuns)

- Por via das dúvidas, melhor criar a pasta de configuração na home

```bash
mkdir ~/syncthing
```

- Instalar syncthing

```bash
yay -S syncthing
```
- Habilitar serviço

```bash
systemctl enable syncthing@<username>.service
```
- Iniciar serviço

```bash
systemctl start syncthing@<username>.service
```
- Acessar a [interface web](http://127.0.0.1:8384/)

---

## Pastas

### Sincronização de arquivos .torrent

> Pasta monitorada pelo QBitTorrent

**Localizações:**
Church Rosser - `~/server/qbittorrent/monitoring-folder`
PC principal - `~/sync-torrent`

**Estrutura:**
```
sync-torrent
|-- Filmes
| |-- exemplo_filme.torrent
|-- Series
|-- Animes
```

Assim que o QBitTorrent identificar um arquivo na pasta, ele adiciona a fila de downloads e instantaneamente apaga o arquivo. 
