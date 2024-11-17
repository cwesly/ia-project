# Significados - Consultador de Significados

Este é um projeto React com TypeScript que permite aos usuários consultarem o significado de palavras utilizando a API do Google Gemini.

## Tecnologias Utilizadas
- React 18.3
- TypeScript
- Vite
- Google Generative AI (Gemini API)
- Axios

## Funcionalidades
- Interface de usuário com campo de entrada para palavras
- Botão customizado para submissão
- Integração com a API Gemini do Google
- Feedback visual durante o carregamento
- Tratamento de erros
- Exibição do significado da palavra pesquisada

## Como Executar

### Pré-requisitos
- Node.js (versão recomendada: 18.x ou superior)
- npm ou yarn
- Chave de API do Google Gemini

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd ia-project
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
- Crie um arquivo `.env` na raiz do projeto
- Adicione sua chave API do Google Gemini:
```
VITE_GEMINI_API_KEY=sua_chave_api_aqui
```
## 🎮 Como usar

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```
2. Abra o navegador e acesse o projeto pelo link.

3. Digite uma palavra no campo de busca e clique em "Buscar significado" para ver sua definição.

## 🏗️ Scripts disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção (TypeScript + Vite)
- `npm run lint`: Executa a verificação de lint com ESLint
- `npm run preview`: Visualiza a versão de produção localmente

## Estrutura do Projeto
```
src/
├── components/
│   ├── Button.tsx    # Componente de botão reutilizável
│   └── input.tsx     # Componente de entrada com integração Gemini
├── hooks/
│   └── useGeminiApi.ts # Hook personalizado para chamadas à API Gemini
├── App.tsx           # Componente principal
└── main.tsx         # Ponto de entrada da aplicação
```

## Detalhes Técnicos
- Utiliza React 18 com TypeScript para tipagem estática
- Componentes funcionais com hooks (useState, useEffect)
- Estilização inline para componentes
- Gerenciamento de estado local para dados do formulário
- Tratamento assíncrono de chamadas à API
- Feedback visual para estados de loading e erro

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Status do Projeto
Em desenvolvimento ativo. Contribuições são bem-vindas!