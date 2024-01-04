import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}
            <br />
            <strong>Email:</strong> {user.email}
            <br />
            <strong>Address:</strong> {user.address.street}, {user.address.city}
            ,
            <small>
              <i>{user.address.zipcode}</i>
            </small>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
