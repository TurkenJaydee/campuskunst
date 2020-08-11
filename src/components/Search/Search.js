import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Filter from "../Filter/Filter";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginBottom: "1rem",
  },
}));

const Search = ({ setSearchValue, searchValue, tags, setTags, value, valuetext, onChange, min, max, toggleFilter }) => {
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const classes = useStyles();

  return (
    <Fragment>
      <Container maxWidth="md" className={classes.searchBarContainer}>
        <TextField
          id="Suchfeld"
          placeholder="Suchfeld"
          type="search"
          variant="outlined"
          className={classes.searchBar}
          fullWidth
          aria-label="Suchfeld"
          value={searchValue}
          onChange={handleSearchInputChanges}
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
    </Fragment>
  );
};

export default Search;
