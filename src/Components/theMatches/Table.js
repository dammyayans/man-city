import React, { Component } from "react";
import { firebaseDB } from "../../firebase";
import { firebaseLooper } from "../ui/misc";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
export default class LeagueTable extends Component {
  state = {
    teams: []
  };

  componentDidMount() {
    firebaseDB
      .ref("positions")
      .once("value")
      .then(snapshot => {
        const teams = firebaseLooper(snapshot);
        this.setState({
          teams: teams
        });
      });
  }
  render() {
    return (
      <div className="league_table_wrapper">
        <div className="title">League Table</div>
        <div style={{ background: "#98c6e9" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Pos</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>W</TableCell>
                <TableCell>L</TableCell>
                <TableCell>D</TableCell>
                <TableCell>Pts</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.teams
                ? this.state.teams.map((match, i) => (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{match.team}</TableCell>
                      <TableCell>{match.w}</TableCell>
                      <TableCell>{match.d}</TableCell>
                      <TableCell>{match.l}</TableCell>
                      <TableCell>{match.pts}</TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}
