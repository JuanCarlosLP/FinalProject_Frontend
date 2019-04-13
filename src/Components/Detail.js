import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class Detail extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={16}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="https://img1.southernliving.timeinc.net/sites/default/files/styles/medium_2x/public/image/2019/01/main/2590901_barco_dark_chocolate_brownies_222.jpg?itok=aHrjmQ_7" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={16}>
                  <Grid item xs>
                    <Typography variant="title" gutterBottom variant="subtitle1">
                      Brownies en 4 ingredientes
                    </Typography>
                    <Typography gutterBottom>Brownies cremosos, fáciles de preparar, con un poderoso sabor que no podrás resistir.</Typography>
                    <Typography color="textSecondary">Tiempo de preparación: 25 minutos</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$32.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </>
    );
  }
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Detail);