
Após database criada, vamos selecioná-la:

```CQL
use <key_word>;
```

Criar tabela musica:

```CQL
CREATE table musica (id UUID PRIMARY KEY, nome text, album text, artista text);
```

Inserir dados na tabela:

```CQL
INSERT INTO MUSICA (id, nome, album, artista) values (uuid(), 'Help', 'Help', 'Beatles');
```

Visualizar a tabela:

```CQL
select * from musica;
```

```CQL
 id                                   | album | artista | nome
--------------------------------------+-------+---------+------
 b33cd32e-070e-44bb-8a75-32d56fcc2a91 |  Help | Beatles | Help
```

Atualizar conteúdo:

```CQL
update musica set nome='Help!', album='Help!' where id=b33cd32e-070e-44bb-8a75-32d56fcc2a91;
```

```
 id                                   | album | artista | nome
--------------------------------------+-------+---------+-------
 b33cd32e-070e-44bb-8a75-32d56fcc2a91 | Help! | Beatles | Help!
```

Apagar conteúdo:

```CQL
delete from musicas where id=b33cd32e-070e-44bb-8a75-32d56fcc2a91;
```

```
 id | album | artista | nome
----+-------+---------+------
```

![[Pasted image 20231211170126.png]]



