## HDs:
> Não basta só conectar, é necessário montar o disco


## Verificar os discos conectados

`sudo fdisk -l` - Visualização mais detalhada sobre o disco e suas partições

```bash 
Disk /dev/sdb: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors
Disk model: External USB 3.0
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x211bf81d

Device     Boot Start        End    Sectors   Size Id Type
/dev/sdb1        2048 1953523119 1953521072 931.5G  c W95 FAT32 (LBA

```

ou

`lsblk` | Visualização simplificada em árvore

```bash
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda      8:0    0 465.8G  0 disk 
├─sda1   8:1    0   512M  0 part /boot
├─sda2   8:2    0    20G  0 part /
└─sda3   8:3    0 445.3G  0 part /home
sdb      8:16   0 931.5G  0 disk 
└─sdb1   8:17   0 931.5G  0 part 
sr0     11:0    1  1024M  0 rom  
zram0  254:0    0   3.8G  0 disk [SWAP]
```

## Montar o disco

- Criar o diretório para a montagem

```bash
mkdir /mnt/<nome para a montagem>
```

- Selecionar a **partição** responsável pelos dados (Ex: sdb1)
- Montar o disco:

```bash
sudo mount /dev/sdb1 /mnt/hd_externo 
```