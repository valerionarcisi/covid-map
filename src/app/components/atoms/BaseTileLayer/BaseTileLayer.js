import React from 'react';
import pt from 'prop-types';
import { LayersControl, TileLayer } from 'react-leaflet';

/**
 * @param {Array} baseTileLayer
 * @param {...Object} props - passthrough of leaflet baseTileLayer component props
 */
function BaseTileLayer({ baseTileLayers, ...props }) {
  return (
    <LayersControl {...props}>
      {baseTileLayers.map((layer) => {
        const {
          url, selected, name, ...other
        } = layer;
        return (
          <LayersControl.BaseLayer name={name} checked={!!selected} key={name}>
            <TileLayer url={url} {...other} />
          </LayersControl.BaseLayer>
        );
      })}
    </LayersControl>
  );
}

BaseTileLayer.propTypes = {
  baseTileLayers: pt.array.isRequired,
};

export default BaseTileLayer;
