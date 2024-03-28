#Linux 

```shell
# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="acciolyinho"

plugins=(git)

source $ZSH/oh-my-zsh.sh

alias cr="ssh -p 2222 church@192.168.1.24"
alias lc='colorls --gs --sd'
alias reflector='sudo reflector --threads 8 -n 30 -p https,http -f 80 -l 80 --completion-percent 98 --save /etc/pacman.d/mirrorlist'
export PATH=~/.cargo/bin:~/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl
```