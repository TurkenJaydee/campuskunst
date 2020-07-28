import React, { Fragment, useState } from "react";
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';


const Tag = (props) => {

    const [isToggled, setToggle] = useState(false);

    const removeTag = name => event => {
        props.onClick(name);
        setToggle(prevStatus => !prevStatus);
    };

    const addTag = event => {
        props.onClick(event.target.innerText);
        setToggle(prevStatus => !prevStatus);
    };

    const returnTagJSX = () => {
        return isToggled ?
            (<Chip
                clickable
                key={props.index}
                variant={isToggled ? 'default' : 'outlined'}
                color="primary"
                label={props.name}
                onDelete={removeTag(props.name)}
                onClick={addTag}
            />)
            :
            (<Chip
                clickable
                key={props.index}
                variant={isToggled ? 'default' : 'outlined'}
                color="primary"
                label={props.name}
                onClick={addTag}
            />)
    };

    const useStyles = makeStyles(theme => ({
    }));

    const classes = useStyles();

    return (
        <Fragment>
            <Fade in={true} timeout={1}>
                {returnTagJSX()}
            </Fade>
        </Fragment>
    );
};

export default Tag;
