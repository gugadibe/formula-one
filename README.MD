
# Api Formula 1

- **Nome:** Api Formula 1
- **Tech:** Node.js, TypeScript, Fastify
- **Descrição:** API para desafio do bootcamp da Dio.

## Visão Geral

API simples criada como desafio do bootcamp da DIO para gerenciar dados relacionados à Fórmula 1 (ex.: pilotos, corridas, equipes). Esta repo contém a implementação em TypeScript usando Fastify.

## Pré-requisitos

- Node.js (v16+ recomendado)
- npm ou yarn

## Instalação

Instale dependências:

```bash
npm install
```

## Scripts

Scripts disponíveis no `package.json` desta repo:

```json
"scripts": {
	"dist": "tsup src",
	"start:dev": "tsx --env-file=.env src/server.ts",
	"start:watch": "tsx watch --env-file=.env  src/server.ts",
	"start:dist": "npm run dist && node dist/src/index.js"
}
```

Para rodar em desenvolvimento (carrega variáveis de `.env`):

```bash
npm run start:dev
```

Para assistir mudanças automaticamente:

```bash
npm run start:watch
```

## Uso / Exemplos de endpoints

Exemplos com `curl` (assumindo servidor rodando em `http://localhost:3000`):

- Listar pilotos:

```bash
curl http://localhost:3000/drivers
```

- Obter detalhes de uma corrida por id:

```bash
curl http://localhost:3000/races/1
```

Resposta esperada (exemplo):

```json
{
	"id": 1,
	"name": "GP de Mônaco",
	"year": 2024,
	"winner": "Exemplo Piloto"
}
```

## Estrutura sugerida do projeto

- `src/` - código TypeScript (rotas, controladores, serviços)
- `tests/` - testes automatizados
- `dist/` - build compilado (após `npm run build`)



