import React from 'react';
import pt from 'prop-types';
import { Popup } from 'react-leaflet';
import CircleMarker from '../../atoms/CircleMarker';


/**
 * @param {Array} center - center can be a array of [lat, lng]
 * @param {String} name - name of province
 * @param {Number} infected - infected in province
 */

function Province({center, name, infected}) {
  return (
    <CircleMarker center={center}>
      <Popup>{name} - {infected}</Popup>
    </CircleMarker>
  );
}

Province.propTypes = {
  center: pt.array.isRequired,
  name: pt.string.isRequired,
  infected: pt.number.isRequired,
};


export default Province;
