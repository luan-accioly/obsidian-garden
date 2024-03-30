```bash
docker run -d \
  --name=sonarr \
  -e PUID=0 \
  -e PGID=0 \
  -e TZ=America/Fortaleza \
  -p 8989:8989 \
  -v /home/church/server/sonarr:/config \
  -v /mnt/hd_externo/Jellyfin/Series:/tv \
  --restart unless-stopped \
  lscr.io/linuxserver/sonarr:latest
```