---
draft: false
---


# Projeto - Redes de Computadores

- CPF: 709 = 16

- 10.1.0.0/16 -> 10.1.15.0/16 = ips reservados para a rede 

- 10.1.16.0/16

1 sub-rede com 500 hosts para a rede dos servidores

1 sub-rede com 100 para a vlan 35

1 sub-rede com 50 para a vlan 25

----

## 1 sub-rede com 500 hosts para a rede dos servidores

> 9 bits são necessários para reservar 500 hosts (512)
> 
> 32(bits totais de um ip) - 9 (bits necessários para os 500) = 23

10.1.16.0/23 == 255.255.254.0 (uma forma de dizer que nosso ip tem  o primeiro, segundo e parte do terceiro bytes reservados pra rede)

#### Descobrindo o último endereço disponível para essa rede

00001010.00000001.00010000.00000000 = 10.1.16.0

11111111.11111111.11111110.00000000 = 255.255.254.0

---

00001010.00000001.00010001.11111111 = 10.1.17.255

`10.1.16.0` -> endereçamento de rede

`10.1.16.1` -> gateway padrão

> Por padrão, é usado o primeiro endereço válido para host como gateway padrão

`10.1.16.2` <-> `10.1.17.254` (endereços disponíveis para host)

`10.1.17.255` -> o ultimo endereço (broadcast)

----

----

## 1 sub-rede com 100 para a vlan 35

10.1.18.0/25 -> 255.255.255.128

00001010.00000001.00010010.00000000

11111111.11111111.11111111.10000000

----

00001010.00000001.00010010.01111111 -> broadcast

`10.1.18.0` -> endereçamento de rede

`10.1.18.1` -> gateway padrão

`10.1.18.2` <-> `10.1.18.126` (endereços disponíveis para host)

`10.1.18.127` -> broadcast

----

---

## 1 sub-rede com 50 para a vlan25

> São necessários 6 bits para representar 32 endereços.

11111111.11111111.11111111.11000000 = 255.255.255.192

`10.1.18.128` -> endereçamento de rede

`10.1.18.129` -> gateway padrão

`10.1.18.130` <-> `10.1.18.158` = disponíveis pra host

`10.1.18.159` -> broadcast

---

# Assuntos para revisar

trunk - maneira de fazer a ligação das vlans

multiplexação
