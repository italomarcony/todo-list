# 📝 Lista de Tarefas Anti-Procrastinação

Um SPA (Single Page Application) de lista de tarefas desenvolvido com React + Vite e Tailwind CSS. O aplicativo limita o usuário a ter no máximo 5 tarefas ativas, incentivando a conclusão de tarefas antes de adicionar novas.

## ✨ Funcionalidades

- ✅ **Adicionar tarefas**: Crie novas tarefas (limite de 5 ativas)
- 🎯 **Limite de tarefas**: Máximo de 5 tarefas ativas por vez
- ✅ **Marcar como concluído**: Remova tarefas ao completá-las
- 🗑️ **Limpar todas**: Botão para remover todas as tarefas de uma vez
- 🎉 **Mensagem de parabéns**: Feedback positivo ao concluir tarefas
- 🌓 **Modo claro/escuro**: Alternância de tema com preferência salva
- 📊 **Contador de tarefas**: Visualize quantas tarefas estão ativas
- 💾 **Persistência local**: Tarefas salvas no localStorage
- 📱 **Design responsivo**: Interface otimizada para desktop e mobile
- ✨ **Animações sutis**: Transições suaves ao adicionar/remover tarefas

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone ou navegue até o diretório do projeto:
```bash
cd todo-list
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse:
```
http://localhost:5173
```

## 🏗️ Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para pré-visualizar o build de produção localmente:

```bash
npm run preview
```

## 🛠️ Tecnologias Utilizadas

- **React.js 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server ultra-rápido
- **Tailwind CSS** - Framework CSS utility-first
- **localStorage** - Persistência de dados no navegador

## 📁 Estrutura do Projeto

```
todo-list/
├── src/
│   ├── components/
│   │   ├── TodoItem.jsx      # Componente de item individual
│   │   └── TodoList.jsx      # Componente de lista de tarefas
│   ├── App.jsx               # Componente principal
│   ├── index.css             # Estilos globais com Tailwind
│   └── main.jsx              # Entry point da aplicação
├── index.html                # HTML principal
├── tailwind.config.js        # Configuração do Tailwind
├── vite.config.js            # Configuração do Vite
└── package.json              # Dependências do projeto
```

## 🎨 Recursos de Design

- Interface minimalista e intuitiva
- Paleta de cores equilibrada para modo claro e escuro
- Animações CSS suaves para melhor experiência do usuário
- Layout responsivo que se adapta a diferentes tamanhos de tela
- Feedback visual para ações do usuário

## 📝 Como Usar

1. **Adicionar tarefa**: Digite no campo de texto e clique em "Adicionar"
2. **Completar tarefa**: Clique no botão "Feito ✅" ao lado da tarefa
3. **Alternar tema**: Clique no botão de lua/sol no canto superior direito
4. **Limpar tudo**: Use o botão "Limpar Todas as Tarefas" no final da lista

## 🔒 Limitações Intencionais

- Máximo de 5 tarefas ativas por vez
- Tarefas concluídas são removidas (não há histórico)
- Dados armazenados apenas localmente (sem sincronização na nuvem)

Essas limitações são propositais para incentivar o foco e a conclusão de tarefas! 🎯

## 📄 Licença

Este projeto é livre para uso pessoal e educacional.
