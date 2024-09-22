import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Child from "./Child";

const OldUpdate = () => {
  const newUser = {
    name: "Zohan Ahmed",
    username: "zohan",
  };

  const handlePostRequest = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  };

  return (
    <div>
      Update
      <button onClick={handlePostRequest}>Post</button>
    </div>
  );
};

const addUser = (newUser) => {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  }).then((res) => res.json());
};

const Update = ({ count, setCOunt }) => {
  const [name, setName] = useState("");

  const { mutate, isSuccess, status } = useMutation({
    mutationFn: addUser,
  });

  console.log({ status });

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      Name:{" "}
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Input your name"
        value={name}
      />
      <button
        onClick={() =>
          mutate({
            name: name,
          })
        }
      >
        Submit
      </button>
      {isSuccess && (
        <span style={{ color: "green" }}>
          Your data has been submitted successfully!
        </span>
      )}
      <Child count={count} setCOunt={setCOunt} />
    </div>
  );
};

export default Update;
