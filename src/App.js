import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List/List";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <List />
      </React.Fragment>
    );
  }
}

export default App;
