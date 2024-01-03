# PROJETO BLOGS-API

Este projeto é uma API e um banco de dados para a produção de conteúdo para um blog.
A aplicação foi desenvolvida em Node.js, utilizando o ORM Sequelize para fazer um CRUD de posts seguindo os princípios do REST.
Para que seja feito um post, é necessário que o usuário tenha feito login, que é autenticado via JWT Token.

## Como executar a aplicação usando Docker

Basta rodar os seguintes comandos:

- `docker-compose up -d --build` Para subir os containers de Node (blogs_api) e do banco de dados (blogs_api_db).
- `docker exec -it blogs_api bash` Para ter acesso ao terminal interativo do container do Node criado no passo anterior.
- `npm install` Para instalar as dependências do package.json no container do Node.

## Diagrama de Entidade-Relacionamento (fornecido pela Trybe)

![image](https://github.com/leandro-bcamargo/blogs-api/assets/96136619/7008e5f7-946b-4cac-a094-9ecbc708e90e)

## Endpoints da Aplicação

### POST /login

Realiza login na aplicação. O corpo da requisição deve ter o seguinte formato:

```json
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```

Se o login for bem-sucedido, é retornado um token JWT no seguinte formato:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

### POST /user

Insere um novo usuário no banco de dados. O corpo da requisição deve ter o seguinte formato:

```json
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  // a imagem é opcional
}
```

### GET /user

Recupera todos os usuários do banco de dados. Autenticação necessária.

### GET /user/:id

Recupera o usuário de id especificado do banco de dados. Autenticação necessária.

### POST /categories

Adiciona uma nova categoria ao banco de dados. Autenticação necessária. O corpo da requisição deve ter o seguinte formato:

```json
{
  "name": "Typescript"
}
```

### GET /categories

Recupera todas as categorias do banco de dados. É necessário estar autenticado para fazê-lo.

### POST /post

Adicona um novo blog post e vincula-o às categorias contidas em seu corpo. Autenticação necessária. O corpo da requisição deve ter o seguinte formato:

```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```

### GET /post

Recupera todos os blog posts, indicando os usuários e as categorias às quais eles pertencem. É necessário estar autenticado para fazê-lo.

### GET /post/:id

Recupera a blog post com o id indicado, bem como o usuário e as categorias às quais ele pertence. É necessário estar autenticado para fazê-lo.

### PUT /post/:id

Altera um blog post no banco de dados. É necessário estar autenticado para fazê-lo.
Só é possível alterá-lo se o usuário autenticado for o autor do post. Somente os atributos `title` e `content` podem ser alterados. O corpo da requisição deve ter o seguinte formato:

```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
```

### DELETE /post/:id

Remove o blog post com o id especificado. É necessário estar autenticado para fazê-lo.
Só é possível removê-lo se o usuário autenticado for o autor do post.

### DELETE /user/me
Remove o usuário que está autenticado do banco de dados. É necessário estar autenticado para fazê-lo.

### GET /post/search?q=:searchTerm
Recupera todos os blog posts que possuam em seu título ou conteúdo o termo pesquisado. É necessário estar autenticado para fazê-lo.
