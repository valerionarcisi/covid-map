import React from 'react';
import pt from 'prop-types';
import { CircleMarker as LfCircleMarker } from 'react-leaflet';

/**
 * @param {Array} data - data can be a array of [lat, lng]
 * @param {Number} radius - radius default is 30
 * @param {...Object} others - passthrough of leaflet CircleMarker component props {@link https://leafletjs.com/reference-1.6.0.html#circlemarker }
 */

function CircleMarker({ center, ...others }) {
  return <LfCircleMarker center={center} {...others} />;
}

CircleMarker.propTypes = {
  center: pt.array.isRequired,
  radius: pt.number
};

CircleMarker.defaultPros = {
  radius: 30
};

export default CircleMarker
