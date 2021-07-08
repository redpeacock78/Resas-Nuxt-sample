import { cacheAdapterEnhancer } from 'axios-extensions'
export let axios

export default function ({ $axios }) {
  $axios.defaults.adapter = cacheAdapterEnhancer($axios.defaults.adapter)
  axios = $axios
}
