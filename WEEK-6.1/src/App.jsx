// App.jsx
import { useState } from "react";
import Users from "./components/Users";
import UserCount from "./components/UserCount";

export default function App() {
  const [users, setUsers] = useState([]);

  const addUser = (name) => {
    setUsers([...users, name]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">App</h1>

      <Users addUser={addUser} />
      <UserCount count={users.length} />
    </div>
  );
}