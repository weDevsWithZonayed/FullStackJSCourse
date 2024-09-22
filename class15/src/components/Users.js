import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
};

const Users = () => {
  const { data, isLoading, error, refetch, isRefetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isRefetching) {
    return "data refetching...";
  }

  if (isLoading) {
    return "loading...";
  }

  if (error) {
    return "Error happened...";
  }

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Refect</button>
    </div>
  );
};

export default Users;
