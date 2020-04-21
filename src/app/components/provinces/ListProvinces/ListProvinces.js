import React from 'react';
import { useSelector } from 'react-redux';
import { getValidProvinces } from './../../../store/provinces/selectors';
import Province from './../Province';

function ListProvinces() {
  const data = useSelector(getValidProvinces);
  return data.map(
    ({
      denominazione_provincia,
      denominazione_regione,
      codice_provincia,
      data,
      lat,
      long,
      totale_casi,
    }) => (
      <Province
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
