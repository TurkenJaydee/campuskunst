import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Filter from "../Filter/Filter";
import { FormLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginBottom: "1rem",

    '& .MuiOutlinedInput-input': {
      padding: '1rem 0.8rem',

      [theme.breakpoints.down("sm")]: {
        padding: '0.8rem 0.5rem',
      },
    }
  },
  searchBarContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  formLabel: {
    // Label visuell etwas absetzen und lesbar machen
    marginBottom: "0.5rem",
    fontWeight: "600",
    color: theme.palette.text.primary,
  }
}));

const Search = ({
  setSearchValue,
  searchValue,
  tags,
  setTags,
  value,
  valuetext,
  onChange,
  min,
  max,
  toggleFilter,
  toogleFilterOnEnter,
}) => {
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const classes = useStyles();

  return (
    <Fragment>
      {/* Semantic Fix: Die Suche und die Filter gehören semantisch in eine <form> */}
      <form noValidate autoComplete="off" role="search" onSubmit={(e) => e.preventDefault()}>
        <Container maxWidth="md" className={classes.searchBarContainer}>
          <FormLabel htmlFor="search-input" className={classes.formLabel}>
            Nach Kunstwerk suchen
          </FormLabel>
          <TextField
            id="search-input" // Eindeutige englische ID (Best Practice)
            placeholder="Z.B. Radfahrer, Skulptur..." // Aussagekräftigerer Placeholder
            type="search"
            variant="outlined"
            className={classes.searchBar}
            fullWidth
            // aria-label entfernt, da wir ein echtes sichtbares FormLabel haben, 
            // das über htmlFor mit der id verbunden ist
            value={searchValue}
            onChange={handleSearchInputChanges}
            onKeyPress={(e) => toogleFilterOnEnter(e)}
            InputLabelProps={{
              shrink: false,
            }}
          />
        </Container>
        <Container>
          <Filter
            tag={tags}
            setTags={setTags}
            value={value}
            valuetext={valuetext}
            onChange={onChange}
            min={min}
            max={max}
            toggleFilter={toggleFilter}
          />
        </Container>
      </form>
    </Fragment>
  );
};

export default Search;