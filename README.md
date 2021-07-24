# PONTO INTERESSE

## Configurações

- Você deve ter instalado `yarn` ou `npm` para conseguir rodar o serviço.
- Execute o comando `yarn` ou `npm install` para instalação das dependências do projeto.
- Crie uma cópia do arquivo `.env.example` alterando o nome para `.env`, que possui configuração da porta, adicionando a porta desejada.
- Utilize o comando `yarn migrate:run` ou `npm run migrate:run` para o knex criar o banco de dados a partir das migrates.
- Em seguida utilize o comando `yarn seed:run` ou `npm run seed:run` para executar o seed, assim, alimentar o banco com alguns dados pré-cadastrados, lembrando que sempre que rodar a o comando, todas a informações cadastradas serão apagadas primeiro.
- Para iniciar o serviço utilize o comando `yarn dev` ou `npm run dev`.

## Como utilizar

Este serviço possui 3 endpoints para as chamadas:

- Para criar uma nova locação faça uma chamada `POST` através do endpoint `/locations` com os seguintes dados na requisição body:
  
      {
        "name": string,
        "coord_x": integer,
        "coord_y": integer
      }

- Para ver todas as locações cadastradas faça uma chamda `GET` através do endpoint `/locations`.

- Para realizar o cálculo dos pontos de interesse faça uma chamda `POST` através do endpoint `/locations/interestpoint` com os seguintes dados na requisição body:

      {
        "dMax": integer,
        "coordX": integer,
        "coordY": integer
      }


