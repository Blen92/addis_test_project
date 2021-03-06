import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddUser from "./pages/AddUser";
import UserList from "./pages/UserList";
import EditUser from "./pages/EditUser";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserInfo />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/editUser/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
