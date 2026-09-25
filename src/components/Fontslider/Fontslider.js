import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import FontIcon from '../Fontslider/fontsize.png';

const useStyles = makeStyles(theme => ({
  slider: {
    width: '10rem',
    marginLeft: '1rem', // Sorgt für etwas Abstand zwischen Icon und Slider
  },
  fontSizeSlider: {
    display: 'flex',
    alignItems: 'center', // Sorgt für eine saubere vertikale Zentrierung von Icon und Slider

    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      right: '8rem'    
    },
  },
  icon: {
    width: '30px', // Feste Breite statt relativer 40%, um Layout-Shifts zu vermeiden
    height: 'auto',
  }
}));

const Fontslider = ({ setFontSize }) => {
  const classes = useStyles();

  // Sauberer Handler für die Status-Änderung
  const handleSliderChange = (event, newValue) => {
    setFontSize(newValue);
  };

  return (
    <div className={classes.fontSizeSlider}>
      {/* A11y Fix: Bild ist dekorativ und aus Typography befreit */}
      <img 
        className={classes.icon} 
        alt="" 
        src={FontIcon}
        aria-hidden="true"
      />
      <Slider
        className={classes.slider}
        defaultValue={0}
        step={1}
        min={0}
        max={9}
        // A11y Fix: Zustandsänderung gehört in onChange
        onChange={handleSliderChange}
        // A11y Fix: Gibt Screenreadern einen sauberen Text für den aktuellen Wert zurück
        getAriaValueText={(value) => `Stufe ${value}`}
        // A11y Fix: Direktes Label statt fehlerhafter Verknüpfung zum Bild
        aria-label="Schriftgröße anpassen"
        valueLabelDisplay="off"
      />
    </div>
  );
};

export default Fontslider;