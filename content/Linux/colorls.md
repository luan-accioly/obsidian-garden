---
draft: false
---


> [!WARNING] Possível problema
> Por algum motivo (mesmo configurando no `.zshrc`), o comando pode não ser encontrado.  
> Neste caso, adicionei o caminho inteiro para o executável como um alias no `.zshrc`:
> ```
> alias ls='/home/<user>/.local/share/gem/ruby/3.0.0/gems/colorls-1.4.6/exe/colorls --gs --sd'
> ```

[Repositório](https://github.com/athityakumar/colorls)

## Instalação

```
yay -S ruby
```

```
gem install colorls
```

## Customização

> Particularmente, acho alguns ícones e cores definidos por padrão um pouco sem graça e acabam não encaixando com a fonte semibold que utilizo no terminal.


```
~/.config/colorls/dark_colors.yaml 
```

```yaml
# Main Colors
unrecognized_file: white
recognized_file: yellow
executable_file: '#85DC85'
dir: '#74B2FF'
dead_link: red
link: cyan

# special files
socket: green
blockdev: green
chardev: green

# Access Modes
write: darkkhaki
read: limegreen
exec: red
no_access: indianred

# Age
day_old: mediumspringgreen
hour_old: lime
no_modifier: seagreen

# File Size
file_large: orange
file_medium: gold
file_small: peachpuff

# Random
report: white
user: moccasin
tree: cyan
empty: yellow
error: red
normal: darkkhaki
inode: moccasin

# Git
addition: chartreuse
modification: darkkhaki
deletion: darkred
untracked: darkorange
unchanged: forestgreen
```
> [!WARNING] Não exibido pelos navegadores

```
~/.config/colorls/folders.yaml
```

```yaml
.atom:    ""
.git:     ""
.github:  ""
.rvm:     ""
.Trash:   ""
.vscode:  ""
config:   ""
folder:   ""
hidden:   ""
lib:      ""
node_modules: ""

```