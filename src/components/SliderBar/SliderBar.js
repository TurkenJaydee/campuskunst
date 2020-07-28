import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
  },
}));

const SliderBar = (props) => {

  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Typography id="discrete-slider" gutterBottom>
          Jahrzehnt
      </Typography>
        <Slider
          value={props.value}
          onChange={props.onChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          marks
          step={10}
          max={props.max}
          min={props.min}
        />
      </div>
    </Fragment>
  );
};

export default SliderBar;
