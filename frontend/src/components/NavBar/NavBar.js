import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  titleLink: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#FBFFFE',
  },
  shoppingCartBtn: {
    marginLeft: theme.spacing(2),
  },
  loginLink: {
    textDecoration: 'none',
    color: '#FBFFFE',
    // '&:hover': {
    //   color: '#FAA916',
    // }
  },
  cartLink: {
    textDecoration: 'none',
    color: '#FBFFFE',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.titleLink}>PizzaTime </Link>
        </Typography>
        <Link to="/login" className={classes.loginLink}>
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/cart" className={classes.cartLink}>
          <IconButton edge="end" className={classes.shoppingCartBtn} color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

