// Seems like the place where we store our components and tell them how to structure

import React from "react"; // As ever...
import Card from "./card"; // The new component

function App() {
  return (
    //This is cool! We have a div here, not in index.html, and we style it anyway on index.css
    <div className="wrapper">
      <Card />
    </div>
  );
}

export default App; // As ever, we will export that page, and this one goes inside the index.jsx
