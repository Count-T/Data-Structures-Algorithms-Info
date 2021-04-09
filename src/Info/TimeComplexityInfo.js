import React from "react";
import { Grid } from "@material-ui/core";

function TimeComplexityInfo() {
  return (
    <div>
      <h1>Time Complexity</h1>
      <Grid container>
        <Grid className="box" item xs={6}>
          Topic
        </Grid>
        <Grid className="box" item xs={6}>
          Definition
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          Big-O Notation
        </Grid>
        <Grid className="box" item xs={6}>
          Big-O Notation gives an upper bound of the complexity in the worst
          case, helping to quantify performance as the input size becomes
          arbitrarily large.
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          Common Big-O Notation Time Complexities
        </Grid>
        <Grid className="box" item xs={6}>
          Constant Time: O(1) <br />
          Logarithmic Time: O(log(n)) <br />
          Linear Time: O(n) <br />
          Linearithmic Time: O(nlog(n)) <br />
          Quadratic Time Time: O(n^2) <br />
          Cubic Time: O(n^3) <br />
          Exponential Time: O(b^n), b greater than 1 <br />
          Factorial Time: O(n!) <br />
        </Grid>
      </Grid>
    </div>
  );
}

export default TimeComplexityInfo;
