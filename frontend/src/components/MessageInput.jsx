import React, { useState } from 'react'
import "../pages/styles/ChatPage.css"

const MessageInput = ({socket, username}) => {
  const [message, setMessage] = useState(" ")

  const handleSendMessage = () =>{
    if(!message.trim()) return;
    
    //Envia mensagem para o servidor
    socket.emit("send_message", {
      username, 
      text: message,
      authorId: socket.id
    });

    //Limpa o cache do input
    setMessage(' ');
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        handleSendMessage();
    }
};

  return (
    <div className="message-input">
      <input 
      type="text" 
      placeholder="Digite sua mensagem" 
      value={message} 
      onChange={(e)=> setMessage(e.target.value)}
      onKeyDown={handleKeyDown}
      />
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  )
}

export default MessageInput