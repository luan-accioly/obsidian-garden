> Gerador de sites estáticos que transforma arquivos markdown em sites funcionais 

## Começando

```bash
git clone git@github.com:LuanAccioly/obsidian-garden.git
cd obsidian-garden
npm i
```

### Removendo pasta content

A pasta `obsidian-garden/content` que virá do repositório será estática.

- Deletar a pasta content
```
rm -rf content
```

- Criar [[#Symlink]] para a pasta das notas

### Symlink

Como as notas são sincronizadas entre dispositivos com o [[Syncthing]] e editadas pelo Obsidian, podemos utilizar um link simbólico para a pasta com as notas a fim de evitar trabalho manual.

```sh
ln -s ~/syncthing/obsidian-notes/notes/UFRPE ~/obsidian-garden/content
```

