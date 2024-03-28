```bash
docker run -d \
  --name=bazarr \
  -e PUID=0 \
  -e PGID=0 \
  -e TZ=America/Fortaleza \
  -p 6767:6767 \
  -v /home/church/server/bazarr:/config \
  -v /mnt/hd_externo/Jellyfin/Filmes:/movies `#optional` \
  -v /mnt/hd_externo/Jellyfin/Series:/tv `#optional` \
  --restart unless-stopped \
  lscr.io/linuxserver/bazarr:latest
```