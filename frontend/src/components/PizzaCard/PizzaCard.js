import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function PizzaCard(props) {
  console.log(props)
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Tasty pizza"
          height="140"
          image={props.pizza.picture}
          title={props.pizza.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.pizza.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.pizza.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>
          Price
      </Typography>
        <Button size="small" color="primary">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
