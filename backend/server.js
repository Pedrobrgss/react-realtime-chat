const express = require("express")
const http = require("http")
const {Server} = require("socket.io")

// Criação da aplicação Express
const app = express()

//criação do servidor HTTP baseado na aplicação Express
const server = http.createServer(app)

//configuração do Socket.io 
const io = new Server(server, {
    cors: {
        origin: "*", //permite conexões de qualquer origem 
        methods:["GET", "POST"] //Permite requisições GET e POST
    }
})

//Objeto para armazenar os usuários conectados
let users = {}

//Evento disparado quando um novo cliente se conecta 
io.on("connection", (socket) => {
    console.log(`Usuário conectado: ${socket.id}`) //Exibe o id do usuário 

    // Remove conexões antigas que possam estar persistindo
    if (users[socket.id]) {
        socket.disconnect()
        return
    }

    //Captura o nome do usuário ao entrar
    socket.on("set_username", (username)=> {
        users[socket.id] = username //armazena o nome do usuário 
        console.log(`${username} entrou no chat!`); // Exibe no console do servidor

         // Atualiza a lista de usuários conectados para todos os clientes
         io.emit("userList", Object.values(users));
    })

    socket.on("send_message", (message) => {
        io.emit("receive_message", message)
    })

    //Evento quando o usuário se desconecta
    socket.on("disconnect", ()=>{
        console.log(`Usuário desconectado: ${users[socket.id] || socket.id}`)
        delete users[socket.id] //Remove o usuário da lista 

        //Atualiza a lista de usuários para todos os clientes 
        io.emit("userList", Object.values(users))
    })
})

// Inicia o servidor na porta 3000
server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });