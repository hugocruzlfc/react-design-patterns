import React from "react";

import "./App.css";
import HOC from "./HOC";
import TodoContainer from "./PresentationalContainer/TodoContainer";
import Provider from "./Provider";
import CompoundComponent from "./CompundComponents";

function App() {
  return (
    <div className="App">
      <HOC />
      <hr />
      <TodoContainer />
      <hr />
      <Provider />
      <hr />
      <CompoundComponent />
    </div>
  );
}

export default App;
