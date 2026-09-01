import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  linkStyle: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#BB1212",
      textDecorationThickness: "2px",
    },
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  contactStyle: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#BB1212",
      textDecorationThickness: "2px",
    },
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "1.3rem",
    fontWeight: "500",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  },
  
  leftContainer: {
    display: "flex",
    gap: "20px",
    
    // Mobile: Untereinander
    flexDirection: "column", 
    alignItems: "flex-start",

    // Desktop: Nebeneinander
    "@media (min-width:600px)": {
      flexDirection: "row",
      alignItems: "center",
    }
  },

  buaLogo: {
    zIndex: 10000,
    width: "70px",
    marginLeft: "2rem",
    marginRight: "1rem",

    [theme.breakpoints.down("sm")]: {
      marginRight: "2rem",
      width: "70px",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        backgroundColor: "#f8f9fa",
        padding: "20px 30px",
        borderTop: "1px solid #e7e7e7",
        marginTop: "40px",
      }}
    >
      <div className={classes.leftContainer}>
        {/* Das Logo, verlinkt zum Archiv */}
        <a 
          href="https://www.uni-bremen.de/archiv" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img
            className={classes.buaLogo}
            src={require("../../logos/logo_archiv_web_200.png")}
            description="Universität Bremen Logo"
            alt="Zentralarchiv Bremen Logo"
          />
        </a>

        {/* Der Textlink zum Archiv */}
        <a 
          href="https://www.uni-bremen.de/archiv" 
          target="_blank" 
          rel="noopener noreferrer"
          className={classes.contactStyle}
        >
          Kontakt
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <a
          href="https://www.uni-bremen.de/impressum?disableOptIn=1&cHash=050edf422cfcb27451fbd64bc1b60dfa"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.linkStyle}
        >
          Impressum
        </a>

        <a
          href="https://www.uni-bremen.de/datenschutz?disableOptIn=1&cHash=889a57a8fa960730635bc4fd1896a651"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.linkStyle}
        >
          Datenschutzerklärung
        </a>

        <a
          href="https://www.uni-bremen.de/barrierefreiheit/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.linkStyle}
        >
          Barrierefreiheit
        </a>
      </div>
    </footer>
  );
}