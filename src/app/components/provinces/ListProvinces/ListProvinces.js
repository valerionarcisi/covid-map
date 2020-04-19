import React from 'react'
import { useSelector } from 'react-redux';
import { getAllProvinces } from './../../../store/provinces/selectors'
import Province from './../Province'

function ListProvinces() {
  const data = useSelector(getAllProvinces);
  return data.map(({
    denominazione_provincia,
    codice_provincia,
    lat,
    long,
    totale_casi
  }) => <Province
      key={codice_provincia}
      center={[lat, long]}
      name={denominazione_provincia}
      infected={totale_casi}
    />)
}

export default ListProvinces
