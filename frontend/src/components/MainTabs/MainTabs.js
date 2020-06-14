import React from 'react';
import { connect } from 'react-redux';
import { addToCartAC, removeFromCartAC } from '../../redux/action-creator'
import PizzaCard from '../../components/PizzaCard/PizzaCard';
import { Grid } from '@material-ui/core/';


function MainTabs(props) {

  const handleClickAdd = (id) => {
    props.addToCart(id);
  }

  const handleClickRemove = (id) => {
    props.removefromCart(id);
  }

  return (
    <Grid container spacing={3}>
      {
        props.pizzas.map((pizza) => {
          return (
            <Grid key={pizza._id} item xs={12} sm={6} md={4} lg={4} xl={4}>
              <PizzaCard 
              key={pizza._id} 
              pizza={pizza} 
              add={handleClickAdd} 
              remove={handleClickRemove} />
            </Grid>
          )
        })
      }
    </Grid>
  );
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCartAC(id)),
  removefromCart: (id) => dispatch(removeFromCartAC(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainTabs);
