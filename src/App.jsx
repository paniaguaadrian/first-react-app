// Seems like the place where we store our components and tell them how to structure

import React from "react"; // As ever...
import Card from "./card"; // The new component
import Header from "./header";

function App() {
  return (
    //This is cool! We have a div here, not in index.html, and we style it anyway on index.css
    <div>
      <div className="header">
        <div className="header__container">
          <Header />
        </div>
      </div>
      <div className="wrapper">
        <Card username="paniaguaadrian" />
        <Card username="graciegregory" />
        <Card username="ishandeveloper" />
      </div>
    </div>
  );
}

export default App; // As ever, we will export that page, and this one goes inside the index.jsx
