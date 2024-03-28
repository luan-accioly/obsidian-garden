---
draft: true
---




**Carregando e preparando a base de dados:**
``` cypher
LOAD CSV WITH HEADERS FROM 'https://gist.githubusercontent.com/LuanAccioly/71e16eac1efd12174d287e747548773f/raw/cba7c76926961c3c05d292ad44db225787bf77d7/movies.csv' AS linha
MERGE (movie:Movie {titulo: linha.movie_title})
MERGE (actor:Actor {nome_ator: coalesce(linha.actor_1_name, "Unknown")})
MERGE (director:Director {nome_diretor: coalesce(linha.director_name, "Unknown")})
MERGE (genre:Genre {genero: linha.genres})
MERGE (year:Year {ano: coalesce(linha.title_year, "Unknown")})
MERGE (language:Language {linguagem: coalesce(linha.language, "Unknown")})
MERGE (score:Score {pontuacao: linha.imdb_score})
MERGE (duration:Duration {duracao: coalesce(linha.duration, "Unknown")})
MERGE (actor)-[:ATUOU]->(movie)
MERGE (director)-[:DIRIGIU]->(movie)
MERGE (movie)-[:POSSUI]->(genre)
MERGE (movie)-[:LANCOU]->(year)
MERGE (movie)-[:TEM]->(language)
MERGE (movie)-[:PONTUOU]->(score)
MERGE (movie)-[:DURA]->(duration)
```

**Buscar os filmes de um determinado diretor**
```cypher
MATCH (director:Director {nome_diretor: 'James Cameron'})-[dirigiu:DIRIGIU]->(movie:Movie)
RETURN director, dirigiu, movie
```

![[visualisation.png]]

**Buscar os filmes de um determinado ator:**
``` cypher
MATCH (actor:Actor {nome_ator: 'Tom Hanks'})-[atuou:ATUOU]->(movie:Movie)
RETURN actor, atuou, movie
```
![[actor.png]]
**Buscar os filmes de um determinado gênero:**
```cypher
MATCH (genre:Genre {genero: 'Action'})<-[possui:POSSUI]-(movie:Movie)
RETURN genre, possui, movie
```
![[visualisation (1).png]]

---
