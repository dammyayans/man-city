import React from "react";
import Layout from "./Hoc/Layout";
import { Switch } from "react-router-dom";
import Home from "./Components/home";
import SignIn from "./Components/signin";
import AdminMatches from "./Components/admin/matches";
import AddEditMatch from "./Components/admin/matches/AddEditMatch";
import AddEditPlayer from "./Components/admin/players/AddEditPlayer";
import PrivateRoute from "./Components/authRoute/privateRoute";
import PublicRoute from "./Components/authRoute/publicRoute";
import AdminPlayers from "./Components/admin/players";
import Dashboard from "./Components/admin/Dashboard";
import TheTeam from "./Components/theTeam";
import TheMatches from "./Components/theMatches";
import NotFound from "./Components/ui/not_found";
const Routes = props => {
  return (
    <div>
      <Layout>
        <Switch>
          <PrivateRoute
            {...props}
            path="/admin_players"
            exact
            component={AdminPlayers}
          />
          <PrivateRoute
            {...props}
            path="/dashboard"
            exact
            component={Dashboard}
          />
          <PrivateRoute
            {...props}
            path="/admin_matches"
            exact
            component={AdminMatches}
          />
          <PrivateRoute
            {...props}
            path="/admin_matches/edit_match/:id"
            exact
            component={AddEditMatch}
          />
          <PrivateRoute
            {...props}
            path="/admin_players/add_players/:id"
            exact
            component={AddEditPlayer}
          />
          <PrivateRoute
            {...props}
            path="/admin_players/add_players"
            exact
            component={AddEditPlayer}
          />
          <PrivateRoute
            {...props}
            path="/admin_matches/edit_match"
            exact
            component={AddEditMatch}
          />
          <PublicRoute
            {...props}
            restricted={true}
            exact
            component={SignIn}
            path="/sign_in"
          />
          <PublicRoute
            {...props}
            restricted={false}
            exact
            component={TheTeam}
            path="/the_team"
          />
          <PublicRoute
            {...props}
            restricted={false}
            exact
            component={TheMatches}
            path="/the_matches"
          />
          <PublicRoute
            {...props}
            restricted={false}
            exact
            component={Home}
            path="/"
          />
          <PublicRoute
            {...props}
            restricted={false}
            exact
            component={NotFound}
          />
        </Switch>
      </Layout>
    </div>
  );
};

export default Routes;
