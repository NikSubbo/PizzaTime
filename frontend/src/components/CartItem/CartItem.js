import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, IconButton } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  img: {
    width: 128,
    height: 100,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
  },
  remove: {
    '&:hover': {
      color: 'red',
    }
  }
}));

export default function CartItem(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <img className={classes.img} alt="pizzaPic" src={props.pizza.picture} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.pizza.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.pizza.description}
                </Typography>
              </Grid>
              <Grid item className={classes.actions}>
                <div className={classes.quantity}>
                  <IconButton color="inherit" onClick={() => props.add(props.pizza._id)}>
                    <ArrowDropUpIcon />
                  </IconButton>
                  <Typography>
                    {props.pizza.quantity}
                  </Typography>
                  <IconButton color="inherit" onClick={() => props.remove(props.pizza._id)}>
                    <ArrowDropDownIcon />
                  </IconButton>
                </div>
                <div>
                  <Typography
                    variant="body2"
                    style={{ cursor: 'pointer' }}
                    className={classes.remove}
                    onClick={() => props.totalRemove(props.pizza._id)}
                  >
                    Remove
                </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{props.pizza.price} €</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}


