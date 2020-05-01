import React from 'react';
import PageLayout from '../../components/PageLayout';
import MapProvinces from './MapProvinces';
import ListProvinces from './ListProvinces';

function PageProvinces({ children }) {

  return (
    <PageLayout>
      <MapProvinces>
        <ListProvinces />
      </MapProvinces>
    </PageLayout>
  );
}

export default PageProvinces;
