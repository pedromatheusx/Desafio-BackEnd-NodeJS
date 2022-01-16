# Como executar 

## Primeiro passo :
*Instalar todas as dependências*

```yarn install``` 
```npm run install``` 

## Segundo passo :

*Para criar o banco de dados*

```docker-compose up``` 

## Terceiro passo : 
*Criar as tabelas no banco de dados*

```yarn typeorm migration:run```
```npm run typeorm migration:run```

## Quarto passo : 
*Executar a API*

```yarn dev```
```npm run dev```

# Documentação local:

```http://localhost:3333/api-docs```