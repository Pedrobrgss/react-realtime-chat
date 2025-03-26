import React, { useEffect, useState } from 'react'
import UserList from '../components/UserList'
import { useLocation } from 'react-router-dom'
import MessageInput from '../components/MessageInput'
import MessageList from '../components/MessageList'
import "./styles/ChatPage.css"


const ChatPage = ({socket}) => {
  const location = useLocation()
  const username = location.state?.username || "Anônimo" //obtém o nome do usuário ou define como "Anônimo"

  const[users, setUsers] = useState([]);
  const[messages,setMessages] = useState([])

  useEffect(() => {
    //Garante que o socket está disponível antes de emitir evento
    if (!socket) return 

    //Atualiza a lista de usuários conectados 
    socket.on("userList", (userList) =>{
      setUsers(userList)
    })

    //Recebe mensagens do servidor 
    socket.on("receive_message", (message)=>{
      //está atualizando o estado messages adicionando uma nova mensagem ao final da lista.
      setMessages((prevMessages)=>[...prevMessages, message])
    })

    return () => {
      socket.off("userList")
      socket.off("receive_message");
    }

  }, [socket, username]);


  return (
    <div className="chat-container">
      <h1 className="chat-header">Chat</h1>
      <div className="chat-body">
        <UserList users={users} />
        <div className="message-container">
          {/* Área onde as mensagens aparecem */}
          <div className="messages">
            <MessageList messages={messages} socket={socket} />
          </div>
          {/* Área do input e botão no rodapé do container */}
          <div className="message-input">
            <MessageInput socket={socket} username={username} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage