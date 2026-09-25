import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    maxWidth: '600px',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    marginBottom: '3rem',
  },
  label: {
    fontWeight: "600",
    color: theme.palette.text.primary,
  }
}));

const marks = [
  {
    value: 1970,
    label: '1970',
  },
  {
    value: 1975,
    label: '',
  },
  {
    value: 1980,
    label: '',
  },
  {
    value: 1985,
    label: '',
  },
  {
    value: 1990,
    label: '',
  },
  {
    value: 1995,
    label: '1995',
  },
  {
    value: 2000,
    label: '',
  },
  {
    value: 2005,
    label: '',
  },
  {
    value: 2010,
    label: '',
  },
  {
    value: 2015,
    label: '',
  },
  {
    value: 2020,
    label: '2020',
  },
];

const SliderBar = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container className={classes.root} maxWidth="lg">
        <Typography 
          id="zeitraum-slider-label" 
          className={classes.label} 
          gutterBottom
          component="label"
        >
          Zeitraum filtern:
        </Typography>
        <Slider
          value={props.value}
          onChange={props.onChange}
          // "off" schaltet die Popup-Bubbles samt Animation komplett ab
          valueLabelDisplay="off"
          aria-labelledby="zeitraum-slider-label"
          getAriaValueText={(value) => `Jahr ${value}`}
          marks={marks}
          min={props.min}
          max={props.max}
          step={5}
        />
      </Container>
    </Fragment>
  );
};

export default SliderBar;