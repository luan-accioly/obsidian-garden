
```javascript
db.pratica.find({"language": "Mandarin"})
```

![[Pasted image 20231219212226.png]]

---

```javascript
db.pratica.find({"language": "Mandarin"}).sort({"imdb_score":  -1}).limit(10)
```

![[Pasted image 20231219212438.png]]

---

```javascript
db.pratica.find({"duration": {$gt: 120}})
```

![[Pasted image 20231219212629.png]]