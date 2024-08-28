# FURNIRO APP

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width=50/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" width=50/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" width=60/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" width=50/>
</div>       

### Rodando o projeto:

Após clonar o repositório, verifique se o Docker e as portas 5432 e 3000 estão disponíveis em sua máquina.
Se tudo está disponível, suba o banco de dados e a API com docker-compose:
```
docker-compose up --build -d
```

Se os serviços subiram corretamente, você pode começar a testar a api.

<br><br>
## Utilizando Clientes HTTP:
### Utilizando Insomnia:
- Dentro do insomnia, crie um projeto e importe a coleção com o arquivo <b>_collections/furniro.json_</b>

### Utilizando Postman:
- Na aba Collections, importe a coleção do arquivo <b>_collections/furniro-api.postman_collection.json_</b>
- Na aba Environments, importe o ambiente do arquivo <b>_collections/furniro-api.postman_environment.json_</b>

#### Após importar a coleção, é só começar a testar a api.
##### (A coleção furniro.json pode ser importada em outros clientes como HTTPie também.)

## Swagger
### A documentação dos endpoints da API também está disponível em: 
```
/api/docs/
```

<br><br>
## Importante: Crie seu usuário e faça o login para acessar as rotas protegidas:
- Registre o usuário com um `HTTP POST` no endpoint <b>/api/v1/users</b>, utilizando o payload:
```
  {
    "email": "john.doe@example.com",
    "password": "JohnDoe12345!"
  }
```

- Faça login com um `HTTP POST` e o mesmo payload no endpoint <b>/api/v1/auth/login</b>
- Utilize o `access_token` retornado pela api como Bearer token nas rotas protegidas.
  - _Exemplo de header_:
  ```
    {
      Authorization: "Bearer {{access_token}}"
    }
  ```

- A Doc completa dos endpoints está disponível em [Swagger](#Swagger)
_________________________________________________________________
