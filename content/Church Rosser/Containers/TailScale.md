Instalar Tailscale no Arch:
```bash
pacman -S tailscale
```
Habilitar e iniciar serviço:
```bash
sudo systemctl enable --now tailscaled
```
Autenticar o browser:
```bash
sudo tailscale up
```