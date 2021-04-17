import React from "react";
import TimeComplexity from "./Cards/TimeComplexity";
import Arrays from "./Cards/Arrays";
import LinkedLists from "./Cards/LinkedLists";
import Stacks from "./Cards/Stacks";
import Queues from "./Cards/Queues";
import PriorityQueues from "./Cards/PriorityQueues";
import BinarySearchTrees from "./Cards/BinarySearchTrees";
import HashTables from "./Cards/HashTables";
import FenwickTrees from "./Cards/FenwickTrees";
import { Grid } from "@material-ui/core";
import "./App.css";
function CardsLayout() {
  return (
    <div className="cards">
      <Grid container>
        <Grid item xs={4}>
          <TimeComplexity />
        </Grid>
        <Grid item xs={4}>
          <Arrays />
        </Grid>
        <Grid item xs={4}>
          <LinkedLists />
        </Grid>
        <Grid item xs={4}>
          <Stacks />
        </Grid>
        <Grid item xs={4}>
          <Queues />
        </Grid>
        <Grid item xs={4}>
          <PriorityQueues />
        </Grid>
        <Grid item xs={4}>
          <BinarySearchTrees />
        </Grid>
        <Grid item xs={4}>
          <HashTables />
        </Grid>
        <Grid item xs={4}>
          <FenwickTrees />
        </Grid>
      </Grid>
    </div>
  );
}

export default CardsLayout;
