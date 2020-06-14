import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Divider } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  description: {
    height: 70,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  quantity: {
    display: 'flex',
    alignItems: 'center'
  },
  pizzaImg: {
    transition: 'all 1s ease-out',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  },
});

export default function PizzaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Tasty pizza"
        height="260"
        image={props.pizza.picture}
        title={props.pizza.title}
        className={classes.pizzaImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.pizza.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
          {props.pizza.description}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.actions}>
        <div>
          <Typography>
            {props.pizza.price} €
          </Typography>
        </div>
        <div className={classes.quantity}>
          <IconButton color="inherit" onClick={() => props.add(props.pizza._id)}>
            <AddCircleIcon />
          </IconButton>
          <Typography>
            {props.pizza.quantity ? props.pizza.quantity : 0}
          </Typography>
          <IconButton color="inherit" onClick={() => props.remove(props.pizza._id)}>
            <RemoveCircleIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
