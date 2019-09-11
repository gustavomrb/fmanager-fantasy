import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import PlayerTable from "./PlayerTable";

const App = () => {
  return (
    <React.StrictMode>
      <div className="container">
        <NavBar />
        <PlayerTable />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
