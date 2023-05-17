import { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h5>React Crud Using Jsonplaceholder</h5>
      {users.map((user) => (
        <User id={user.id} key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default App;
