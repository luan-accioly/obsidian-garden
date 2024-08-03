## Configuração de ambiente:

- IntellIJ
- java 18

### Criando JAR:

Vídeo referência: https://www.youtube.com/watch?v=_XQjs1xGtaUz

1. File > Project Structure

2. Navegar até a parte de adicionar artefatos e selecionar por JAR (from modules with dependencies)
![[Pasted image 20240629204301.png]]

3. Explorar 'Main Class'
![[Pasted image 20240629215327.png]]

4. Selecionar a classe a ser exportada
![[Pasted image 20240629215358.png]]

5. Ok > Ok

6. A janela 'Project Structure' deve estar parecida com isso:
![[Pasted image 20240629215550.png]]

7. Apply > Ok

8. No menu superior, vamos em Build > Build Artifacts

![[Pasted image 20240629215802.png]]

9. Clique em Build.

10. O .jar irá aparecer na pasta 'out > artifacts'

![[Pasted image 20240629220041.png]]

### Importando JAR:

1. File > Project Structure
2. No menu lateral da janela 'Project Structure', clique em 'Modules'
3. Selecione a aba 'Dependencies'
4. Clique no botão '+'

![[Pasted image 20240702184147.png]]

5. Selecione 'JARs or Directories' 

![[Pasted image 20240702184246.png]]

6. No explorador de arquivos, busque pelo .jar que deseja importar
7. Após selecionar o JAR, defina seu 'Scope' como 'Test'

![[Pasted image 20240702184613.png]]

8. Aplique as mudanças e OK
9. Rode a pasta de testes

>[!IDEA] Conferindo...
> Se quiser confirmar que o .jar está sendo utilizado, pode ficar a vontade para deletar o conteúdo da pasta src