import React from "react";
import { Grid } from "@material-ui/core";

export default function QueuesInfo() {
  return (
    <div>
      <h1>Queues</h1>
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
          What is a queue?
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/yX3Aa6Q.png"></img>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          Queue Terminology
        </Grid>
        <Grid className="box" item xs={6}>
          <iframe
            className="video"
            src="https://streamable.com/e/vp5hsg"
          ></iframe>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          When and Where is a Queue Used
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/Hrg00l8.png" alt=""></img>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          Queue Time Complexity
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/o1gkvR4.png" alt=""></img>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          Queue Example Breadth First Search (BFS)
        </Grid>
        <Grid className="box" item xs={6}>
          <iframe
            className="video"
            src="https://streamable.com/e/hl5sji"
          ></iframe>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          Queue Implementation
        </Grid>
        <Grid className="box" item xs={6}>
          <iframe
            className="video"
            src="https://streamable.com/e/81ivic"
          ></iframe>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="box" item xs={6}>
          Queue Code
        </Grid>
        <Grid className="box" item xs={6}>
          <a
            href="https://github.com/williamfiset/data-structures/tree/master/com/williamfiset/datastructures/queue
"
          >
            Queue Code
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
