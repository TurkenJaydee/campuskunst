import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FontIcon from '../Fontslider/fontsize.png';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles(theme => ({

    formControl: {
        margin: theme.spacing(1),
        marginTop: '-15px',
        width: '4.5rem',
    },

    fontSizeSelect: {
        display: 'flex',

        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            right: '3rem'
        },
    },

    icon: {
        width: '100%',
    },

    label: {
        width: '20%',
        alignSelf: 'center'
    },

    inputLabel: {
        fontSize: '1rem',
        lineHeight: '1',
    }
}));

const FontSelect = ({ setFontSize }) => {

    const [currentValue, setCurrentValue] = useState('');

    const classes = useStyles();

    const handleChange = (e) => {
        const value = e.target.value;
        setCurrentValue(value);
        setFontSize(value);

    }

    return (
        <div className={classes.fontSizeSelect}>
            <Typography variant="caption" className={classes.label} id="discrete-slider">
                <img className={classes.icon} alt="Font Size Icon" src={FontIcon}></img>
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputLabel} id="demo-simple-select-helper-label">Größe</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={currentValue}
                    MenuProps={{ disableScrollLock: true}}
                    onChange={handleChange}
                    className={classes.select}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={4}>2</MenuItem>
                    <MenuItem value={7}>3</MenuItem>
                    <MenuItem value={9}>4</MenuItem>

                </Select>
            </FormControl>
        </div >
    );
};

export default FontSelect;