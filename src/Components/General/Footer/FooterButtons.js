import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="text"
        aria-label="text primary button group">
        <Button>About us</Button>
        <Button>Our Mission</Button>
        <Button>Gift Cards</Button>
        <Button>Client Signup</Button>
        <Button>Become a Volunteer</Button>
        <Button>Careers</Button>
        <Button>More</Button>
      </ButtonGroup>
    </div>
  );
}

   