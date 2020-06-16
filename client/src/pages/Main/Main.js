import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import MainTabs from '../../components/MainTabs/MainTabs'
import { fetchPizzasAC } from '../../redux/action-creator'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';


function Main(props) {
  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  const fetchDataPizzas = async () => {
    await props.fetchPizzas()
  }

  useEffect(() => {
    if (!props.pizzas.length) {
      fetchDataPizzas()
    }
  });

  return (
    <Fragment>
      <NavBar />
      <Container className={classes.container}>
        <Grid item xs={12}>
          <MainTabs />
        </Grid>
      </Container>
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchPizzas: () => dispatch(fetchPizzasAC())
});

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(Main);
