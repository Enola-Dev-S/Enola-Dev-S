import './css/style.css';
import './css/App.css';
import { Routes,Route,Link } from "react-router-dom";
import Logins from "./components/Logins";
import Main from "./components/Main";
import Register from './components/Register';


function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route path="/" element={<Logins/>} />
      <Route path="Login" element={<Logins/>} />
      <Route path="Register" element={<Register/>} />
      <Route path="Main" element={<Main/>} />
    </Routes>
    </div>
  );
}

export default App;
