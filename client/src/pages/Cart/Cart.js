import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addToCartAC, removeFromCartAC, totalRemoveFromCartAC } from '../../redux/action-creator';
import CartItem from "../../components/CartItem/CartItem";
import NavBar from "../../components/NavBar/NavBar";
import { Paper, Typography, Grid, Container } from '@material-ui/core';
import SubmitForm from '../../components/SubmitForm/SubmitForm'
import { makeStyles } from '@material-ui/core/styles';
import Total from '../../components/Total/Total'
import pizzaMan from '../../images/pizzaman2.jpg'
const uniqid = require('uniqid');


const useStyles = makeStyles((theme) => ({
  emptyDiv: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  emptyHeader: {
    marginTop: theme.spacing(2),
  },
  emptyText: {
    marginTop: theme.spacing(1),
  },
  img: {
    width: 150,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  orderHeader: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  }
}));

function Cart(props) {
  const classes = useStyles();

  const handleClickAdd = (id) => {
    props.addToCart(id);
  }

  const handleClickRemove = (id) => {
    props.removefromCart(id);
  }

  const handleClickTotalRemove = (id) => {
    props.totalRemoveFromCart(id);
  }

  return (
    <Fragment>
      <NavBar />
      <Container>
      {props.addedItems.length ?
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" className={classes.orderHeader}>
                Your order
              </Typography>
              {props.addedItems.map((pizza) => {
                return (
                  <CartItem
                    key={uniqid()}
                    pizza={pizza}
                    add={handleClickAdd}
                    remove={handleClickRemove}
                    totalRemove={handleClickTotalRemove} />
                )
              })}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Total />
              <SubmitForm />
            </Grid>
          </Grid>
        </Container>
        :
        <Container>
          <Paper className={classes.emptyDiv}>
            <Typography variant="h4" className={classes.emptyHeader}>
              Your order
        </Typography>
            <Typography variant="body2" color="textSecondary" className={classes.emptyText}>
              The Cart is empty
        </Typography>
            <img alt="pizzaMan" src={pizzaMan} className={classes.img} />
          </Paper>
        </Container>
      }
      </Container>
    </Fragment >
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCartAC(id)),
  removefromCart: (id) => dispatch(removeFromCartAC(id)),
  totalRemoveFromCart: (id) => dispatch(totalRemoveFromCartAC(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
