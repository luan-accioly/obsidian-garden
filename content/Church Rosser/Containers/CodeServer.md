Repositório: [link](https://github.com/linuxserver/docker-code-server)

```bash
docker run -d \
  --name=code-server \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=America/Fortaleza \
  -p 8443:8443 \
  -v /path/to/appdata/config:/config \
  --restart unless-stopped \
  lscr.io/linuxserver/code-server:latest
```
