import './css/style.css';
import { Routes,Route,Link } from "react-router-dom";
import Logins from "./components/Logins";
import Main from "./components/Main";


function App() {
  const selog = '0';
  return (
    <div className="App"> 
    <Routes>
      <Route path="/" element={<Logins/>} />
      <Route path="Login" element={<Logins/>} />
      <Route path="Main" element={<Main/>} />
    </Routes>
    </div>
  );
}

export default App;
