import axios from 'axios'

export default async function getProvince() {
  const url = `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json`
  const { data } = await axios.get(url)
  return data
}
