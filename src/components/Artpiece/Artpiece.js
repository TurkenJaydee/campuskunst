import React from "react";
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
      height: "100%",
    },
    actionArea: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "flex-start",
      // Fokus-Rahmen für Tastaturnutzer sichtbar machen
      "&:focus-visible": {
        outline: "3px solid #1976d2",
        outlineOffset: "2px",
      }
    },
    cardMediaContent: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1, 
    },
    chip: {
      marginRight: "0.5rem",
      marginBottom: '0.5rem',
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
      marginTop: "auto", 
    },
    tags: {
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  const imageEmpty = (imageString) => {
    try {
      return `${window.location.origin}${process.env.PUBLIC_URL}/img/${imageString}`;
    } catch (e) {
      return "https://southseattle.edu/sites/default/files/error404/south-seattle-otter.jpg";
    }
  };

  const returnTags = (tagList) => {
    if (tagList) {
      return tagList.split(",").map((tag, index) => (
        <Chip
          className={classes.chip}
          key={index} 
          color="primary"
          variant="default"
          size="small"
          label={tag.trim()}
          // aria-hidden verhindert, dass Screenreader das Icon für jedes Tag vorlesen
          icon={<LocalOfferOutlinedIcon className={classes.tagIcon} aria-hidden="true" />}
        />
      ));
    }
  };

  try {
    return (
      <Card className={classes.card} component="article">
        <CardActionArea 
          className={classes.actionArea} 
          component={Link} 
          to={`/kunstwerke/${props.name.replace("/", "-")}`}
          aria-label={`Details zum Kunstwerk: ${props.name}`}
        >
          <div className={classes.cardMediaContent}>
            <CardMedia 
              component="img" 
              image={imageEmpty(props.image)} 
              height="300" 
              alt={props.alt || `Ansicht von ${props.name}`} 
            />
            <CardContent className={classes.firstChild}>
              <Typography className={classes.name} gutterBottom variant="caption" variantMapping={{ caption: "h2" }}>
                {props.name}
              </Typography>
            </CardContent>
          </div>
          <CardContent className={classes.lastChild}>
            <div className={classes.tags}>
              {returnTags(props.tag)}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  } catch (e) {
    console.log(e);
    return <CircularProgress aria-label="Lade Kunstwerk..." />;
  }
};

export default artpiece;