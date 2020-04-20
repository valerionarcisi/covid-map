import React from 'react';
import pt from 'prop-types';
import CircleMarker from '../../atoms/CircleMarker';
import PopupProvinces from './../PopupProvinces';

export const radius = (num) => {
  if (typeof num === 'undefined') {
    return 10;
  }

  if (2 <= num && num <= 500) {
    return 5;
  }

  if (501 <= num && num <= 5000) {
    return 10;
  }

  if (5001 <= num && num <= 10000) {
    return 15;
  }

  if (10001 <= num) {
    return 20;
  }
};

/**
 * @param {Array} center - center can be a array of [lat, lng]
 * @param {Object} data - it contains the data of province
 * @example {
 *      region: denominazione_regione,
 *      city: denominazione_provincia,
 *      relevatedAt: data,
 *      infected: totale_casi
 * }
 * @param {Number} infected - infected in province
 */

function Province({ center, data }) {
  const { city, region, relevatedAt, infected } = data;
  return (
    <CircleMarker center={center} radius={radius(infected)}>
      <PopupProvinces
        region={region}
        city={city}
        relevatedAt={relevatedAt}
        infected={infected}
      />
    </CircleMarker>
  );
}

Province.propTypes = {
  center: pt.array.isRequired,
  data: pt.shape({
    region: pt.string.isRequired,
    city: pt.string.isRequired,
    relevatedAt: pt.string.isRequired,
    infected: pt.number.isRequired,
  }).isRequired,
};

export default Province;
