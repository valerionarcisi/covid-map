import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import ItemProvince from './ItemProvince';
import { fetchProvinces } from './SliceProvince'


function ListProvinces() {
  const dispatch = useDispatch()

  const { provincesLoading, provincesError, provinces } = useSelector(
    (state) => {
      return {
        provincesLoading: state.provinces.loading,
        provincesError: state.provinces.error,
        provinces: state.provinces.data
      }
    },
    shallowEqual
  )

  console.log(provincesLoading, provincesError)

  useEffect(() => {
      dispatch(fetchProvinces())
  }, [dispatch])

  return provinces.map(
    ({
      denominazione_provincia,
      denominazione_regione,
      codice_provincia,
      data,
      lat,
      long,
      totale_casi,
    }) => (
        <ItemProvince
          key={codice_provincia}
          center={[lat, long]}
          data={{
            region: denominazione_regione,
            city: denominazione_provincia,
            relevatedAt: data,
            infected: totale_casi,
          }}
        />
      )
  );
}

export default ListProvinces;
