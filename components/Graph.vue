<template>
  <div>
    <div id="checkbox_parent">
      <v-card-title class="checkbox-title">人口構成(総人口)</v-card-title>
      <v-card-text class="chart-container">
        <v-progress-circular v-if="loading" indeterminate />
        <div id="message">
          <p v-if="!loaded && !loading && !selectableCount && !load_failed">
            都道府県を選択してください。
          </p>
          <p v-if="!loaded && !loading && selectableCount && !load_failed">
            選択可能な件数は10件までです。
          </p>
          <p v-if="load_failed">
            グラフデータの取得に失敗しました。再度選択し直してください。
          </p>
        </div>
        <line-chart v-if="loaded" :chart-data="chartdata" />
      </v-card-text>
    </div>
  </div>
</template>

<script>
import resas from '../plugins/modules/resas_api'
import LineChart from './LineChart.vue'
export default {
  components: { LineChart, resas },
  data() {
    return {
      loading: false,
      loaded: false,
      load_failed: false,
      selectableCount: false,
      chartdata: null,
    }
  },
  methods: {
    async getPrefData(item) {
      if (0 < item.length && item.length <= 10) {
        this.loading = true
        await Promise.all(
          item.map(async (i) => {
            return await resas.getPrefPopulation(i)
          })
        )
          .then((result) => {
            this.chartdata = {
              labels: [
                1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005,
                2010, 2015, 2020, 2025, 2030, 2035, 2040, 2045,
              ],
              datasets: result,
            }
            this.loading = false
            this.loaded = true
          })
          .catch(() => {
            this.loading = false
            this.load_failed = true
          })
      } else if (10 < item.length) {
        //グラフに表示する件数を10件に制限
        this.loading = false
        this.loaded = false
        this.selectableCount = true
      } else {
        //まだ都道府県が選択されていない時
        this.loaded = false
        this.selectableCount = false
      }
    },
  },
}
</script>
