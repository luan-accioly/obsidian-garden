---
draft: true
---


`keyspace` -> pratica

Load Data -> `movie_database.csv`

---

```
CREATE INDEX ON movie_metadata_1 (director_name);
```

```
SELECT * FROM movie_metadata_1 WHERE director_name = 'James Cameron';
```

![[Pasted image 20231219205227.png]]

---

```
CREATE INDEX ON movie_metadata_1 (title_year);
```

```
SELECT * FROM movie_metadata_1 WHERE title_year < 1990;
```

![[Pasted image 20231219205513.png]]

---

```
CREATE INDEX ON movie_metadata_1 (language);
```

```
SELECT * FROM movie_metadata_1 WHERE language='Mandarin';
```

![[Pasted image 20231219205053.png]]

