import React from "react"
import "../pages/styles/ChatPage.css"

const UserList = ({ users }) => {
  return (
    <div className="user-list">
        <h3>Usuários Online</h3>
        <ul>
          {users.length > 0 ? (
            users.map((user,index)=> <li key={index}>{user}</li>)
          ) : (
          <li>Nenhum usuário conectado</li>
        )}

        </ul>
    </div>
  )
}

export default UserList