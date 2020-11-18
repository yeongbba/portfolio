import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Introduction from "./components/Introduction/Introduction";
import WorkedAsAE from "./components/WorkedAsAE/WorkedAsAE";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      {/* <Home /> */}
      {/* <Introduction /> */}
      <WorkedAsAE />
    </div>
  );
}

export default App;
