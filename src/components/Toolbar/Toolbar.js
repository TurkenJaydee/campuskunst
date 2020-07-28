import React, { Fragment } from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Artpieces from '../Artpieces/Artpieces';
import ArtpieceDetail from '../ArtpieceDetail/ArtpieceDetail';
import NotFound from '../NotFound/NotFound';
import Links from '../Links/Links';
import References from '../References/References';
import Slogan from '../Slogan/Slogan';
import { makeStyles } from '@material-ui/core/styles';
import SVG from 'react-inlinesvg';
import routes from "../routes";
import { Breadcrumbs } from "../Navigation/index";
import FontSelect from '../FontSelect/FontSelect';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles(theme => ({

    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },

    toolbar: {
        backgroundColor: 'white',
        position: 'fixed',
        top: '0',
        width: '100%',
        overflow: 'hidden',
        zIndex: '2',
        borderBottom: '1px solid rgb(240, 241, 243)',
    },

    toolbar_navigation: {
        display: 'flex',
        overflow: 'hidden',
        marginRight: '3.5rem',
        alignItems: 'center',

        [theme.breakpoints.up('xs')]: {
            float: 'right',
        },

        [theme.breakpoints.down('sm')]: {
            height: '4rem',
        },
    },

    logo: {
        position: 'absolute',
        left: '1%',
        top: '2%',
        width: '25%',
        zIndex: '2',

        [theme.breakpoints.up('xs')]: {
            width: '70%',
        },

        [theme.breakpoints.up('sm')]: {
            width: '50%',
        },

        [theme.breakpoints.up('sm')]: {
            width: '45%',
        },

        [theme.breakpoints.up('sm')]: {
            width: '45%',
        },

        [theme.breakpoints.up('md')]: {
            width: '35%',
        },

        [theme.breakpoints.up('lg')]: {
            width: '30%',
        },
    },

    toolbar_navigationItems: {

        fontSize: '1.2rem',
        marginRight: '5rem',

        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },

        '& ul': {
            listStyleType: 'none',
            margin: '0',
            padding: '0',
            display: 'flex',
        },

        '& li': {
            padding: '0 2rem',
            fontSize: '1.2rem',
            lineHeight: '2rem',
            position: 'relative',
        },

        '& a:after': {
            content: `''`,
            top: '3rem',
            left: '0px',
            right: '0px',
            bottom: '0px',
            background: '#BB1212',
            height: '4px',
            position: 'absolute',
            opacity: 0,
            transition: '0.2s',
        },

        '& a:hover:after': {
            opacity: 0.3,
        },

        '& a': {
            display: 'block',
            position: 'relative',
            color: 'black',
            fontSize: '1.2rem',
            textDecoration: 'none',
            padding: '1rem 0 1rem 0'
        },
    },

    activeLink: {
        position: 'relative',

        '&::after': {
            opacity: "1 !important",
        }
    },

    navWrapper: {
        flex: '1',
    },
}));


const Toolbar = ({ drawerClickHandler, setFontSize }) => {

    const classes = useStyles();

    return (
        <Fragment>
            <header className={classes.toolbar}>
                <nav className={classes.toolbar_navigation}>
                    <div>
                        <DrawerToggleButton click={drawerClickHandler} />
                    </div>
                    <div className={classes.navWrapper} />
                    <NavLink exact to={"/"}>
                            <SVG className={classes.logo}
                                src={require('./uni_logo.svg')}
                                description="Universität Bremen Logo"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            />
                        </NavLink>
                    <div className={classes.toolbar_navigationItems}>
                        <ul>
                            <li><NavLink exact to={"/"} activeClassName={classes.activeLink}>Home</NavLink></li>
                            <li><NavLink exact to={"/kunstwerke"} activeClassName={classes.activeLink}>Kunstwerke</NavLink></li>
                            <li><NavLink exact to={"/referenzen"} activeClassName={classes.activeLink}>Referenzen</NavLink></li>
                            <li><NavLink exact to={"/links"} activeClassName={classes.activeLink}>Links</NavLink></li>
                        </ul>
                    </div>
                    <FontSelect setFontSize={setFontSize} />
                </nav>
            </header>
            <Slogan />
            <Switch>
                {routes.map(({ path, name }, key) => (
                    <Route
                        exact
                        path={path}
                        key={key}
                        render={props => {
                            const crumbs = routes
                                // Get all routes that contain the current one.
                                .filter(({ path }) => props.match.path.includes(path));
                            return (
                                <Breadcrumbs crumbs={crumbs} />
                            );
                        }}
                    />
                ))}
            </Switch>
            <Switch className={classes.links}>
                <Route exact path='/' component={Home} />
                <Route exact path='/kunstwerke' component={Artpieces} />
                <Route exact path='/referenzen' component={References} />
                <Route exact path='/links' component={Links} />
                <Route path='/kunstwerke/:name' component={ArtpieceDetail} />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    );
}

export default Toolbar;