import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const getThemeObj = (theme) => {
    return {}
}

const useStyles = makeStyles((theme) => (getThemeObj(theme)))

const SvgHelper = (props) => {
    const classes = useStyles();
    const {path, color = "#FFF", size = 24} = props

    return (
        <svg style={{width: size, height: size}} viewBox="0 0 24 24">
            <path fill={color}
                  d={path}/>
        </svg>
    );
}

export default SvgHelper;