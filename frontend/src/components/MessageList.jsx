import React, { useRef, useEffect } from 'react';  // Importa useRef e useEffect
import "../pages/styles/ChatPage.css";

const MessageList = ({ messages, socket }) => {
  // Cria uma referência que apontará para o elemento "âncora" no final da lista
  const bottomRef = useRef(null);

  // Sempre que o array de mensagens for atualizado, rola para o final
  useEffect(() => {
    // Se bottomRef.current existir, faz scroll para ele com uma animação suave
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]); // Executa sempre que 'messages' mudar

  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`${msg.authorId === socket.id ? "message-mine" : "message"}`}
        >
          <strong>{msg.username}: </strong> {msg.text}
        </div>
      ))}
      {/* Elemento âncora para scroll automático */}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
