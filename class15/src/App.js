import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import Users from "./components/Users";
import Update from "./components/Update";

function OldApp() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>User List</h1>
      {!!error && <div style={{ color: "red" }}>{error}</div>}
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Name: {user.name}, Email: {user.email}, company:{" "}
              {user.company.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const App = () => {
  const [count, setCOunt] = useState(0);

  return (
    <div>
      <div>
        <Users />
      </div>
      <hr />
      <div>User</div>
      <hr />
      <div>
        <Update count={count} setCOunt={setCOunt} />
      </div>
    </div>
  );
};

export default App;
