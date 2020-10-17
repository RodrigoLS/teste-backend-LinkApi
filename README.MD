# Teste Back-end

> OBJETIVO
Deverá construir uma API RESTful usando a tecnologia NodeJS.

### Variáveis ambiente
Para que o projeto funcione corretamente, é necessário referenciar as seguintes váriaveis no arquivo **.env** na raiz da aplicação:

###### Banco de Dados
MONGO_CONNECTION_STRING=

###### Pipedrive API
API_PIPEDRIVE_TOKEN=

###### Bling API
API_BLING_TOKEN=
### Para executar o projeto
1 - Na raiz do projeto execute o comando a seguir para instalar os pacotes necessários:
```sh
yarn install
```

2 - Em seguida execute:
```sh
yarn build
```

3 - Execute o projeto:
```sh
yarn start
```


### Para consumir o serviço
1 - Realize a integração fazendo uma request com verbo **GET** para o seguinte endpoint:
```sh
/deals
```

2 - Para buscar as oportunidades por dia e valor, faça uma request com verbo **GET** para o seguinte endpoint:

```sh
/orders
```