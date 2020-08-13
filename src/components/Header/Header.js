import React, { Fragment } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Start from '../Start/Start';
import Artpieces from '../Artpieces/Artpieces';
import ArtpieceDetail from '../ArtpieceDetail/ArtpieceDetail';
import NotFound from '../NotFound/NotFound';
import Links from '../Links/Links';
import Test from '../Test/Test';
import References from '../References/References';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
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
        },

        navLink: {
            marginLeft: '0px',
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
                <Breadcrumbs className={classes.nav}>

                <li><Link to="/">
                        <SVG className={classes.logo}
                            src={require('./uni_logo.svg')}
                            description="Universität Bremen Logo"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        />
                    </Link></li>

                    <Link className={classes.navLink} to="/">Start</Link>
                    <Link className={classes.navLink} to='/artpieces'>Artpieces</Link>
                    <Link className={classes.navLink} to="/references">References</Link>
                    <Link className={classes.navLink} to="/links">Links</Link>
                    <Link className={classes.navLink} to="/test">Test</Link>
                </Breadcrumbs>
                <Switch className={classes.links}>
                    <Route exact path='/' component={Start} />
                    <Route exact path='/artpieces' component={Artpieces} />
                    <Route exact path='/references' component={References} />
                    <Route exact path='/links' component={Links} />
                    <Route exact path='/test' component={Test} />
                    <Route path='/artpieces/:id' component={ArtpieceDetail} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </Fragment>
    );
}

export default Header;