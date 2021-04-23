import React from "react";
import { Grid } from "@material-ui/core";
export default function LinkedLists() {
  return (
    <div>
      <h1>Linked Lists</h1>
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
          Linked List Outline
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/nHKPYF5.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          What is a Linked List?
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/PoTpc9M.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          Linked List Uses
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/wj7uxSF.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          Singly vs Doubly Linked Lists
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/eGCLE56.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          Pros and Cons of Single and Doubly Linked Lists
        </Grid>
        <Grid className="box" item xs={6}>
          <img src="https://i.imgur.com/QceEpnK.png" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          Inserting Into Singly Linked Lists
        </Grid>
        <Grid className="box" item xs={6}>
          <div>
            <iframe
              className="video"
              src="https://streamable.com/e/hb5m2a?loop=0"
            ></iframe>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="box" item xs={6}>
          Inserting Into a Doubly Linked List
        </Grid>
        <Grid className="box" item xs={6}>
          <iframe
            className="video"
            src="https://streamable.com/e/xygijv?loop=0"
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
}
