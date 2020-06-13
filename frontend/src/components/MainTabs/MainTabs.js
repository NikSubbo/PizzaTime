import React from 'react';
import { connect } from 'react-redux';
import PizzaCard from '../../components/PizzaCard/PizzaCard';
import { Grid } from '@material-ui/core/';


function MainTabs(props) {
  return (
      <Grid container spacing={3}>
        {
          props.pizzas.map((pizza) => {
            return (
              <Grid key={pizza._id} item xs={12} sm={6} md={4} lg={4} xl={4}>
                <PizzaCard key={pizza._id} pizza={pizza}  />
              </Grid>
            )
          })
        }
      </Grid>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(MainTabs);
