import "./App.css";
import UserList from "./Component/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./Component/UserDetails";

function App() {
  return (
    <div className="App">
       
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/details/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;