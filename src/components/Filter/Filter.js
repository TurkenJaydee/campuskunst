import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Tag from '../Tag/Tag';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import Button from '@material-ui/core/Button';
import SliderBar from '../SliderBar/SliderBar';
import FilterHdrOutlinedIcon from '@material-ui/icons/FilterHdrOutlined';
import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    border: 'none', // Wichtig, falls wir fieldset nutzen, um den Standard-Rahmen zu entfernen
    padding: 0,
    margin: 0,
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  // Klasse, um Elemente nur für Screenreader sichtbar zu machen
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  },
  button: {
    marginTop: theme.spacing(2),
    "&:focus-visible": {
      outline: "3px solid #1976d2",
      outlineOffset: "2px",
    }
  }
}));

const Filter = (
  { setTags,
    value,
    valuetext,
    onChange,
    min,
    max,
    toggleFilter }
) => {

  // A11y Fix: aria-hidden="true" und focusable="false" zu allen Icons hinzugefügt
  const TAGLIST = [
    { name: "Landschaft", icon: <FilterHdrOutlinedIcon style={{marginLeft: '0.5rem'}} aria-hidden="true" focusable="false" /> },
    { name: "Skulptur", icon: <AccessibilityNewOutlinedIcon style={{marginLeft: '0.5rem'}} aria-hidden="true" focusable="false" /> },
    { name: "Installation", icon: <SettingsOutlinedIcon style={{marginLeft: '0.5rem'}} aria-hidden="true" focusable="false" /> },
    { name: "Gemälde", icon: <BrushOutlinedIcon style={{marginLeft: '0.5rem'}} aria-hidden="true" focusable="false" /> },
    { name: "Ausstellung", icon: <CategoryOutlinedIcon style={{marginLeft: '0.5rem'}} aria-hidden="true" focusable="false" /> },
  ];

  const addTag = (e) => {
    setTags(oldTags => [...oldTags, e]);
  };

  const classes = useStyles();

  return (
    <Fragment>
      {/* Semantic Fix: <fieldset> und <legend> statt <div role="group"> */}
      <fieldset className={classes.root}>
        <legend className={classes.srOnly}>Kategorien wählen</legend>
        {TAGLIST.map((tag, index) => {
          return <Tag
            key={index}
            name={tag.name}
            onClick={addTag}
            icon={tag.icon}
          />
        })}
      </fieldset>

      <SliderBar
        value={value}
        valuetext={valuetext}
        onChange={onChange}
        min={min}
        max={max}
      />

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        // A11y Fix: aria-hidden auf das Button-Icon
        startIcon={<AutorenewOutlinedIcon aria-hidden="true" focusable="false" />}
        onClick={toggleFilter}
        size="large"
        type="button"
      >
        Filtern
      </Button>
    </Fragment>
  );
};

export default Filter;