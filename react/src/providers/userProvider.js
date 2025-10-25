import { useEffect, useState } from "react";
import UserContext from "../context/userContext";

function UserProvider(props) {
  const { children } = props;
  const [users, setUsers] = useState([]);
  const [userLength, setUserLength] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setUserLength(data.users.length);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <UserContext.Provider value={{ users, userLength }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
