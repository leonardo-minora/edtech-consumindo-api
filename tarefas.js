// Variáveis globais
let tasks = [
];
let editingTaskId = null;

// API Base URL
const API_URL = 'https://dummyjson.com/todos';

// Carregar tarefas quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

/**
 * Carrega todas as tarefas da API
 */
async function loadTasks() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        tasks = data.todos || [];
        renderTasks();
    } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
        document.getElementById('tasksContainer').innerHTML = 
            '<p class="empty">Erro ao carregar tarefas. Tente novamente mais tarde.</p>';
    }
}

/**
 * Escapa caracteres HTML para prevenir XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Renderiza as tarefas na tela
 */
function renderTasks() {
    const container = document.getElementById('tasksContainer');
    
    if (tasks.length === 0) {
        container.innerHTML = '<p class="empty">Nenhuma tarefa encontrada. Adicione uma nova!</p>';
        return;
    }
    
    container.innerHTML = tasks.map(task => `
        <div class="task-item ${task.completed ? 'completed' : ''}">
            <input 
                type="checkbox" 
                ${task.completed ? 'checked' : ''} 
                onchange="toggleTask(${task.id})"
            >
            <span class="task-text">${escapeHtml(task.todo)}</span>
            <div class="task-actions">
                <button class="edit-btn" onclick="editTask(${task.id})">Editar</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Deletar</button>
            </div>
        </div>
    `).join('');
}

/**
 * Adiciona uma nova tarefa ou atualiza uma existente
 */
async function addOrUpdateTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (!taskText) {
        alert('Por favor, digite uma tarefa!');
        return;
    }
    
    if (editingTaskId) {
        // Atualizar tarefa existente
        await updateTask(editingTaskId, taskText);
    } else {
        // Adicionar nova tarefa
        await addTask(taskText);
    }
    
    input.value = '';
    editingTaskId = null;
    updateButtons();
}

/**
 * Adiciona uma nova tarefa via API
 */
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
        
        // Como a API é fake, adicionamos localmente
        tasks.unshift(newTask);
        renderTasks();
        
        // alert('Tarefa adicionada com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
        alert('Erro ao adicionar tarefa!');
    }
}

/**
 * Atualiza uma tarefa existente via API
 */
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
        
        // Atualizar localmente
        const index = tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            tasks[index].todo = taskText;
            renderTasks();
        }
        
        // alert('Tarefa atualizada com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
        alert('Erro ao atualizar tarefa!');
    }
}

/**
 * Marca/desmarca uma tarefa como concluída
 */
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
        
        // Atualizar localmente
        task.completed = !task.completed;
        renderTasks();
    } catch (error) {
        console.error('Erro ao atualizar status:', error);
    }
}

/**
 * Prepara a edição de uma tarefa
 */
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    
    document.getElementById('taskInput').value = task.todo;
    editingTaskId = id;
    updateButtons();
    
    // Focar no input
    document.getElementById('taskInput').focus();
}

/**
 * Cancela a edição
 */
function cancelEdit() {
    document.getElementById('taskInput').value = '';
    editingTaskId = null;
    updateButtons();
}

/**
 * Atualiza os botões de ação
 */
function updateButtons() {
    const addBtn = document.getElementById('addBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    
    if (editingTaskId) {
        addBtn.textContent = 'Atualizar';
        cancelBtn.style.display = 'block';
    } else {
        addBtn.textContent = 'Adicionar';
        cancelBtn.style.display = 'none';
    }
}

/**
 * Deleta uma tarefa via API
 */
async function deleteTask(id) {
    if (!confirm('Tem certeza que deseja deletar esta tarefa?')) {
        return;
    }
    
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        // Remover localmente
        tasks = tasks.filter(t => t.id !== id);
        renderTasks();
        
        // alert('Tarefa deletada com sucesso!');
    } catch (error) {
        console.error('Erro ao deletar tarefa:', error);
        alert('Erro ao deletar tarefa!');
    }
}

