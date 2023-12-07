---
draft: true
---


# Resumo - Projeto Redes

## DHCP

> Dynamic Host Configuration Protocol

Quando falamos em redes, existem alguns recursos que são utilizados e facilitam muito a nossa vida, mas nem os percebemos. Um deles é o protocolo DHCP. Do inglês Dynamic Host Configuration Protocol (que ficaria, em português, algo como Protocolo de Configuração Dinâmica de Endereços de Rede), é um protocolo utilizado em redes de computadores que permite às máquinas obterem um endereço IP automaticamente.

### Qual sua importância

Permite distribuir automaticamente endereços de IP diferentes a todos os computadores à medida que eles fazem a solicitação de conexão com a rede. Essa distribuição dos IPs é feita em um intervalo pré-definido configurado no servidor. Sempre que uma das máquinas for desconectada o IP ficará livre para o uso em outra.

### Como ele faz isso?

Resumidamente, utilizando um modelo cliente-servidor, o DHCP faz o seguinte:

- Quando um cliente conecta-se a uma rede ele envia um pacote com um pedido de configurações DHCP.

- O servidor DHCP gerencia uma faixa fixa de IPs disponíveis juntamente com as informações e parâmetros necessários (gateway padrão, nome de domínio, DNS, etc).

- Quando este servidor recebe um pedido, ele entrega um destes endereços e configurações para o cliente.

---

## Trunk

Existe um mecanismo chamado VLAN trunk (ou entroncamento de VLAN), que possibilita que uma porta pertença a mais de uma VLAN. Quando uma porta de um switch é configurada em modo TRUNK, ela se torna capaz de enviar e receber quadros de múltiplas VLANs. 

**Exemplo de switch Trunk**

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-22-23-54-55-image.png)

**Exemplo de switch sem Trunk**

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-22-23-56-37-image.png)

---

## Switches

Os switches mantêm uma tabela lógica que relaciona o endereço MAC de cada computador à porta que ele está conectado, sendo capaz de direcionar os dados para seu destinatário

Assim como o hub, um switch é responsável por conectar vários computadores em uma mesma rede local de computadores (LAN). O grande diferencial, aqui, é que o switch mantém uma tabela com os endereços MAC de cada computador conectado a ele e sua respectiva porta.

Dessa forma, o switch é capaz de diferenciar para qual computador os dados são destinados, consultando essa tabela para saber para qual porta deve direcionar o fluxo de dados. Por essa característica, ele é considerado um dispositivo de rede "inteligente".

---

## NAT - Network Address Translation

> O NAT protocolo aplicado na camada de rede e tem como função fazer a tradução dos endereços IP e Portas TCP da rede local para o mundo (Internet)

A ideia do NAT é simples. Cada empresa possui um endereço IP público (às vezes mais de um, mas nunca um número muito grande) e todos os dispositivos acessam a internet através desse IP público. O pacote a ser enviado ou a ser recebido de sua estação de trabalho na sua rede local é entregue ao servidor que faz a troca do `IP Local` do pacote pelo `IP público`. No retorno acontece basicamente a mesma coisa, porem agora o IP público vai ser substituído pelo IP local do dispositivo que fez a requisição.

Para tornar o esquema acima possível, foi determinado que três intervalos de IP seriam considerados como redes privadas. Essas redes privadas não possuem conectividade externa a não ser indiretamente, através de dispositivos que suportem a função do NAT (Firewall, routers ou gateways). Abaixo os três intervalos de endereço privado:

- 10.0.0.0 - 10.255.255.255/8 (16.777.216 hosts) 

- 172.16.0.0 - 172.31.255.255/12 (1.048.576 hosts)

- 192.168.0.0 - 192.168.255.255/16 (65.536 hosts)

![](C:\Users\lucas\AppData\Roaming\marktext\images\2022-08-23-01-43-56-image.png)

### Tipos de NAT:

**NAT Estático:** É o mapeamento um-para-um de um endereço IP privado para um endereço IP público. Esse tipo de NAT é bastante útil quando um dispositivo e rede que esta dentro de uma rede privada precisa ser acesso pela Internet.

**NAT Dinâmico:** O NAT dinâmico pode ser definido como mapeamento de um endereço IP privado para um endereço IP público a partir de um grupo de endereços público que é chamado de NAT pool. Nesse tipo o endereço IP público é retirado de um conjunto de endereços que está configurado no roteador final. O mapeamento público-privado pode variar de acordo com o endereço público disponível na pool do NAT.

**NAT sobrecarga (PAT):** Esse tipo de NAT que é conhecido por PAT (Port Address Translator) é outro tipo de NAT dinâmico. Ele é capaz de mapear vários endereços IP privados para um único IP publico. Este processo é conseguido, uma vez que o equipamento que faz PAT utiliza portas que identificam univocamente cada pedido das máquinas locais (por exemplo: 200.251.33.4:5053, 200.253.24.4:4153, etc) para o exterior.
