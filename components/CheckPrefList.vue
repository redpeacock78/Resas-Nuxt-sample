<template>
  <div id="checkbox-parent">
    <div id="checkbox-title">都道府県</div>
    <div id="checkboxes">
      <div
        class="checkbox"
        v-for="(item, index) in prefData.result"
        :key="index"
      >
        <input
          type="checkbox"
          class="checkbox-items"
          :id="'pref' + index"
          :value="item"
          v-model="checkedPrefData"
          @change="check"
        />
        <label :for="'pref' + index">
          {{ item.prefName }}
        </label>
      </div>
    </div>
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
  width: 87.5%;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 1px 1px 2px #ccc;
  text-align: center;
}
#checkbox-title {
  display: flex;
  padding: 16px;
  color: #828c9a;
  font-size: 1.25rem;
  font-weight: normal;
  letter-spacing: 0.0125em;
  line-height: 2rem;
}
#checkboxes {
  display: flex;
  flex-flow: row wrap;
  padding: 16px;
  padding-left: 15px;
  padding-top: 0;
}
.checkbox {
  text-align: left;
  margin-top: 19.5px;
}
.checkbox label {
  display: block;
  float: left;
  width: 75px;
  margin-bottom: 2.5px;
  color: #828c9a;
  font-size: 16px;
  font-weight: normal;
}
.checkbox input[type='checkbox'] {
  display: none;
}
.checkbox input[type='checkbox'] + label {
  display: none;
  cursor: pointer;
  display: inline-block;
  position: relative;
  padding-left: 26px;
}
.checkbox input[type='checkbox'] + label::before {
  content: '';
  position: absolute;
  display: block;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  margin-top: -9px;
  margin-left: 5px;
  left: 0;
  top: 50%;
  border: 2px solid;
  border-radius: 20%;
  border-color: #808080;
  background-color: #fff;
}
.checkbox input[type='checkbox']:checked + label::before {
  background-color: #808080;
}
.checkbox input[type='checkbox'] + label::after {
  content: '';
  position: absolute;
  display: block;
  box-sizing: border-box;
  width: 12px;
  height: 6.5px;
  margin-top: -5px;
  top: 50%;
  left: 8px;
  transform: rotate(-47deg);
  border-bottom: 2.5px solid;
  border-left: 2.5px solid;
  border-color: #fff;
  opacity: 0;
}
.checkbox input[type='checkbox']:checked + label::after {
  opacity: 1;
}
</style>
