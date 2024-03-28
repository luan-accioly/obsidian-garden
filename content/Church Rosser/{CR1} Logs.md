Problema que consiste no sistema gerando logs o tempo todo e acaba consumindo muita CPU

**Como resolver**

/boot/loader/entries/\*.conf
Adicionar `pci=noaer` na linha de `options`
```
# Created by: archinstall
# Created on: 2023-11-22_19-05-16
title   Arch Linux (linux)
linux   /vmlinuz-linux
initrd  /intel-ucode.img
initrd  /initramfs-linux.img
options root=PARTUUID=dca20568-2061-440a-93e5-d7bbd28041e5 zswap.enabled=0 rw rootfstype=ext4 pci=noaer
```