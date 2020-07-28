import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import FontIcon from '../Fontslider/fontsize.png';

const useStyles = makeStyles(theme => ({

    slider: {
        width: '10rem',
    },
    fontSizeSlider: {
        display: 'flex',
        alignSelf: 'center',

        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            right: '8rem'    
        },
    },
    icon: {
        width: '40%',
    }
}));


const Fontslider = ({ setFontSize }) => {

    const classes = useStyles();

    return (
        <div className={classes.fontSizeSlider}>
            <Typography variant="caption" className={classes.label} id="discrete-slider">
                <img className={classes.icon} alt="Font Size Icon" src={FontIcon}></img>
            </Typography>
            <Slider
                className={classes.slider}
                getAriaValueText={e => setFontSize(e)}
                defaultValue={0}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="off"
                step={1}
                min={0}
                max={9}
            />
        </div>
    );
};

export default Fontslider;