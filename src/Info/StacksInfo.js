import React from "react";
import { Grid } from "@material-ui/core";
function ArraysInfo() {
  return (
    <div>
      <h1>Stacks</h1>
      <Grid container>
        <Grid className="box" item xs={6}>
          Topic
        </Grid>
        <Grid className="box" item xs={6}>
          Definition
        </Grid>
      </Grid>
    </div>
  );
}

export default ArraysInfo;
