import { Routes, NavLink, Route } from "react-router-dom";
import Home from "../Pages/Home";
import TableTask from "../Pages/TableTask";
import CreateTask from "../Pages/CreateTask";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavLink to="/">Список задач</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<TableTask />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
