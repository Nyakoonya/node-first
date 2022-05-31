<!--
 * @Descripttion: 
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
-->
<template>
  <div
    class="nav-bar"
    tabindex="0"
    @blur="handleClearCurIdx"
    v-nav-current="{
      curIdx,
      className: 'nav-item',
      activeClass: 'nav-current',
    }"
  >
    <div
      class="nav-item"
      v-for="(item, index) in navList"
      :key="index"
      @click="handleChangeCurIdx(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import navCurrent from "./directives";
export default {
  directives: {
    navCurrent,
  },
  data() {
    return {
      curIdx: 0,
      navList: ["Option1", "Option2", "Option3", "Option4"],
    };
  },
  methods: {
    handleChangeCurIdx(index) {
      this.curIdx = index;
    },
    handleClearCurIdx (){
        console.log('clear :>> ');
        this.curIdx = null;
    }
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #000;
  width: 70%;
  height: 70px;
  .nav-item {
    flex: 1;
    height: 70px;
    display: inline-block;
    text-align: center;
    line-height: 70px;
  }
  .nav-current {
      background-color: #000;
      color: #fff;
  }
}
</style>
