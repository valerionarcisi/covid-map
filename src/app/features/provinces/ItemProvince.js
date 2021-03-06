import React from 'react';
import pt from 'prop-types';
import CircleMarker from './../../components/CircleMarker';
import PopupProvinces from './PopupProvinces';

/**
 *
 * @param {Number} num - this is base number to create a radius for CircleMarker
 *
 * @returns {Number} if 2 <= num <= 500 return 5, if 501 <= num <= 5000 return 10,  5001 <= num <= 10000 return 15, 10001 <= num return 20
 */
export const radius = (num) => {
  if (typeof num !== 'number' || isNaN(num)) {
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

function ItemProvince({ center, data }) {
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

ItemProvince.propTypes = {
  center: pt.array.isRequired,
  data: pt.shape({
    region: pt.string.isRequired,
    city: pt.string.isRequired,
    relevatedAt: pt.string.isRequired,
    infected: pt.number.isRequired,
  }).isRequired,
};

export default ItemProvince;
