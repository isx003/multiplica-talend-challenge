# MULTIPLICA TALEND CHALLENGE
Chellange to make REST API to get  all or one color and save a new color.

## _Technologies_
- NodeJs
- Express
- TypeScript
- PostgreSQL
- Docker
- Docker Compose

## _Installation_
Go to /service and copy and paste .env.sample, rename new file with .env and set all variables
| VARIABLE | DESCRIPTION |
| ------ | ------ |
| API_PATH | Path where is located api directory. Example: ~/services/api |
| API_PORT | Port to expose server running inside container to local. Example 8000 |
| DB_PATH | Path where is located db directory for volumn and avoid lose data  example: ~/db |
| DB_USERNAME | Username to connect to database. Example root or postgre |
| DB_PASSWORD | Password to connect to database |
| DB_NAME | Database name will be create |
| ADMINER_PORT | Port to expose mini database manage inside container to local. Example 8001 |

Go to /service/api and copy and paste .env.sample, rename new file with .env and set follow variables and must be the same value that in /service/.env
| VARIABLE | DESCRIPTION |
| ------ | ------ |
| DB_USERNAME | Username to connect to database. Example root or postgre |
| DB_PASSWORD | Password to connect to database |
| DB_NAME | Database name |

Go to /service/api/database and copy and paste config.sample, rename new file with config.js and set follow variables and must be the same value for connect with database setted in /service/.env
| VARIABLE | DESCRIPTION |
| ------ | ------ |
| username | Username to connect to database. Example root or postgre |
| password | Password to connect to database |
| database | Database name |

### For production
Edit the file  /service/docker-compose.yml. Change all service multiplica-api instead the following:
```
multiplica-api:
  container_name: multiplica-api
  build: 
    context: .
    dockerfile: Dockerfile.multiplica-api-prod
  image: multiplica-api:1.0
  ports: 
    - "${API_PORT}:8080"
  logging:
    options:
      max-size: 3m
  depends_on:
    - multiplica-pg
```

Execute with console the following code to run services
```
cd /service
docker-compose up -d
```

Execute the following code when services are running and you want to have colors table with data
```
cd /service
docker-compose exec multiplica-api npm run migrate:rollback
docker-compose exec multiplica-api npm run migrate
docker-compose exec multiplica-api npm run db:seed
```

## _ENDPOINTS_

### GET COLOR LIST BY PAGINATION JSON TYPE
#### Request
`GET /colores?page=1&qty=5`

#### Params
page: current page
qty: qty colors to get

#### Response
```
{
    "page": 1,
    "number_pages": 3,
    "total_elements": 13,
    "colors": [
        {
            "id": 1,
            "name": "cerulean",
            "color": "#98B2D1"
        },
        {
            "id": 2,
            "name": "fuchsia rose",
            "color": "#C74375"
        },
        {
            "id": 3,
            "name": "true red",
            "color": "#BF1932"
        },
        {
            "id": 4,
            "name": "aqua sky",
            "color": "#7BC4C4"
        },
        {
            "id": 5,
            "name": "tigerlily",
            "color": "#E2583E"
        }
    ]
}
```

### GET COLOR LIST BY PAGINATION XML TYPE
`GET /colores?page=1&qty=5?type=xml`

#### Params
page: current page
qty: qty colors to get
type: response type

#### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <page>1</page>
  <number_pages>3</number_pages>
  <total_elements>13</total_elements>
  <colors>
      <color>
          <id>1</id>
          <name>cerulean</name>
          <color>#98B2D1</color>
      </color>
      <color>
          <id>2</id>
          <name>fuchsia rose</name>
          <color>#C74375</color>
      </color>
      <color>
          <id>3</id>
          <name>true red</name>
          <color>#BF1932</color>
      </color>
      <color>
          <id>4</id>
          <name>aqua sky</name>
          <color>#7BC4C4</color>
      </color>
      <color>
          <id>5</id>
          <name>tigerlily</name>
          <color>#E2583E</color>
      </color>
  </colors>
</response>
```

### GET SPECIFIC COLOR BY ID PAGINATION JSON TYPE
`GET /colores/:id`

#### Params
id: color id

#### Response

```
{
  "id": 10,
  "name": "mimosa",
  "year": 2009,
  "color": "#F0C05A",
  "pantone_value": "14-0848"
}
```

### GET SPECIFIC COLOR BY ID PAGINATION XML TYPE
`GET /colores/:id?type=xml`

#### Params
id: color id
type: type xml response

#### Response
```
<?xml version="1.0" encoding="UTF-8"?>
<color>
  <id>10</id>
  <name>mimosa</name>
  <year>2009</year>
  <color>#F0C05A</color>
  <pantone_value>14-0848</pantone_value>
</color>
```

`POST '/colores`

#### Params
--data-urlencode name=democolor
--data-urlencode year=2021
--data-urlencode color=#FFFAAA
--data-urlencode pantone_value=12-1231

#### Response
```
{
  "message": "Color created sucessfully"
}
```

## _PRODUCTION URLS_
```
gaaa
```
