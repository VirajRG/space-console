import React from "react";
import {Route} from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import SidenavComponent from "./SidenavComponent";
import TopbarComponent from "./topbar/TopbarComponent";
import OverviewComponent from "./sections/overview/OverviewComponent";

const styles = (theme: any) => ({
  root: {
    display: "flex",
    background: "white"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

function PermanentDrawerLeft(props: any) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SidenavComponent projectId={props.match.params.projectId} />
      <TopbarComponent unsavedChanges={false}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/projects/:projectId" component={OverviewComponent} />
      </main>
    </div>
  );
}

export default withStyles(styles)(PermanentDrawerLeft);
