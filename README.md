# FURNIRO APP

### Rodando o projeto:

Após clonar o repositório, verifique se o Docker e as portas 5432 e 3000 estão disponíveis em sua máquina.
Se tudo está disponível, suba o banco de dados e a API com docker-compose:
```
docker-compose up --build -d
```

Se os serviços subiram corretamente, você pode começar a testar a api.

### Utilizando Insomnia:
- Dentro do insomnia, crie um projeto e importe a coleção com o arquivo <b>_collections/furniro.json_</b>

### Utilizando Postman:
- Na aba Collections, importe a coleção do arquivo <b>_collections/furniro-api.postman_collection.json_</b>
- Na aba Environments, importe o ambiente do arquivo <b>_collections/furniro-api.postman_environment.json_</b>

#### Se você optou por um destes clientes http, é só fazer as requisições e testar a aplicação.
