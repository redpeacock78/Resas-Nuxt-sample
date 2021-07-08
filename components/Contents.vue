<template>
  <div>
    <Header />
    <v-progress-circular v-if="$fetchState.pending" indeterminate />
    <check-pref-list v-if="!$fetchState.error" :prefData="prefData" />
    <p v-if="$fetchState.error">
      データの取得に失敗しました。リロードしてください。
    </p>
  </div>
</template>

<script>
import resas from '../plugins/modules/resas_api'
import Header from '../components/Header.vue'
import CheckPrefList from './CheckPrefList.vue'
export default {
  components: {
    Header,
    CheckPrefList,
  },
  data() {
    return {
      prefData: [],
    }
  },
  async fetch() {
    try {
      const data = await resas.getPrefData()
      this.prefData = data
    } catch {
      throw Error()
    }
  },
}
</script>
