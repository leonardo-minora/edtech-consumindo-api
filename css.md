# Tutorial de CSS3 para Iniciantes

## 📚 Introdução

Bem-vindo ao tutorial de CSS3! Este guia foi criado para explicar os conceitos de CSS utilizados no arquivo `tarefas.css` do nosso Gerenciador de Tarefas. Se você está começando no mundo do desenvolvimento web, este é o lugar certo!

### O que é CSS?

CSS (Cascading Style Sheets) é a linguagem que usamos para estilizar páginas HTML. Enquanto o HTML define a estrutura do conteúdo, o CSS define como esse conteúdo deve aparecer visualmente.

---

## 1. Reset CSS e Box Model

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### O que está acontecendo aqui?

**Seletor Universal (`*`)**
- O asterisco seleciona TODOS os elementos da página
- É útil para aplicar estilos globais

**`margin: 0` e `padding: 0`**
- Remove as margens e espaçamentos internos padrão de todos os elementos
- Navegadores diferentes aplicam espaçamentos padrão diferentes
- Este reset garante consistência entre navegadores

**`box-sizing: border-box`**
- Muda a forma como o tamanho dos elementos é calculado
- Por padrão, `width` e `height` não incluem padding e border
- Com `border-box`, o padding e border são incluídos no tamanho total
- **Exemplo**: Se você definir `width: 300px` com `padding: 20px`, o elemento terá 300px de largura total (não 340px)

---

## 2. Estilização do Body

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}
```

### Explicação:

**`font-family`**
- Define a fonte do texto
- Lista múltiplas fontes como fallback (se a primeira não estiver disponível, usa a segunda, etc.)
- `sans-serif` é uma família genérica de fontes

**`background: linear-gradient()`**
- Cria um gradiente de cores
- `135deg`: ângulo do gradiente (diagonal)
- `#667eea 0%`: cor inicial (roxo-azulado) no início
- `#764ba2 100%`: cor final (roxo) no fim
- 💡 **Dica**: Experimente mudar os ângulos e cores!

**`min-height: 100vh`**
- `vh` significa "viewport height" (altura da janela)
- `100vh` = 100% da altura da tela
- Garante que o body sempre ocupe pelo menos a altura completa da janela

**`padding: 20px`**
- Adiciona espaçamento interno de 20 pixels em todos os lados

---

## 3. Container Principal

```css
.container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
```

### Explicação:

**Seletor de Classe (`.container`)**
- O ponto (`.`) indica uma classe
- Aplica-se a elementos com `class="container"`

**`max-width: 600px`**
- Largura máxima de 600 pixels
- Pode ser menor que isso, mas nunca maior
- Ótimo para responsividade!

**`margin: 0 auto`**
- `0`: margem superior e inferior
- `auto`: margem esquerda e direita automática
- **Resultado**: centraliza o elemento horizontalmente

**`border-radius: 15px`**
- Arredonda os cantos do elemento
- Quanto maior o valor, mais arredondado

**`box-shadow`**
- Adiciona sombra ao elemento
- Formato: `horizontal vertical blur spread color`
- `0 10px 30px`: sombra 10px abaixo, com desfoque de 30px
- `rgba(0, 0, 0, 0.3)`: preto com 30% de opacidade

---

## 4. Títulos

```css
h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}
```

### Explicação:

**`text-align: center`**
- Alinha o texto no centro
- Outras opções: `left`, `right`, `justify`

**`color: #333`**
- Define a cor do texto
- `#333` é um cinza escuro (hexadecimal)

**`margin-bottom: 30px`**
- Adiciona margem apenas na parte inferior
- Cria espaço entre o título e o próximo elemento

---

## 5. Flexbox - Container do Formulário

```css
.form-container {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}
```

### Explicação:

**`display: flex`**
- Ativa o Flexbox!
- Transforma o elemento em um container flexível
- Os filhos diretos se tornam itens flex
- Por padrão, os itens ficam em linha (horizontal)

**`gap: 10px`**
- Espaçamento entre os itens flex
- Muito mais fácil que usar margins!

---

## 6. Input de Tarefa

```css
#taskInput {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
}
```

### Explicação:

**Seletor de ID (`#taskInput`)**
- O hashtag (`#`) indica um ID
- Aplica-se a elementos com `id="taskInput"`
- IDs devem ser únicos na página

**`flex: 1`**
- O item flex cresce para ocupar o espaço disponível
- Se houver 2 itens com `flex: 1`, cada um ocupa 50%
- Perfeito para inputs que devem ocupar o espaço restante

**`border: 2px solid #ddd`**
- Formato: `largura estilo cor`
- `2px`: espessura da borda
- `solid`: borda sólida (outras opções: `dashed`, `dotted`)
- `#ddd`: cinza claro

**`transition: border-color 0.3s`**
- Cria animações suaves
- Quando a cor da borda mudar, a mudança levará 0.3 segundos
- Torna a experiência mais fluida

---

## 7. Estado de Foco (Focus)

```css
#taskInput:focus {
    outline: none;
    border-color: #667eea;
}
```

### Explicação:

**Pseudo-classe `:focus`**
- Aplica estilos quando o elemento está focado
- Focado = quando você clica ou usa Tab para selecionar

**`outline: none`**
- Remove o contorno padrão do navegador
- ⚠️ **Importante**: Sempre forneça uma alternativa visual (como mudança de cor)

**`border-color: #667eea`**
- Muda a cor da borda para roxo-azulado
- Indica visualmente que o campo está ativo
- A transição faz isso suavemente!

---

## 8. Botões

```css
button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
}
```

### Explicação:

**`padding: 12px 24px`**
- Primeiro valor: padding vertical (cima e baixo)
- Segundo valor: padding horizontal (esquerda e direita)

**`cursor: pointer`**
- Muda o cursor para "mãozinha" ao passar sobre o botão
- Indica que o elemento é clicável

**`transition: all 0.3s`**
- Anima TODAS as propriedades que mudarem
- Útil quando múltiplas propriedades mudam no hover

---

## 9. Hover - Efeitos ao Passar o Mouse

```css
#addBtn:hover {
    background: #5568d3;
    transform: translateY(-2px);
}
```

### Explicação:

**Pseudo-classe `:hover`**
- Aplica estilos quando o mouse está sobre o elemento
- Cria interatividade visual

**`transform: translateY(-2px)`**
- Move o elemento 2 pixels para cima
- `translateY`: translação no eixo Y (vertical)
- Valores negativos: para cima
- Valores positivos: para baixo
- Cria um efeito de "levitação"

---

## 10. Cores dos Botões

```css
#addBtn {
    background: #667eea;
    color: white;
}

#cancelBtn {
    background: #e74c3c;
    color: white;
}
```

### Explicação:

**`background`**
- Define a cor de fundo
- Pode ser cor sólida, gradiente ou imagem

**`color`**
- Define a cor do texto
- `white` é uma palavra-chave CSS
- Também pode ser `#ffffff` ou `rgb(255, 255, 255)`

**💡 Convenção de Cores:**
- Azul/Roxo geralmente indica ação primária
- Vermelho geralmente indica ação de cancelar/deletar

---

## 11. Container de Tarefas

```css
.tasks-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
```

### Explicação:

**`flex-direction: column`**
- Muda a direção do flex de horizontal (padrão) para vertical
- Os itens ficam empilhados verticalmente
- Perfeito para listas!

---

## 12. Item de Tarefa

```css
.task-item {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: all 0.3s;
}
```

### Explicação:

**`align-items: center`**
- Alinha os itens flex verticalmente no centro
- Funciona no eixo perpendicular ao `flex-direction`
- Garante que checkbox, texto e botões fiquem alinhados

---

## 13. Hover em Tarefas

```css
.task-item:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

### Explicação:

**`transform: translateX(5px)`**
- Move o elemento 5 pixels para a direita
- `translateX`: translação no eixo X (horizontal)
- Cria um efeito de "deslizar" ao passar o mouse

---

## 14. Estado de Tarefa Completada

```css
.task-item.completed {
    opacity: 0.6;
}
```

### Explicação:

**Seletor Combinado (`.task-item.completed`)**
- Sem espaço entre as classes = elemento deve ter AMBAS as classes
- Aplica-se a `<div class="task-item completed">`

**`opacity: 0.6`**
- Define a transparência do elemento
- Valores de 0 (invisível) a 1 (totalmente visível)
- 0.6 = 60% visível, 40% transparente
- Indica visualmente que a tarefa está concluída

---

## 15. Texto da Tarefa Completada

```css
.task-item.completed .task-text {
    text-decoration: line-through;
    color: #999;
}
```

### Explicação:

**Seletor Descendente (`.task-item.completed .task-text`)**
- Espaço entre seletores = elemento descendente
- Aplica-se a `.task-text` que está dentro de `.task-item.completed`

**`text-decoration: line-through`**
- Adiciona uma linha atravessando o texto
- ~~assim~~
- Outras opções: `underline`, `overline`, `none`

---

## 16. Propriedades Flex

```css
.task-text {
    flex: 1;
    font-size: 16px;
    color: #333;
}
```

### Explicação:

**`flex: 1` (novamente)**
- O texto da tarefa ocupa todo o espaço disponível
- Empurra os botões para a direita
- Cria um layout equilibrado

---

## 17. Container de Ações

```css
.task-actions {
    display: flex;
    gap: 10px;
}
```

### Explicação:

**Flexbox Aninhado**
- Você pode usar flexbox dentro de flexbox!
- Organiza os botões de editar e deletar horizontalmente
- O `gap` cria espaço entre eles

---

## 18. Checkbox Personalizado

```css
.task-item input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
}
```

### Explicação:

**Seletor de Atributo (`[type="checkbox"]`)**
- Seleciona elementos com um atributo específico
- Neste caso, inputs do tipo checkbox
- Muito específico e útil!

---

## 19. Estilos de Estados

```css
.loading, .empty {
    text-align: center;
    color: #999;
    padding: 20px;
    font-style: italic;
}
```

### Explicação:

**Múltiplos Seletores (`,`)**
- A vírgula aplica os mesmos estilos a múltiplos seletores
- Evita repetição de código
- `.loading` e `.empty` terão os mesmos estilos

**`font-style: italic`**
- Deixa o texto em itálico
- Útil para mensagens de status

---

## 20. Media Queries - Responsividade

```css
@media (max-width: 600px) {
    .container {
        padding: 20px;
    }
    
    .form-container {
        flex-direction: column;
    }
    
    .task-item {
        flex-wrap: wrap;
    }
}
```

### Explicação:

**`@media (max-width: 600px)`**
- Media query = "consulta de mídia"
- Aplica estilos apenas quando a condição é verdadeira
- `max-width: 600px`: quando a tela tem até 600px de largura
- **Responsividade**: adaptar o design para diferentes tamanhos de tela

**`flex-direction: column` no mobile**
- Empilha os elementos do formulário verticalmente
- Input e botões ficam um embaixo do outro
- Melhor experiência em telas pequenas

**`flex-wrap: wrap`**
- Permite que itens flex "quebrem" para a próxima linha
- Por padrão, flex tenta espremer tudo em uma linha
- `wrap`: se não couber, vai para a próxima linha

---

## 🎯 Conceitos Principais Aprendidos

### 1. Seletores CSS
- **Universal**: `*`
- **Elemento**: `body`, `h1`, `button`
- **Classe**: `.container`, `.task-item`
- **ID**: `#taskInput`, `#addBtn`
- **Pseudo-classes**: `:hover`, `:focus`
- **Atributo**: `[type="checkbox"]`
- **Combinadores**: `.task-item.completed`, `.task-item .task-text`

### 2. Box Model
- `margin`: espaço externo
- `padding`: espaço interno
- `border`: borda
- `box-sizing`: modo de cálculo do tamanho

### 3. Layout com Flexbox
- `display: flex`: ativa flexbox
- `flex-direction`: direção dos itens (row/column)
- `align-items`: alinhamento vertical
- `gap`: espaçamento entre itens
- `flex: 1`: crescimento do item

### 4. Cores e Fundos
- Cores hexadecimais: `#667eea`
- Palavras-chave: `white`
- RGBA: `rgba(0, 0, 0, 0.3)`
- Gradientes: `linear-gradient()`

### 5. Transições e Animações
- `transition`: animações suaves
- `transform`: transformações (translateX, translateY)
- `:hover`: efeitos ao passar o mouse

### 6. Responsividade
- Unidades relativas: `vh`, `%`
- Media queries: `@media`
- Layout adaptativo com flexbox

### 7. Efeitos Visuais
- `border-radius`: cantos arredondados
- `box-shadow`: sombras
- `opacity`: transparência
- `text-decoration`: decoração de texto

---

## 💡 Dicas para Praticar

1. **Experimente mudar cores**: Troque os valores hexadecimais e veja o resultado
2. **Brinque com transições**: Altere os tempos de `0.3s` para `1s` ou `0.1s`
3. **Teste transforms**: Tente `rotate()`, `scale()`, outros valores de translate
4. **Ajuste espaçamentos**: Mude padding, margin e gap para entender melhor
5. **Modifique o gradiente**: Troque ângulos e cores
6. **Teste responsividade**: Altere o breakpoint de `600px` para outros valores

---

## 📚 Recursos para Continuar Aprendendo

- [MDN Web Docs - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Jogo para aprender Flexbox
- [Can I Use](https://caniuse.com/) - Verificar compatibilidade de recursos CSS

---

## ✅ Conclusão

Parabéns! Você agora entende todos os conceitos CSS usados no arquivo `tarefas.css`. Este é um excelente exemplo de CSS moderno, usando:

- Reset CSS para consistência
- Flexbox para layouts flexíveis e responsivos
- Transições para interações suaves
- Media queries para adaptação a diferentes telas
- Boas práticas de organização e nomenclatura

Continue praticando e experimentando com esses conceitos. CSS é uma linguagem visual, então a melhor forma de aprender é fazendo e vendo os resultados! 🚀

---

**Criado para o projeto Gerenciador de Tarefas**
*Aprenda fazendo, pratique codificando!* 💻✨
