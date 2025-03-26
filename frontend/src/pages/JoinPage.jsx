import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import io from 'socket.io-client'
import "./styles/JoinPage.css"

const JoinPage = ({setSocket}) => {

  const navigate = useNavigate()
  const usernameRef = useRef()

  const handleJoin = async ()=>{
    const username = usernameRef.current.value

    if(!username.trim()) return alert("Digite um nome válido!");

      const socket = io.connect('http://localhost:3000', {
          reconnection: false // Impede reconexão automática
      })
    
    //Armazena a conexão do socket no estado global
    setSocket(socket)
  
    socket.emit("set_username", username)


    navigate("/chat", {state: {username}}); // Passando o nome do usuário via state
  }  


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        handleJoin();
    }
};

  return (
    <div className='join-container'>
        <h1>Entre no chat</h1>
        <input 
        type="text" 
        ref={usernameRef} placeholder='Digite seu nome' 
        onKeyDown={handleKeyDown}/>
        <button onClick={()=>handleJoin()}>Entrar</button>
    </div>
  )
}

export default JoinPage