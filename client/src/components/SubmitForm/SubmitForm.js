import React from 'react';
import Button from '@material-ui/core/Button';
import {
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container
}
  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formHeader: {
    textAlign: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    fontWeight: '700',
    fontSize: '1rem',
    backgroundColor: '#F6AE2D',
    color: '#FBFFFE',
    '&:hover': {
      backgroundColor: '#F59C28',
      color: '#FBFFFE',
    },
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: 'none',
  }
}));

const submitHandler = async (e) => {
  e.preventDefault();
  window.location.href = 'http://localhost:3000/final';
}

export default function SubmitForm() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Box> */}
        <Typography variant="h4" className={classes.formHeader}>
          Delivery information
          </Typography>
        {/* </Box> */}
        <form className={classes.form} onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="telephone"
                label="Phone number"
                name="telephone"
                autoComplete="telephone"
                type="text"
                pattern="[0-9]+"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Address"
                id="address"
                autoComplete="delivery-address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="comment"
                id="comment"
                label="Comment"
                type="text"
                multiline
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
