<template>
  <div>
    <Header />
    <v-progress-circular v-if="$fetchState.pending" indeterminate />
    <check-pref-list
      v-if="!$fetchState.error"
      :prefData="prefData"
      @updatePrefData="updatePrefData"
    />
    <p v-if="$fetchState.error">
      データの取得に失敗しました。リロードしてください。
    </p>
    <graph ref="graph" />
  </div>
</template>

<script>
import resas from '../plugins/modules/resas_api'
import Header from '../components/Header.vue'
import CheckPrefList from './CheckPrefList.vue'
import Graph from './Graph.vue'
export default {
  components: {
    Header,
    CheckPrefList,
    Graph,
  },
  data() {
    return {
      updatePrefDatas: '',
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
  methods: {
    updatePrefData(updatePrefDatas) {
      this.updatePrefDatas = updatePrefDatas
      this.$refs.graph.getPrefData(updatePrefDatas)
    },
  },
}
</script>
