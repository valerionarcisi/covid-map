import React from 'react';
import ItemProvince from './ItemProvince';

function ListProvinces() {
  const data = []
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
