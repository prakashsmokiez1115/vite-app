import { useEffect, useState } from "react";

const Effect = () => {
  const [users, setUsers] = useState([]);
  const [num, setNum] = useState(10);

  // Runs once when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  function addVal() {
    setNum((prev) => prev + 1);
  }

  console.log("Render");

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>{num}</h2>
      <button onClick={addVal}>add</button>
    </div>
  );
};

export default Effect;
