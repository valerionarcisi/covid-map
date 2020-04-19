import React from 'react';
import pt from 'prop-types';
import { LayersControl, TileLayer as LfTileLayer } from 'react-leaflet';

/**
 * @param {Array} baseTileLayer
 * @param {...Object} props - passthrough of leaflet baseTileLayer component props
 */
function TileLayer({ baseTileLayers, ...props }) {
  return (
    <LayersControl {...props}>
      {baseTileLayers.map((layer) => {
        const { url, selected, name, ...other } = layer;
        return (
          <LayersControl.BaseLayer name={name} checked={!!selected} key={name}>
            <LfTileLayer url={url} {...other} />
          </LayersControl.BaseLayer>
        );
      })}
    </LayersControl>
  );
}

TileLayer.propTypes = {
  baseTileLayers: pt.array.isRequired,
};

export default TileLayer;
