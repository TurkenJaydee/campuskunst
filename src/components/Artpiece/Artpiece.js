import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";

const artpiece = (props) => {
  const useStyles = makeStyles((theme) => ({
    card: {
      width: "100%",
    },

    link: {
      textDecoration: "none",
      display: 'flex',
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",

      "&:visited, &:hover, &:link, &:active": {
        textDecoration: "none",
        color: "inherit",
      },
    },

    chip: {
      marginRight: "0.5rem",

      "&:hover": {
          cursor: 'pointer',
      },
    },

    name: {
      marginBottom: "0",
      fontWeight: "400",
    },

    tagIcon: {
      display: "inline-block",
      verticalAlign: "middle",
      marginLeft: "0.5rem",
      color: "white",
    },

    firstChild: {
      textAlign: "center",
      paddingBottom: "0 !important",
    },

    lastChild: {
      paddingBottom: "1rem !important",
    },

    meta: {
      paddingBottom: "0",
      textAlign: "center",
    },

    tags: {
      textAlign: "center",
    },
    actionArea: {
      height: "100%",
      display: "flex",
      alignItems: "flex-start",
    },
  }));

  const classes = useStyles();

  const imageEmpty = (imageString) => {
    try {
      return process.env.PUBLIC_URL + "/img/" + imageString;
    } catch (e) {
      console.log("Image not found of Artpiece with ID: " + props.id);
      return "https://southseattle.edu/sites/default/files/error404/south-seattle-otter.jpg";
    }
  };

  const returnTags = (tagList) => {
    if (tagList) {
      return tagList.split(",").map((tag) => {
        return (
          <Fragment>
            <Chip
              className={classes.chip}
              key={tagList.indexOf(tag)}
              color="primary"
              variant="default"
              size="small"
              label={tag.trim()}
              icon={<LocalOfferOutlinedIcon className={classes.tagIcon} />}
            />
          </Fragment>
        );
      });
    }
  };

  try {
    return (
      <Fragment>
        <Card className={classes.card}>
          <CardActionArea className={classes.actionArea} tabIndex="-1">
            <Link className={classes.link} to={`/kunstwerke/${props.name.replace("/", "-")}`}>
              <div>
                <CardMedia component="img" image={imageEmpty(props.image)} title={props.name} height="300" alt={props.alt}></CardMedia>
                <CardContent className={classes.firstChild}>
                  <Typography className={classes.name} gutterBottom variant="caption">
                    {props.name}
                  </Typography>
                </CardContent>
              </div>

              <CardContent className={classes.lastChild}>
                <Typography variant="subtitle2" variantMapping={{ subtitle2: "p" }} className={classes.tags}>
                  {returnTags(props.tag)}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </Fragment>
    );
  } catch (e) {
    console.log(e);
    return <CircularProgress />;
  }
};

export default artpiece;
