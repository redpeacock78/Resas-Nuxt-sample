<template>
  <div>
    <Header />
    <div id="prefdata-load" v-if="$fetchState.error || $fetchState.error">
      <v-progress-circular v-if="$fetchState.pending" indeterminate />
      <p v-if="$fetchState.error">
        データの取得に失敗しました。リロードしてください。
      </p>
    </div>
    <check-pref-list
      v-if="!$fetchState.error"
      :prefData="prefData"
      @updatePrefData="updatePrefData"
    />
    <graph v-if="!$fetchState.error" ref="graph" />
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

<style>
#prefdata-load {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  margin: 2em auto;
  padding: 1em;
  width: 90%;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 1px 1px 2px #ccc;
  text-align: center;
  flex-flow: row wrap;
  color: #828c9a;
  font-weight: normal;
}
</style>
