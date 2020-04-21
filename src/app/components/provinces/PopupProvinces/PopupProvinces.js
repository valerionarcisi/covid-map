import React from 'react';
import pt from 'prop-types';
import { Popup } from 'react-leaflet';


export const getDate = (date) => {
  if (typeof date === 'undefined') {
    throw new Error('input cant be undefined');
  }

  if (isNaN(Date.parse(date))) {
    throw new Error('string must be a date');
  }

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dd = new Date(date).getDate();
  const mm = monthNames[new Date(date).getMonth()];
  const yyyy = new Date(date).getFullYear();

  return `${dd} ${mm} ${yyyy}`;
};

/**
 * @param {String} relevatedAt- date like this: 2020-04-13T17:00:00
 * @param {String} region- name of region. for example Marche
 * @param {String} city- it is name of the province: example Fermo
 * @param {Number} infected- it is the number of total case relevated at province
 */

function PopupProvinces({ relevatedAt, region, city, infected }) {
  return (
    <Popup>
      <div>
        <span>Relevated at:</span> <span>{getDate(relevatedAt)}</span> <br />
        <span>Region:</span> <span>{region}</span> <br />
        <span>City:</span> <span>{city}</span> <br />
        <span>Infected:</span> <span>{infected}</span> <br />
      </div>
    </Popup>
  );
}

PopupProvinces.propTypes = {
  relevatedAt: pt.string.isRequired,
  region: pt.string.isRequired,
  city: pt.string.isRequired,
  infected: pt.number.isRequired,
};

export default PopupProvinces;
