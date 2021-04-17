import React from "react";
import { Grid } from "@material-ui/core";

export default function TimeComplexityInfo() {
  return (
    <div>
      <h1>Time Complexity</h1>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Topic</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <h1>Definition</h1>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Big-O Notation</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/TazXnU6.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Common Big-O Notation Time Complexities</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/DG25FNC.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Big-O Properties</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/ZWBcChK.png" />
          <ul>
            <li>Remove the constants</li>
            <li>Only look at the dominate term (slowest)</li>
            <li>E.g) f(n) = 2n^3 + 15n^2 </li>
          </ul>
        </Grid>
        <Grid container>
          <Grid className="box" item xs={6}>
            <h1>Constant time O(1) Example</h1>
          </Grid>
          <Grid className="box" item xs={6}>
            <img src="https://i.imgur.com/YMIEnFU.png" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Big-O Properties</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/ZWBcChK.png" />
          <ul>
            <li>Remove the constants</li>
            <li>Only look at the dominate term (slowest)</li>
            <li>E.g) f(n) = 2n^3 + 15n^2 </li>
          </ul>
        </Grid>
        <Grid container>
          <Grid className="box" item xs={6}>
            <h1>Constant time O(1) Example</h1>
          </Grid>
          <Grid className="box" item xs={6}>
            <img src="https://i.imgur.com/YMIEnFU.png" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Big-O Properties</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/ZWBcChK.png" />
          <ul>
            <li>Remove the constants</li>
            <li>Only look at the dominate term (slowest)</li>
            <li>E.g) f(n) = 2n^3 + 15n^2 </li>
          </ul>
        </Grid>
        <Grid container>
          <Grid className="box" item xs={6}>
            <h1>Linear time O(n) Example</h1>
          </Grid>
          <Grid className="box" item xs={6}>
            <img src="https://i.imgur.com/cAsgAEu.png" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Quadratic time O(n^2)</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/BFXBPj0.png" />
        </Grid>
        <Grid container>
          <Grid className="box" item xs={6}>
            <h1>Logarithmic time O(log(n)) Example</h1>
          </Grid>
          <Grid className="box" item xs={6}>
            <img src="https://i.imgur.com/WTqzUYo.png" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          <h1>Big-O for loops</h1>
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/C8xa6eQ.png" />
          <ul>
            <li>Multiply loops on different levels</li>
            <li>Add those on the same levels</li>
          </ul>
        </Grid>
        <Grid container>
          <Grid className="box" item xs={6}>
            <h1>Classic Big-O Examples</h1>
          </Grid>
          <Grid className="box" item xs={6}>
            <img src="https://i.imgur.com/DDyD6W9.png" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
