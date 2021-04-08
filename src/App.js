import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import TimeComplexityInfo from "./Info/TimeComplexityInfo";
import ArraysInfo from "./Info/ArraysInfo";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route
          path="/timecomplexity"
          component={TimeComplexityInfo}
          exact
        ></Route>
        <Route path="/arrays" component={ArraysInfo} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
