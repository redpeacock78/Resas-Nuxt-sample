import { cacheAdapterEnhancer } from 'axios-extensions'

export default function ({ $axios }) {
  $axios.defaults.adapter = cacheAdapterEnhancer($axios.defaults.adapter)
}
