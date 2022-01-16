# Como executar 

## Primeiro passo :
*Instalar todas as dependências*

```yarn install``` ou
```npm run install``` 

## Segundo passo :

*Para criar o banco de dados*

```docker-compose up``` 

## Terceiro passo : 
*Criar as tabelas no banco de dados*

```yarn typeorm migration:run``` ou
```npm run typeorm migration:run```

## Quarto passo : 
*Executar a API*

```yarn dev``` ou
```npm run dev```

# Documentação local:

```http://localhost:3333/api-docs```