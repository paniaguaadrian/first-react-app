// Looks like the main jsx

import React from "react"; // This is every jsx file
import ReactDOM from "react-dom"; // This is the virtual DOM from React
import App from "./App"; // The place were our components are
import "./index.css"; // Where we have the style of our components

ReactDOM.render(<App />, document.getElementById("root")); // root is the only dive inside the index.html
