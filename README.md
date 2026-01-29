# edtech-consumindo-api

Tutorial: Consumindo a API DummyJSON
=====================================

## 📋 Sobre o Projeto

Este é um gerenciador de tarefas que demonstra como consumir uma API REST utilizando JavaScript puro (Vanilla JS). O projeto utiliza a [API DummyJSON](https://dummyjson.com/) para simular operações CRUD (Create, Read, Update, Delete) em tarefas.

## 🎯 O que é a API DummyJSON?

A [DummyJSON](https://dummyjson.com/) é uma API REST gratuita que fornece dados fictícios para prototipagem e testes. Ela oferece vários endpoints, incluindo:
- `/todos` - para gerenciamento de tarefas (todos)
- `/users` - para usuários
- `/products` - para produtos
- E muitos outros!

Neste projeto, utilizamos especificamente o endpoint `/todos` para gerenciar tarefas.

## 🚀 Como Funciona o Consumo da API

### 1. Configuração Base

Primeiro, definimos a URL base da API:

```javascript
const API_URL = 'https://dummyjson.com/todos';
```

### 2. Operação GET - Listar Tarefas

A função `loadTasks()` faz uma requisição GET para buscar todas as tarefas:

```javascript
async function loadTasks() {
    try {
        // Faz a requisição GET para a API
        const response = await fetch(API_URL);
        
        // Converte a resposta para JSON
        const data = await response.json();
        
        // Armazena as tarefas na variável global
        tasks = data.todos || [];
        
        // Renderiza as tarefas na tela
        renderTasks();
    } catch (error) {
        // Captura e exibe erros
        console.error('Erro ao carregar tarefas:', error);
    }
}
```

**O que acontece aqui:**
- `fetch(API_URL)` - faz uma requisição HTTP GET
- `await` - espera a resposta da API
- `response.json()` - converte a resposta de JSON para objeto JavaScript
- `data.todos` - acessa o array de tarefas retornado pela API
- `try/catch` - captura erros de rede ou da API

### 3. Operação POST - Adicionar Tarefa

A função `addTask()` cria uma nova tarefa:

```javascript
async function addTask(taskText) {
    try {
        const response = await fetch(`${API_URL}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo: taskText,
                completed: false,
                userId: 1
            })
        });
        
        const newTask = await response.json();
        
        // Adiciona a tarefa localmente
        tasks.unshift(newTask);
        renderTasks();
    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
    }
}
```

**O que acontece aqui:**
- `method: 'POST'` - define o método HTTP como POST
- `headers` - especifica que estamos enviando JSON
- `body: JSON.stringify()` - converte o objeto JavaScript em string JSON
- A API retorna a tarefa criada com um ID

### 4. Operação PUT - Atualizar Tarefa

A função `updateTask()` atualiza o texto de uma tarefa existente:

```javascript
async function updateTask(id, taskText) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo: taskText
            })
        });
        
        const updatedTask = await response.json();
        
        // Atualiza a tarefa localmente
        const index = tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            tasks[index].todo = taskText;
            renderTasks();
        }
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
    }
}
```

**O que acontece aqui:**
- `${API_URL}/${id}` - adiciona o ID da tarefa na URL
- `method: 'PUT'` - indica que queremos atualizar um recurso
- Enviamos apenas os campos que queremos atualizar

A função `toggleTask()` também usa PUT para marcar/desmarcar como concluída:

```javascript
async function toggleTask(id) {
    try {
        const task = tasks.find(t => t.id === id);
        if (!task) return;
        
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                completed: !task.completed
            })
        });
        
        // Atualiza o status localmente
        task.completed = !task.completed;
        renderTasks();
    } catch (error) {
        console.error('Erro ao atualizar status:', error);
    }
}
```

### 5. Operação DELETE - Deletar Tarefa

A função `deleteTask()` remove uma tarefa:

```javascript
async function deleteTask(id) {
    if (!confirm('Tem certeza que deseja deletar esta tarefa?')) {
        return;
    }
    
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        // Remove a tarefa localmente
        tasks = tasks.filter(t => t.id !== id);
        renderTasks();
    } catch (error) {
        console.error('Erro ao deletar tarefa:', error);
    }
}
```

**O que acontece aqui:**
- `method: 'DELETE'` - indica que queremos deletar um recurso
- Não é necessário enviar um body
- Filtramos o array local para remover a tarefa deletada

## 🔑 Conceitos Importantes

### Async/Await
- `async` - marca uma função como assíncrona
- `await` - pausa a execução até que a Promise seja resolvida
- Torna o código mais legível comparado a `.then()`

### Fetch API
```javascript
fetch(url, options)
```
- Método moderno para fazer requisições HTTP
- Retorna uma Promise
- `options` pode incluir: method, headers, body, etc.

### Try/Catch
```javascript
try {
    // código que pode gerar erro
} catch (error) {
    // tratamento do erro
}
```
- Captura erros durante a execução
- Essencial para requisições de rede

### JSON
```javascript
// JavaScript para JSON
JSON.stringify(objeto)

// JSON para JavaScript
response.json()
```

## 💡 Dicas para Iniciantes

1. **Sempre use try/catch**: Requisições podem falhar por problemas de rede
2. **Verifique o console**: Use `console.log()` para debugar
3. **Leia a documentação**: A [documentação da DummyJSON](https://dummyjson.com/docs/todos) explica todos os endpoints
4. **API Fake**: Note que a DummyJSON simula operações - os dados não persistem realmente
5. **Headers são importantes**: Sempre inclua `Content-Type: application/json` ao enviar JSON

## 🛠️ Como Testar

1. Abra o arquivo `index.html` no navegador
2. Abra o Console do Desenvolvedor (F12)
3. Veja as requisições sendo feitas na aba Network
4. Experimente adicionar, editar e deletar tarefas

## 📚 Recursos para Aprender Mais

- [MDN - Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
- [MDN - Async/Await](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function)
- [DummyJSON Docs](https://dummyjson.com/)
- [HTTP Methods](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)

## 🚀 Deploy

Este projeto está configurado para deploy no Vercel.
