import React, { Fragment, useState, useEffect } from "react";
import Artpiece from "../Artpiece/Artpiece";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Search from "../Search/Search";

export const API_PATH = `http://localhost:80`;

/* export const API_PATH = `../api/index_artpieces.php`; */

const useStyles = makeStyles(theme => ({

    input: {
        textAlign: 'center',
        marginTop: '2rem',
    },

    filter: {
        textAlign: 'center',
    },

    searchForm: {
        paddingTop: '48px',
    },

    searchBar: {
        backgroundColor: 'white',
        width: '50%',
        marginTop: '3rem',
    },

    item: {
        display: 'flex',
        justifyContent: 'center',
    },

    artpiece: {
        width: '100%',
        maxWidth: '80%',

    },
}));

const artpieces = () => {
    const [artpieces, setArtpieces] = useState([]);
    const [sortedArtpieces, setSortedArtpieces] = useState([]);
    const [filteredArtpieces, setFilteredArtpieces] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [tags, setTags] = useState([]);
    const [sliderValue, setSliderValue] = React.useState([1900, 2020]);

    const fetchData = async () => {
        const res = await fetch(API_PATH);
        const resData = await res.json();
        setArtpieces(resData);
        setFilteredArtpieces(resData);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
    }, []);

    const arrayContainsArray = (array1, array2) => {
        return array1.every(function (value) {
            return (array2.indexOf(value) >= 0);
        });
    }

    function handleSliderChange(event, newValue) {
        setSliderValue(newValue);
    };

    const valuetext = (value) => {
        return value;
    }

    const onToggleFilter = () => {
        setFilteredArtpieces(sortedArtpieces);
    };

    useEffect(() => {

        let tagList = [...tags];
        let filteredTags = [...new Set(tagList)];
        let uniqueDuplicates = [...new Set(tagList.filter((item, index) => tagList.indexOf(item) !== index))];

        if (uniqueDuplicates.toString() !== '') {
            filteredTags = filteredTags.filter(e => e !== uniqueDuplicates.toString());
            setTags(filteredTags);
        }

        const searchRegex = searchValue && new RegExp(`${searchValue}`, "gi");
        const result = artpieces.filter(
            artpiece =>
                (!searchRegex || searchRegex.test(artpiece.name)) &&
                (!filteredTags || arrayContainsArray(filteredTags, artpiece.tags)) &&
                (!sliderValue || ((parseInt(artpiece.date, 10) >= sliderValue[0]) && parseInt(artpiece.date, 10) <= sliderValue[1]))
        );
        setSortedArtpieces(result);
    }, [searchValue, artpieces, tags, sliderValue]);

    const classes = useStyles();

    if (artpieces.length > 0) {
        return (
            <Fragment>
                <Fade in={true} timeout={1500}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4} >
                            <Grid className={classes.input} item xs={12}>
                                <Search
                                    searchValue={searchValue}
                                    setSearchValue={setSearchValue}
                                    tags={tags}
                                    setTags={setTags}
                                    value={sliderValue}
                                    valuetext={valuetext}
                                    onChange={handleSliderChange}
                                    min={1900}
                                    max={2020}
                                    toggleFilter={onToggleFilter}
                                />
                            </Grid>
                            <Fragment>
                                {filteredArtpieces.length > 0 ? (
                                    (filteredArtpieces).map((artpiece, index) => {
                                        return <Grid className={classes.item} item xs={12} sm={6} md={4} key={index}>
                                            <Artpiece className={classes.artpiece}
                                                id={artpiece.id}
                                                key={artpiece.id}
                                                name={artpiece.name}
                                                subtitle={artpiece.subtitle}
                                                image={artpiece.image_1}
                                                tag={artpiece.tags}
                                                date={artpiece.date}
                                                artist={artpiece.artist}
                                                alt={artpiece.alt_text}
                                            />
                                        </Grid>
                                    })
                                ) : (
                                        <span>Nicht vorhanden</span>
                                    )}
                            </Fragment>
                        </Grid>
                    </Container>
                </Fade>
            </Fragment>
        );
    } else {
        return <CircularProgress />
    }
}

export default artpieces;