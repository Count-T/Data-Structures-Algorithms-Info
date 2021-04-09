import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import TimeComplexityInfo from "./Info/TimeComplexityInfo";
import ArraysInfo from "./Info/ArraysInfo";
import BinarySearchTreesInfo from "./Info/BinarySearchTreesInfo";
import FenwickTreesInfo from "./Info/FenwickTreesInfo";
import HashTables from "./Info/HashTablesInfo";
import LinkedLists from "./Info/LinkedListsInfo";
import PriorityQueues from "./Info/PriorityQueuesInfo";
import Stacks from "./Info/StacksInfo";
import Queues from "./Info/QueuesInfo";
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
        <Route
          path="/binarysearchtrees"
          component={BinarySearchTreesInfo}
          exact
        ></Route>
        <Route path="/fenwicktrees" component={FenwickTreesInfo} exact></Route>
        <Route path="/hashtables" component={HashTables} exact></Route>
        <Route path="/linkedlists" component={LinkedLists} exact></Route>
        <Route path="/priorityqueues" component={PriorityQueues} exact></Route>
        <Route path="/stacks" component={Stacks} exact></Route>
        <Route path="/queues" component={Queues} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
