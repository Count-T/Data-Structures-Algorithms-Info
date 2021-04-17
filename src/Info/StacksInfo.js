import React from "react";
import { Grid } from "@material-ui/core";
export default function StacksInfo() {
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

      <Grid container>
        <Grid className="box" item xs={6}>
          Stacks Outline
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/1K0K3nF.png" />
          <img src="https://i.imgur.com/PiQeVuX.png" />
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          Stacks Outline
        </Grid>
        <Grid className="box" item xs={6}>
          <div>
            <iframe
              className="video"
              src="https://streamable.com/e/72gfs0?loop=0"
            ></iframe>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          When are stacks used?
        </Grid>
        <Grid className="box" item xs={6}>
          <div>
            <img src="https://i.imgur.com/HKmIpcc.png"></img>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          Stack Time Complexity
        </Grid>
        <Grid className="box" item xs={6}>
          <div>
            <img src="https://i.imgur.com/alFhd6x.png"></img>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          Brackets Stack Example
        </Grid>
        <Grid className="box" item xs={6}>
          <div>
            <iframe
              className="video"
              src="https://streamable.com/e/h7e0iv?loop=0"
            ></iframe>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          Tower of Hanoi Example
        </Grid>
        <Grid className="box" item xs={6}>
          <div>
            <iframe
              className="video"
              src="https://streamable.com/e/lpvzzg?loop=0"
            ></iframe>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          Stack Implementation
        </Grid>
        <Grid className="box" item xs={6}>
          <div>
            <iframe
              className="video"
              src="https://streamable.com/e/qiczel?loop=0"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
