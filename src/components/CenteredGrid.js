import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    display: 'flex',
    boxShadow: '3px 3px 13px 3px #ccc'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    maxWidth: 100,
    maxHeight: '100%',
  },
  movieInfo: {
  }
}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  const renderClasses = (results) => {
    const { searchResults } = results;
    if (!searchResults) {
      return <span>No search results :(</span>
    } else {
      return searchResults.map((item, index) => {
        return (
          <Grid item xs={6} key={index}>
            <Paper className={classes.paper}>
              <div className={classes.movieInfo}>
                <h3>{item.Title}</h3>
                <span>{item.Year}</span>
              </div>
              <img className={classes.img} src={item.Poster} alt='posterThumb' />
            </Paper>
          </Grid>
        )
      })
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {renderClasses(props)}
      </Grid>
    </div>
  );
}
