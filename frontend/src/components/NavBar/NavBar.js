import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import pizzaTimeImg from '../../images/pizzatime.jpg'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: '#FFC482'
  },
  logoDiv: {
    flexGrow: 1,
    position: 'relative',
  },
  logo: {
    maxWidth: '100px',
    maxHeight: '64px',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  titleLink: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#FBFFFE',
  },
  loginLink: {
    textDecoration: 'none',
    color: '#FBFFFE',
    // '&:hover': {
    //   color: '#FAA916',
    // }
  },
  // loginIcon: {
  //   marginRight: theme.spacing(1),
  // },
  // shoppingCartBtn: {
  //   marginLeft: theme.spacing(2),
  // },
  cartLink: {
    textDecoration: 'none',
    color: '#FBFFFE',
  },
}));

function NavBar(props) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.logoDiv}>
          <Link to="/" className={classes.titleLink}>
            <img alt="pizzaTimePic" className={classes.logo} src={pizzaTimeImg} />
          </Link>
        </div>
        <Link to="/login" className={classes.loginLink}>
          <IconButton className={classes.loginBtn} color="inherit">
            <AccountCircle />
          </IconButton>
        </Link>

        <Link to="/cart" className={classes.cartLink}>
          <IconButton edge="end" className={classes.shoppingCartBtn} color="inherit">
            {props.addedItems.length ? <AddShoppingCartIcon /> : <ShoppingCartIcon />}
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(NavBar);
