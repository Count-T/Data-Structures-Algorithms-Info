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
      <Grid container spacing={24} align="center">
        <Grid item md={4}>
          <TimeComplexity />
        </Grid>
        <Grid item md={4}>
          <Arrays />
        </Grid>
        <Grid item md={4}>
          <LinkedLists />
        </Grid>
      </Grid>
      <br />
      <Grid container align="center">
        <Grid item md={4}>
          <Stacks />
        </Grid>
        <Grid item md={4}>
          <Queues />
        </Grid>
        <Grid item md={4}>
          <PriorityQueues />
        </Grid>
      </Grid>
      <br />
      <Grid container align="center">
        <Grid item md={4}>
          <BinarySearchTrees />
        </Grid>
        <Grid item md={4}>
          <HashTables />
        </Grid>
        <Grid item md={4}>
          <FenwickTrees />
        </Grid>
      </Grid>
    </div>
  );
}

export default CardsLayout;
