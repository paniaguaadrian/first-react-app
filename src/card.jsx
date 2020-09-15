// We create a jsx file just for the Card, for THAT component

import React, { useState, useEffect } from "react";
// ! We change that import because we are working with the DEV API and we need useState and useEffect
// useState () hook allows one to declare a state variable inside a function.
// useEffect () hook allows functional components to manipulate DOM elements by executing a callback before each render.

function Card(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      let username = props.username;
      let dev_data = await fetch(
        `https://dev.to/api/users/by_username?url=${username}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setUser(dev_data);
    }

    fetchData();
  }, []);

  return (
    <div className="card">
      <div className="user-image">
        <img src={user.profile_image} alt="User Profile"></img>
      </div>

      <div className="user-info">
        <div className="name">{user.name}</div>
        <div className="handle">{user.username}</div>
        <div className="summary">{user.summary}</div>
      </div>
      <div className="location">{user.location}</div>
    </div>
  );
}

export default Card;
// Like and </html> tag, we need to export at final of the page our component
