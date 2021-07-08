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
}
