import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Container } from '@material-ui/core';
import NavBar from "../../components/NavBar/NavBar";
import pizzaMan from '../../images/pizzaman.jpg'
import orderImg from '../../images/order.jpg'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    width: 150,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
}))

export default function FinalPage() {
  const classes = useStyles();

  return (
    <Fragment>
      <NavBar />
      <Container>
        <Paper className={classes.paper} >
          <img alt="ThankYou" src={orderImg} className={classes.img} />
          <Typography variant="body2" color="textSecondary">
            Delivery will be made within an hour.
      </Typography>
          <Typography variant="body2" color="textSecondary">
            Wish you a great day and bon appetit!
      </Typography>
          <img alt="pizzaMan" src={pizzaMan} className={classes.img} />
        </Paper>
      </Container>
    </Fragment>
  );
}
