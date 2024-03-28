```bash
sudo reflector --save /etc/pacman.d/mirrorlist --threads 8 -f 40 -n 90 -l 50 -p https,http --completion-percent 95
```