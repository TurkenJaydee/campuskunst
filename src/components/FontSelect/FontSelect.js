import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FontIcon from "../Fontslider/fontsize.png";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "5.5rem", // Leicht verbreitert, damit "Standard" reinpasst
  },

  fontSizeSelect: {
    zIndex: 10000,
    position: "absolute",
    right: "9rem",

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  fontSizeWrapper: {
    display: 'flex',
    marginTop: '-1rem',
    lineHeight: 1.66,
    alignItems: 'flex-end', // Stellt sicher, dass Icon und Select auf einer Höhe sind
  },

  icon: {
    width: "30px", // Feste Breite statt 100% für bessere Vorhersehbarkeit
    height: "auto",
    marginRight: "8px",
    marginBottom: "8px", // Anpassung an das Select-Feld
  },

  inputLabel: {
    fontSize: "1rem",
    lineHeight: "1",
  },

  select: {
    marginTop: "8px !important",
  },
}));

const FontSelect = ({ setFontSize }) => {
  const [currentValue, setCurrentValue] = useState("");

  const classes = useStyles();

  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentValue(value);
    setFontSize(value);
  };

  return (
    <div className={classes.fontSizeSelect}>
      <div className={classes.fontSizeWrapper}>
        {/* A11y Fix: Bild ist dekorativ (aria-hidden), 
            da das Select-Feld ohnehin "Schriftgröße" als Label hat.
            Zudem aus dem unsinnigen Typography-Container befreit. */}
        <img 
          className={classes.icon} 
          alt="" 
          src={FontIcon}
          aria-hidden="true" 
        />
        
        <FormControl className={classes.formControl}>
          <InputLabel 
            className={classes.inputLabel} 
            id="font-size-select-label"
          >
            Größe
          </InputLabel>
          <Select 
            className={classes.select}
            labelId="font-size-select-label"
            id="font-size-select"
            value={currentValue}
            MenuProps={{ disableScrollLock: true }}
            onChange={handleChange}
            // A11y Fix: aria-label für Screenreader, wenn fokussiert
            inputProps={{
              'aria-label': 'Schriftgröße ändern'
            }}
          >
            {/* A11y Fix: "None" zu einem sprechenden deutschen Begriff geändert */}
            <MenuItem value="">
              <em>Standard</em>
            </MenuItem>
            <MenuItem value={1}>Größe 1</MenuItem>
            <MenuItem value={4}>Größe 2</MenuItem>
            <MenuItem value={7}>Größe 3</MenuItem>
            <MenuItem value={9}>Größe 4</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default FontSelect;