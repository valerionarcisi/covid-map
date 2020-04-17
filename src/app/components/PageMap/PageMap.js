import React from 'react';
import { Popup } from 'react-leaflet';
import useFetchProvsAndSaveToRedux from '../../api/useFetchProvsAndSaveToRedux';
import PageLayout from '../atoms/PageLayout';
import Map from '../atoms/Map';
import TileLayer from '../atoms/TileLayer'
import CircleMarker from '../atoms/CircleMarker'

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
}


function PageMap() {

  const doFetchProvsAndSaveToRedux = useFetchProvsAndSaveToRedux();
  doFetchProvsAndSaveToRedux();

  return <PageLayout>
    <Map center={CONFIGS_MAP.center} zoom={CONFIGS_MAP.zoom} zoomControl={CONFIGS_MAP.zoomControl} attributionControl={CONFIGS_MAP.attributionControl}>
      <TileLayer baseTileLayers={CONFIGS_MAP.baseLayers} />
      <CircleMarker center={CONFIGS_MAP.center} >
        <Popup>
          FooBar!!
          </Popup>
      </CircleMarker>
    </Map>
  </PageLayout>

}

export default PageMap;
