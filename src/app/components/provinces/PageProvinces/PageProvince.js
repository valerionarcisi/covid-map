import React from 'react';
import useFetchProvsAndSaveToRedux from '../../../api/useFetchProvsAndSaveToRedux';
import PageLayout from '../../atoms/PageLayout';
import MapProvinces from '../MapProvinces'
import ListProvinces from './../ListProvinces'

function PageProvinces({ children }) {
  const doFetchProvsAndSaveToRedux = useFetchProvsAndSaveToRedux();
  doFetchProvsAndSaveToRedux();

  return <PageLayout>
    <MapProvinces>
      <ListProvinces />
    </MapProvinces>
  </PageLayout>;
}

export default PageProvinces;
