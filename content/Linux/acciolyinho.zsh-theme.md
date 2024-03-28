## Características

- Quebra de linha para digitar o comando (mais espaço)
- Diretório atual é exibido com o caminho completo
- Alterna para cor vermelha quando um comando é inválido ou erro inesperado
- Se o diretório for um repositório, a branch em uso é exibida

```bash
typeset +H _current_dir="%(?:%{$fg_bold[blue]%}%3~ :%{$fg_bold[red]%}%3~)%{$reset_color%} "

PROMPT="

${_current_dir}"

PROMPT+=' $(git_prompt_info)'

PROMPT+='

%(?:%{$fg_bold[blue]%}%1{➜%} :%{$fg_bold[red]%}%1{➜%} )%{$reset_color%}'

ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg_bold[green]%} (%{$fg[yellow]%}"

ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%} "

ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[blue]%}) %{$fg[yellow]%}✗"

ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[blue]%})"
```

![[Pasted image 20240327004627.png]]