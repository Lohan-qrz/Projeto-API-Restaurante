# API Restaurante

API REST acadêmica para operações de um restaurante. A Etapa 3 usa banco relacional SQLite com Sequelize e organiza a aplicação nas camadas Controller, Service, Repository e Model. Os dados persistem no arquivo SQLite entre reinicializações.

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação e execução

Na pasta do projeto:

```bash
npm install
```

Copie `.env.example` para `.env` se quiser configurar a porta ou o banco:

```env
PORT=3000
DB_DIALECT=sqlite
DB_STORAGE=database/database.sqlite
```

Inicie em desenvolvimento ou produção:

```bash
npm run dev
# ou
npm start
```

Na inicialização, a aplicação autentica a conexão e sincroniza os models. O banco padrão é criado em `database/database.sqlite`. A base começa vazia; cadastre os dados pelas rotas da API. Para sincronizá-la sem iniciar o servidor:

```bash
npm run db:sync
```

Verifique o servidor em `GET http://localhost:3000/`. A resposta é `{ "message": "API Restaurante Mock" }`.

## Rotas

Os endpoints abaixo estão montados no `src/app.js`. Os recursos CRUD seguem respostas `200` para leitura/atualização, `201` para criação e `204` para exclusão, salvo indicação específica.

| Recurso          | Rotas                                                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Usuários         | `GET /usuarios`, `GET /usuarios/:id`, `POST /usuarios`, `PUT/PATCH /usuarios/:id`, `DELETE /usuarios/:id`                                                           |
| Categorias       | `GET /categorias`, `GET /categorias/:id`, `POST /categorias`, `PUT /categorias/:id`, `DELETE /categorias/:id`                                                       |
| Produtos         | `GET /produtos`, `GET /produtos/:id`, `POST /produtos`, `PUT/PATCH /produtos/:id`, `DELETE /produtos/:id`                                                           |
| Mesas            | `GET /mesas`, `GET /mesas/:id`, `POST /mesas`, `PATCH /mesas/:id`, `DELETE /mesas/:id`                                                                              |
| Comandas         | `GET /comandas`, `GET /comandas/:id`, `POST /comandas`, `PATCH /comandas/:id`, `DELETE /comandas/:id`                                                               |
| Itens da comanda | `GET /comandas/:id/itens`, `GET /comandas/:id/itens/:itemId`, `POST /comandas/:id/itens`, `PATCH /comandas/:id/itens/:itemId`, `DELETE /comandas/:id/itens/:itemId` |
| Endereços        | `GET /enderecos`, `GET /enderecos/:id`, `POST /enderecos`, `PUT/PATCH /enderecos/:id`, `DELETE /enderecos/:id`                                                      |
| Clientes         | `GET /clientes`, `GET /clientes/:id`, `POST /clientes`, `PUT/PATCH /clientes/:id`, `DELETE /clientes/:id`                                                           |
| Pedidos          | `GET /pedidos`, `GET /pedidos/:id`, `POST /pedidos`, `PUT/PATCH /pedidos/:id`, `DELETE /pedidos/:id`                                                                |
| Itens do pedido  | `GET /pedidos/:id/itens`, `GET /pedidos/:id/itens/:itemId`, `POST /pedidos/:id/itens`, `PATCH /pedidos/:id/itens/:itemId`, `DELETE /pedidos/:id/itens/:itemId`      |
| Pagamentos       | `GET /pagamentos`, `GET /pagamentos/:id`, `POST /pagamentos`, `PATCH /pagamentos/:id`, `DELETE /pagamentos/:id`                                                     |
| Integração iFood | `GET /integracoes/ifood/pedidos`, `GET /integracoes/ifood/pedidos/:id`, `POST /integracoes/ifood/webhook`                                                           |
| Relatórios       | `GET /relatorios/vendas`, `/relatorios/faturamento`, `/relatorios/produtos-mais-vendidos`, `/relatorios/vendas-por-funcionario`                                     |

Os endpoints de relatório são `GET`. O webhook iFood exige um JSON com `id`, armazena o payload recebido e responde `201`.

## Exemplo

Crie um produto com `POST /produtos` e `Content-Type: application/json`:

```json
{
  "nome": "Refrigerante",
  "descricao": "Lata 350 ml",
  "preco": 6.5,
  "categoria_id": 1
}
```

Antes, crie uma categoria com `POST /categorias`; use o `id` retornado como `categoria_id`. As respostas de leitura incluem os relacionamentos definidos pelo recurso, como a categoria do produto.

## Validação e erros

Os Services verificam campos obrigatórios, valores permitidos e referências antes de persistir (por exemplo, preço e quantidade positivos, status válidos e existência da categoria, cliente, usuário, pedido ou produto referenciado).

Erros são devolvidos como JSON no formato `{ "message": "..." }`: `400` para campos/payload inválidos, `404` para registro ou rota inexistente, `422` para valor/regra inválidos e `500` para erro inesperado.

## Persistência

O Sequelize mapeia os models em `src/models/` para tabelas SQLite. Relacionamentos são definidos em `src/models/index.js`; repositories encapsulam as consultas, services aplicam regras e controllers adaptam HTTP. Remover o arquivo configurado em `DB_STORAGE` apaga todos os dados persistidos; faça isso somente se desejar reiniciar a base.

## Documentação e comandos

- `swagger.yaml`: documentação OpenAPI para importar em Swagger Editor, Swagger UI ou Postman.
- [`MER.png`](MER.png): imagem do Modelo Entidade-Relacionamento.
- [`diagrama-de-classes.png`](diagrama-de-classes.png): imagem do diagrama de classes.
- `npm run lint`: verifica o estilo do código.
- `npm run format:check`: confere a formatação.

## Projeto

Projeto acadêmico do 3º ano do Ensino Médio integrado ao Técnico em Informática, IFPB - Campus Campina Grande, 2026.
