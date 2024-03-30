- Baixar imagem 
```sh
docker pull jellyfin/jellyfin
```

- Criar diretórios de configuração e cache
```
~/server/jellyfin/config
~/server/jellyfin/cache
```

- Executar imagem:
```bash
  docker run -d \  
--name jellyfin \  
--user uid:gid \  
--net=host \  
--volume ~/server/jellyfin/config:/config \  
--volume ~/server/jellyfin/cache:/cache \ 
--mount type=bind,source=/mnt/hd_externo/filmes,target=/hd_externo \  
--restart=unless-stopped \  
jellyfin/jellyfin
```

```bash
docker run -d \
  --name=jellyfin \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Etc/UTC \
  -p 8096:8096 \
  -v ~/server/jellyfin/config:/config \
  -v ~/server/jellyfin/cache:/cache \ 
  -v /path/to/tvseries:/data/tvshows \
  -v /mnt/hd_externo/filmes:/data/hd_externo \
  --restart unless-stopped \
  lscr.io/linuxserver/jellyfin:latest
```

```bash
docker run -d --name jellyfin -p 8096:8096 -v ~/server/jellyfin/config:/config -v ~/server/jellyfin/cache:/cache --mount type=bind,source=/mnt/hd_externo/jellyfin,target=/hd_externo --restart=unless-stopped jellyfin/jellyfin

```