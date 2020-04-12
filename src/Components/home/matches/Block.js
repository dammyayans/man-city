import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper, reverseArray } from "../../ui/misc";
import MatchesBlock from "../../ui/matches_block";
import Slide from "react-reveal/Slide";
import Grid from "@material-ui/core/Grid";
class Block extends Component {
  state = {
    matches: [],
  };
  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then((snapshot) => {
        const matches = firebaseLooper(snapshot);
        this.setState({
          matches: reverseArray(matches),
        });
      });
  }
  showMatches = (matches) =>
    matches
      ? matches.map((match) => (
          <Grid item sm={12} xs={12} md={6}>
            <Slide bottom key={match.id}>
              <div className="item">
                <div className="wrapper">
                  <MatchesBlock match={match} />
                </div>
              </div>
            </Slide>
          </Grid>
        ))
      : null;
  render() {
    return (
      <Grid className="home_matches" container>
        {this.showMatches(this.state.matches)}
      </Grid>
    );
  }
}

export default Block;
