// We create a jsx file just for the Card, for THAT component

import React from "react"; // As ever...

function Card() {
  return (
    <div className="card">
      <div className="user-image">
        <img src="user.png" alt="User Profile"></img>
      </div>

      <div className="user-info">
        <div className="name">John Doe</div>
        <div className="handle">@johndoe</div>
        <div className="summary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
      <div className="location">New York</div>
    </div>
  );
}

export default Card;
// Like and </html> tag, we need to export at final of the page our component
