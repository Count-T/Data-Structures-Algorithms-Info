import React from "react";
import { Grid } from "@material-ui/core";
export default function ArraysInfo() {
  return (
    <div>
      <h1>Static and Dynamic Arrays</h1>
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
          <h1>Static Array Intro</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/4uAWqAk.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Static Array Uses</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/osidCLN.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Time Complexity of Static and Dynamic Array</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/5MbUJix.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Static Array Example</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/TCAE5en.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Dynamic Array Example</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/4i2Fis1.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>How to Implement a Dynamic Array</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <h2>
            <a href="https://github.com/williamfiset/data-structures/tree/master/com/williamfiset/datastructures/dynamicarray ">
              Dynamic Array Code
            </a>
          </h2>
          <img src="https://i.imgur.com/trvO6Mp.png" />
          <br />
        </Grid>
      </Grid>
    </div>
  );
}
