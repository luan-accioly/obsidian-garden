---
draft: true
---


#Resumo 
# Resumo 2va

## Roteamento

### OSPF vs RIP

> Ambos são viáveis e possuem mais de uma versão. Em particular, o RIPv1 não pode ser utilizado pois não consegue lidar com sub-redes IP.
> 
> O RIP precisa continuamente enviar informações sobre o roteamento nos canais de comunicação, já o OSPF só envia quando alguma atualização ocorre na rede.
> 
> O RIP foi feito para trabalhar em redes de tamanho moderado, já o OSPF consegue trabalhar em redes maiores.

No projeto, utilizamos OSPFv2, pois ele só compartilha informações sobre o roteamento quando a topologia da rede é alterada. A versão 2 se dá pelo motivo de estarmos trabalhando com redes ipv4.



#### Configurando OSPV no roteador

- O OSPV é habilitado apenas nas interfaces configuradas usando o comando `network {IP} {WILDCARD} area {N}`
  
  - `{IP}`: escolhemos um endereço reservado pra rede: `10.1.1.0` 
  
  - `{WILDCARD}`: seria o reverso.
  
  - `area`: 0

# 



## DNS

> Domain Name System é um sistema de banco de dados utilizado na internet com objetivo de traduzir endereços ip dos sites para algo mais simples e amigável, como os nomes dos endereços que escrevemos quando usamos o navegador

ICANN (Corporação da Internet para Atribuição de Nomes e Números) é responsável por atribuir nomes de domínios a endereços IPS no mundo todo

### DNS Reverso

> Uma consulta de [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) reversa é uma consulta de DNS para o [nome de domínio](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/) associado a um determinado [endereço de IP](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/). Nesse caso se faz o oposto da pesquisa de DNS de encaminhamento mais comumente usada, em que se consulta o sistema de DNS para que este retorne um endereço de IP.



#### Como funciona?

As pesquisas de DNS reversas consultam os servidores de DNS para obter um registro PTR (ponteiro); se o servidor não tiver um [registro PTR](https://www.cloudflare.com/learning/dns/dns-records/dns-ptr-record/), não poderá resolver uma pesquisa reversa. Os registros PTR armazenam endereços de IP com seus segmentos invertidos, e anexam ".in-addr.arpa" a ele. Por exemplo, se um domínio tem o endereço de IP 192.0.2.1, o registro PTR armazenará as informações do domínio como 1.2.0.192.in-addr.arpa.

#### Para que são usadas?

Pesquisas reversas são comumente usadas por servidores de e-mail. Os servidores de e-mail verificam se uma mensagem de e-mail foi enviada por um servidor válido antes de colocá-la em sua rede. Muitos servidores de e-mail rejeitarão mensagens de qualquer servidor que não ofereça suporte a pesquisas reversas ou de um servidor que provavelmente não seja legítimo. Os spammers costumam usar endereços de IP de máquinas sequestradas, o que significa que não haverá registro PTR. Ou podem usar endereços de IP atribuídos dinamicamente que levam a domínios de servidor com nomes altamente genéricos.



#### No projeto

- Configuramos as zonas nos arquivos do bind9
  
  - Definimos o nome da zona e seu endereço
  
  - Definimos o DNS reverso

- Configuramos os domínios
  
  - Definimos os endereços e nomes
  
  - Definimos a zona reversa

**Forwarders**

- a fim de configurar uma base dns já setada, utilizamos a forward do google `8.8.8.8` e `8.8.4.4` 



## Firewall

É um dispositivo de segurança da rede que monitora o tráfego de rede de entrada e saída e decide permitir ou bloquear tráfegos específicos de acordo com um conjunto definido de regras de segurança.

#### No projeto

Utilizamos uma *Extended Access List* pois ela permite comparar não apenas os endereços de origem, mas os endereços de destino. Assim, temos uma maior liberdade para definir o *Firewall*



Configurando no roteador 

- Criação da lista de acesso extendida
  
  - `conf t`
  
  - `ip access-list extended FIREWALL`

- Bloqueando ICMP ao servidor DNS
  
  - `deny icmp any 10.1.14.2 0.0.0.0`

- Bloqueio da VLAN25 ao servidor HTTP (TCP)
  
  - `deny ip 10.1.16.128 0.0.0.63 10.1.14.5 0.0.0.0`

- Bloqueio da VLAN35 ao servidor FTP
  
  - `deny ip 10.1.16.0 0.0.0.127 10.1.14.4 0.0.0.0`

- Permitir o tráfego dos demais
  
  - `permit ip any any`

- Finalização: `end` + `wr`

- Fazer interface utilizar essa lista de acesso
  
  - `conf t` + `int Serial 3/0` + `ip access-group FIREWALL in`


