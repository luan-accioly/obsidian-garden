*as a server*

----
## Informações:
- [[Hardware| Hardware]]
- [Bios Update](https://support.lenovo.com/br/pt/downloads/ds120436-flash-bios-update-thinkcentre-m910t-m910s-m910q-m910x-m710q-thinkstation-p320-tiny)

----

## Portas

- `8096` - Jellyfin
- `9000` - Portainer
- `8443` - VS Code Server
- `3344` - Qbittorrent
- `8384` - syncthing
- `8800` - ufrpe-email-service
- `6767` - bazarr
- `8989` - sonarr
- ` 66 ` - Gotify

----

## Configurações:

- pacman

`sudo nvim /etc/pacman.conf`

```sh
Color
ParallelDownloads = 10
ILoveCandy
```

- [[Garden/Church Rosser/SSH]]
- [[Containers]]
- [[Discos]]
- [[Cron]]
- [[TailScale | VPN]]
- [[{CR1} Logs | Logs]]
- [[Garden]]

---

## Comandos:

- `journalctl --since "60 minutes ago" | grep CROND` - retorna os logs do cron

## Aliases:

- `alias garden-sync="cd ~/obsidian-garden && npx quartz sync"` - sincroniza o [garden](http://garden.laccioly.me/)



