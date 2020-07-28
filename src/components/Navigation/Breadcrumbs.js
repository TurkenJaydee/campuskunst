import React from "react";
import { Breadcrumbs as MaterialBreadcrumbs } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Container from '@material-ui/core/Container';
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  breadcrumbs: {
    borderBottom: '1px solid #000',
    paddingBottom: '0.5rem',
  },

}));


const Breadcrumbs = ({ crumbs }) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const getActualName = () => {
    return capitalize(useLocation().pathname.split('/').slice(-1)[0]);
  };

  const classes = useStyles();

  return (
    <Container maxWidth="lg" >
      <MaterialBreadcrumbs className={classes.breadcrumbs} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {crumbs.map(({ name, path }, key) =>
          key + 1 === crumbs.length ? (
            <Typography key={key} color="textPrimary" variant="h5">
              {getActualName()}
            </Typography>
          ) : (
              <Link key={key} href={path} color="textPrimary" aria-current="page">
                <Typography color="textPrimary" variant="h5">
                  {name}
                </Typography>
              </Link>
            )
        )}
      </MaterialBreadcrumbs>
    </Container>
  );
};

export default Breadcrumbs;
