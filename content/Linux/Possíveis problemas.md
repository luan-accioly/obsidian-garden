## Keys desatualizadas

**Se parece com isso:**

```
error: archlinux-keyring: signature from "Christian Hesse <eworm@archlinux.org>" is unknown trust
:: File /var/cache/pacman/pkg/archlinux-keyring-20220727-1-any.pkg.tar.zst is corrupted (invalid or corrupted package (PGP signature)).
Do you want to delete it? [Y/n] 
error: failed to commit transaction (invalid or corrupted package (PGP signature))
Errors occurred, no packages were upgraded.
```

Costuma resolver com:

```bash
pacman -Sy archlinux-keyring
```

---

## Gnome Extensions não funciona

Entrou no site das extensões e apareceu um alerta em vermelho dizendo:

>[!ERROR]
> Apesar da extensão de integração do GNOME Shell estar em execução, o conector nativo de máquina não foi detectado. Veja a documentação para instruções sobre instalação do conector.

Basta instalar o gnome-browser-connector

```sh
yay -S gnome-browser-connector
```