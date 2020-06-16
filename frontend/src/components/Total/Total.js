import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Container } from '@material-ui/core';
import pizzaMan from '../../images/pizzaman3.jpg'


const useStyles = makeStyles((theme) => ({
  totalHeader: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  img: {
    height: 137.6,
  },
  sum: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

function Total(props) {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" className={classes.totalHeader}>
        Total
      </Typography>
      <Paper className={classes.paper}>
        <img alt="pizzaMan" src={pizzaMan} className={classes.img} />
        <div className={classes.sum}>
          <Typography variant="h6">
            {(props.total + 3).toFixed(2)}* € or {((props.total + 3) * 1.2).toFixed(2)} $
      </Typography>
          <Typography variant="body2" color="textSecondary">
            * including delivery cost 3 €
        </Typography>
        </div>
      </Paper>
    </Container>
  )
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Total)
