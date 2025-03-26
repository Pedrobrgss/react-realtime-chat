import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinPage from "./pages/JoinPage";
import ChatPage from "./pages/ChatPage";
import { useState } from "react";

function App() {
  const[socket,setSocket] = useState(null)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<JoinPage setSocket = {setSocket}/>} />
          <Route path="/chat" element={<ChatPage socket = {socket} />} />
       </Routes>
    </Router>
    </>
  )
}

export default App
