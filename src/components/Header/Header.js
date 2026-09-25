import React, { Fragment } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Start from '../Start/Start';
import Artpieces from '../Artpieces/Artpieces';
import ArtpieceDetail from '../ArtpieceDetail/ArtpieceDetail';
import NotFound from '../NotFound/NotFound';
import Links from '../Links/Links';
import Test from '../Test/Test';
import References from '../References/References';
// A11y Fix: Wenn das eine Hauptnavigation ist, sollte es kein Breadcrumb-Component sein. 
// Breadcrumbs sind nur für "Pfad"-Navigation (Start > Kategorie > Artikel).
import { makeStyles } from '@material-ui/core/styles';
import SVG from 'react-inlinesvg';

const Header = () => {

    const useStyles = makeStyles(theme => ({
        nav: {
            overflow: 'hidden',
            backgroundColor: 'white',
            position: 'fixed',
            top: '0',
            width: '100%',
            paddingRight: '25%',
            paddingLeft: '25%',
            zIndex: '1',
            // Basis-Styling für das nav-Element hinzugefügt
            display: 'flex',
            alignItems: 'center',
            listStyle: 'none',
            margin: 0,
            boxSizing: 'border-box',
            height: '60px', // Feste Höhe für bessere Ausrichtung
        },

        navLink: {
            marginLeft: '1rem',
            marginRight: '1rem',
            textDecoration: 'none',
            color: 'inherit',
            "&:focus-visible": {
                outline: "2px solid #1976d2",
                outlineOffset: "2px",
            }
        },

        logo: {
            position: 'absolute',
            left: '0',
            top: '0',
            height: '100%',
            width: '25%',
            zIndex: '2',
        },
    }));

    const classes = useStyles();

    return (
        <Fragment>
            <Router>
                <header>
                    {/* Semantic Fix: Echtes <nav> und <ul> für die Navigation */}
                    <nav aria-label="Hauptnavigation">
                        <ul className={classes.nav}>
                            <li>
                                {/* A11y Fix: aria-label für den Logo-Link */}
                                <Link to="/" aria-label="Zur Startseite">
                                    <SVG className={classes.logo}
                                        src={require('../../logos/uni_logo.svg')}
                                        // A11y Fix: SVG vor Screenreadern verstecken, da der Link benannt ist
                                        aria-hidden="true"
                                        focusable="false"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    />
                                </Link>
                            </li>
                            <li><Link className={classes.navLink} to="/">Start</Link></li>
                            <li><Link className={classes.navLink} to='/artpieces'>Artpieces</Link></li>
                            <li><Link className={classes.navLink} to="/references">References</Link></li>
                            <li><Link className={classes.navLink} to="/links">Links</Link></li>
                            <li><Link className={classes.navLink} to="/test">Test</Link></li>
                        </ul>
                    </nav>
                </header>

                {/* Main-Bereich auszeichnen für semantische HTML-Struktur */}
                <main>
                    <Switch className={classes.links}>
                        <Route exact path='/' component={Start} />
                        <Route exact path='/artpieces' component={Artpieces} />
                        <Route exact path='/references' component={References} />
                        <Route exact path='/links' component={Links} />
                        <Route exact path='/test' component={Test} />
                        <Route path='/artpieces/:id' component={ArtpieceDetail} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </Router>
        </Fragment>
    );
}

export default Header;