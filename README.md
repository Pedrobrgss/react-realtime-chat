# 💬 Chat em Tempo Real  

Este é um projeto de **chat em tempo real** desenvolvido com **React.js** e **Vite** no frontend e **Node.js** com **Socket.io** no backend. Ele permite que os usuários enviem e recebam mensagens instantaneamente, exibindo a lista de usuários conectados.

---

## 🚀 **Funcionalidades**  

✅ Comunicação em tempo real via **WebSockets**  
✅ Exibição de lista de usuários conectados  
✅ Envio e recebimento de mensagens instantâneas  
✅ Backend construído com **Node.js** e **Socket.io**  
✅ Frontend moderno com **React.js** e **Vite**  

---

## 🛠️ **Tecnologias Utilizadas**  

### 🌐 **Frontend**  
- **React.js** – Biblioteca para construção de interfaces interativas  
- **Vite** – Ferramenta rápida para empacotamento do projeto  
- **Socket.io-client** – Biblioteca para comunicação com WebSockets  

### 🔙 **Backend**  
- **Node.js** – Ambiente de execução JavaScript  
- **Express.js** – Framework para criação de servidores HTTP  
- **Socket.io** – Biblioteca para comunicação em tempo real via WebSockets  

---
## 🔌 O que é WebSocket?
O WebSocket é um protocolo de comunicação que permite a troca de mensagens em tempo real entre um cliente (navegador) e um servidor. Diferente do HTTP, que exige uma nova conexão a cada requisição, o WebSocket mantém uma conexão aberta e bidirecional, permitindo comunicação contínua e eficiente.

No nosso projeto, utilizamos a biblioteca Socket.io para facilitar a implementação do WebSocket.

## 🚀 Como Funciona o WebSocket neste Projeto?
### 1️⃣ Conexão Estabelecida:

Quando um usuário acessa o chat, o frontend se conecta ao servidor via WebSocket.

O backend registra o usuário e envia a lista de usuários conectados para todos.

### 2️⃣ Envio de Mensagens:

O usuário digita e envia uma mensagem.

O frontend usa socket.emit("send_message", mensagem) para enviar ao servidor.

O servidor recebe e repassa a mensagem para todos os usuários conectados com io.emit("receive_message", mensagem).

### 3️⃣ Desconexão:

Se um usuário sair, o servidor detecta a desconexão e remove o usuário da lista.

A lista de usuários é atualizada para todos os clientes em tempo real.

## 🔗 Principais Eventos do WebSocket neste Projeto
| Evento            | Descrição                                      |
|------------------|----------------------------------------------|
| `connection`     | Um usuário se conecta ao servidor            |
| `set_username`   | Define o nome do usuário conectado           |
| `send_message`   | Envia uma mensagem para o chat               |
| `receive_message` | Recebe uma mensagem enviada no chat         |
| `userList`       | Atualiza a lista de usuários conectados      |
| `disconnect`     | Evento disparado quando o usuário sai do chat |

---
## 📂 **Estrutura do Repositório**  

- **📂 backend/** → Contém o servidor **Node.js** com **Socket.io**  
- **📂 frontend/** → Aplicação **React.js** com Vite para interface do usuário  

---

## 🚦 **Como Rodar o Projeto**  
### 🔻 1. Clonar o Repositório  
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```


### 🔙 2. Configurar e Rodar o Backend
  1.Acesse a pasta do backend:
    ```bash
    cd backend
    ```
  2.Instale as dependências:
  ```bash
  npm install
  ```
  3.Inicie o servidor:
  ```bash
  npm run dev
  ```


### 🌐 3. Configurar e Rodar o Frontend
  1.Acesse a pasta do frontend:
  ```bash
  cd frontend
  ```
  2.Instale as dependências:
  ```bash
  npm install
  ```
 3.Inicie o servidor de desenvolvimento:
  ```bash
  npm run dev
  ```
---
## 👤 Autor
Feito por **Pedro Borges Alves**.

📧 Entre em contato: pedrobrgss1@gmail.com

🔗 [LinkedIn](www.linkedin.com/in/pedro-borges-alves-ab328a290)

📂 [GitHub](https://github.com/Pedrobrgss)
