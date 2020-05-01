import React from 'react';
import pt from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Map as LfMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const useStyles = createUseStyles({
  root: {
    width: '100%',
  },
});

/**
 * @param {Object} children
 * @param {...Object} others - passthrough of leaflet Map component props {@link https://react-leaflet.js.org/docs/en/components.html#map}
 */

function Map({ children, ...others }) {
  const classes = useStyles();
  return (
    <LfMap className={classes.root} {...others}>
      {children}
    </LfMap>
  );
}

Map.propTypes = {
  children: pt.node.isRequired,
};

export default Map;
