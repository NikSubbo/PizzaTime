import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addToCartAC, removeFromCartAC, totalRemoveFromCartAC } from '../../redux/action-creator';
import CartItem from "../../components/CartItem/CartItem";
import NavBar from "../../components/NavBar/NavBar";
// import { Grid } from '@material-ui/core';


function Cart(props) {

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
      {props.addedItems.length ?
        props.addedItems.map((pizza) => {
          return (
            // <Grid key={pizza._id} item xs={12} sm={6} md={4} lg={4} xl={4}>
              <CartItem 
              key={pizza._id} 
              pizza={pizza} 
              add={handleClickAdd} 
              remove={handleClickRemove}
              totalRemove={handleClickTotalRemove}/>
            // </Grid>
          )
        })
        :
        <p>The Cart is empty</p>
      }
    </Fragment>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCartAC(id)),
  removefromCart: (id) => dispatch(removeFromCartAC(id)),
  totalRemoveFromCart: (id) => dispatch(totalRemoveFromCartAC(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
