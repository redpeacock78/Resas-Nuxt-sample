<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes'
import { Paired10 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer'
export default {
  extends: Line,
  mixins: [reactiveProp],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '人口(単位: 人)',
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '西暦(単位: 年)',
              },
            },
          ],
        },
        plugins: {
          colorschemes: {
            scheme: Paired10,
          },
        },
      },
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
    this.reRenderChart()
  },
  methods: {
    reRenderChart() {
      this.renderChart(this.chartData, this.options)
    },
  },
}
</script>
