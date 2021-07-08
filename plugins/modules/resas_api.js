import { axios } from '../axios'

export default {
  getPrefData() {
    return axios.$get(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: {
          'X-API-KEY': process.env.API_KEY,
        },
      }
    )
  },
  getPrefPopulation(prefData) {
    const URL = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefData.prefCode}`
    const name = prefData.prefName
    return axios
      .$get(URL, {
        headers: {
          'X-API-KEY': process.env.API_KEY,
        },
      })
      .then((resp) => {
        return {
          label: name,
          data: resp.result.data[0].data.map((data) => data.value),
          fill: false,
        }
      })
  },
}
