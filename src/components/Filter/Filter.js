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
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
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


  const TAGLIST = [
    { name: "Landschaft", icon: <FilterHdrOutlinedIcon style={{marginLeft: '0.5rem'}}/> },
    { name: "Skulptur", icon: <AccessibilityNewOutlinedIcon style={{marginLeft: '0.5rem'}}/> },
    { name: "Installation", icon: <SettingsOutlinedIcon style={{marginLeft: '0.5rem'}}/> },
    { name: "Gemälde", icon: <BrushOutlinedIcon style={{marginLeft: '0.5rem'}}/> },
    { name: "Ausstellung", icon: <CategoryOutlinedIcon style={{marginLeft: '0.5rem'}}/> },
  ]

  const addTag = (e) => {
    setTags(oldTags => [...oldTags, e]);
  };


  const classes = useStyles();

  return (
    <Fragment>
      <div
        className={classes.root}
        role="group"
        aria-label="Kategorien wählen"
      >
        {TAGLIST.map((tag, index) => {
          return <Tag
            key={index}
            name={tag.name}
            onClick={addTag}
            icon={tag.icon}
          />
        })}
      </div>

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
        startIcon={<AutorenewOutlinedIcon />}
        onClick={toggleFilter}
        size="large"
        type="button"
        aria-label="Filter-Ergebnisse anwenden"
        title="Filter-Ergebnisse anwenden"
      >
        Filtern
      </Button>
    </Fragment>
  );
};

export default Filter;
