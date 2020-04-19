import React from 'react';
import pt from 'prop-types';
import Map from '../../atoms/Map';
import TileLayer from '../../atoms/TileLayer';

const CONFIGS_MAP = {
  baseLayers: [
    {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      name: 'street',
      selected: true,
    },
  ],
  zoom: 7,
  center: [41.902782, 12.496366],
  zoomControl: false,
  attributionControl: false,
};

function MapProvinces({ children }) {
  return (
    <Map
      center={CONFIGS_MAP.center}
      zoom={CONFIGS_MAP.zoom}
      zoomControl={CONFIGS_MAP.zoomControl}
      attributionControl={CONFIGS_MAP.attributionControl}
    >
      <TileLayer baseTileLayers={CONFIGS_MAP.baseLayers} />
      {children}
    </Map>
  );
}

MapProvinces.propTypes = {
  children: pt.node.isRequired,
};

export default MapProvinces;
