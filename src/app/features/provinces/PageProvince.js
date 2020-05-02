import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import PageLayout from '../../components/PageLayout';
import MapProvinces from './MapProvinces';
import ListProvinces from './ListProvinces';
import { fetchProvinces, useProvincesSelectors } from './SliceProvince'

function PageProvinces({ children }) {
  const dispatch = useDispatch()
  const { provincesLoading, provincesError, provinces } = useProvincesSelectors()
  useEffect(() => {
    dispatch(fetchProvinces())
  }, [dispatch])

  return (
    <PageLayout>
      <MapProvinces>
        {!provincesLoading && !provincesError ? <ListProvinces provinces={provinces} /> : null}
      </MapProvinces>
    </PageLayout>
  );
}

export default PageProvinces;
