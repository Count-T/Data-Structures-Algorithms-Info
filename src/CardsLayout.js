import React from "react";
import TimeComplexity from "./Cards/TimeComplexity";
import Arrays from "./Cards/Arrays";
import { Grid } from "@material-ui/core";
function CardsLayout() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <TimeComplexity />
      </Grid>
      <Grid item xs={4}>
        <Arrays />
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}

export default CardsLayout;
