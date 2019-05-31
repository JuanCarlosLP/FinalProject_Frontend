import React, {Component} from 'react'
//import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
//import CssBaseline from '@material-ui/core/CssBaseline';

//import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import { Grid, /*TextField,*/ FormControl, FormControlLabel, Checkbox } from '@material-ui/core';
//import Input from '@material-ui/core/Input';
//import InputLabel from '@material-ui/core/InputLabel';
//import Welcome from './Welcome';
import { Link } from 'react-router-dom'

const styles = theme => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        marginTop: theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 6,
        padding: theme.spacing.unit * 3,
      },
    },
    stepper: {
      padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit,
    },
  });


class Welcome extends Component{
    render(){
        const { classes } = this.props;
        return(
            <>
            <Typography variant="h5" gutterBottom>
                    Gracias Por Haberte Registrado
                  </Typography>
                  <Typography variant="subtitle1">
                    esperemos que encuentres la receta que estas buscando! :)
                  </Typography>
                  <Button onClick={this.handleBack} className={classes.button}>
                        <Link to='./login'>Volver</Link>
                      </Button>
            </>
        )
    }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Welcome);