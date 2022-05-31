<!--
 * @Descripttion: 
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
-->
<template>
  <div class="background-wrapper">
    <!-- <div :contenteditable="true">
      editable:
      <p>{{input}}</p>
    </div> -->
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { test } from "../utils/api";
export default {
  components: {
    Header,
  },
  data() {
    return {
      input: "hello",
    };
  },
  created() {
    test().then((res) => {
      console.log("res :>> ", res);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
