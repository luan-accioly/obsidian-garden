---
draft: true
---


#Resumo
# 3va

## Roteamento

- `sh ip ospf rib`: lista a rib (ver o que exatamente é isso)

- Como mostrar que o roteamento está funcionando?
  
  - dar ping de uma máquina de alguma vlan `25/35` para alguma máquina da lan `500`
  
  - 

## Firewall

- Comandos importantes(no roteador):
  
  - `sh ip access-lists`: lista as definições de todas as listas de acesso

- Como mostrar que funciona?
  
  - tentar dar um ping de alguma máquina que não esteja permitida na lista do Firewall

- Permitindo um ip acessar o nosso dns.hubble
  
  - Para isso, é mais prático criarmos uma nova lista que englobe essa permissão, invés de retirar a condição original da lista FIREWALL, pois isso necessitaria de varios comandos No e complicaria a ordem 
  
  - acrescentar comandos pra criar lista
  
  - entender pq n ta funcionando a nova lista

## DNS



## Serviços
