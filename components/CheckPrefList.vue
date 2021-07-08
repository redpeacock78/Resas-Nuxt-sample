<template>
  <div id="checkbox-parent">
    <v-card-title class="checkbox-title">都道府県</v-card-title>
    <v-card-text id="checkboxes">
      <v-checkbox
        v-for="(item, index) in prefData.result"
        :key="index"
        class="checkbox-items"
        :label="item.prefName"
        v-bind:value="item"
        v-model="checkedPrefData"
        @change="check"
      />
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ['prefData'],
  data() {
    return {
      checkedPrefData: [],
    }
  },
  methods: {
    check() {
      this.$emit('updatePrefData', this.checkedPrefData)
    },
  },
}
</script>

<style>
#checkbox-parent {
  margin: 2em auto;
  padding: 1em;
  width: 90%;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 1px 1px 2px #ccc;
  text-align: center;
}
#checkboxes {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-flow: row wrap;
}
.checkbox-title {
  color: #828c9a;
  font-weight: normal;
}
.checkbox-items {
  font-size: 18px;
  font-weight: normal;
  color: #828c9a;
  width: 100px;
  height: 30px;
  justify-content: flex-start;
  cursor: pointer;
  position: relative;
}
.v-progress-circular {
  color: #007bbb;
}
#message {
  color: #828c9a;
  font-weight: normal;
}
</style>
