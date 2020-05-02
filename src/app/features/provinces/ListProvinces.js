import React from 'react';
import pt from 'prop-types';
import ItemProvince from './ItemProvince';

function ListProvinces({provinces}) {
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

ListProvinces.propTypes = {
  provinces: pt.array.isRequired,
};

export default ListProvinces;
