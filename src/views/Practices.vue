<!--
 * @Descripttion: 
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
-->
<template>
  <div class="container">
    <div class="container-item directive">
      <span>directive:</span>
      <Directive />
    </div>
    <div class="container-item mixinui">
      <span>mixinui:</span>
      <MixinUI />
    </div>
  </div>
</template>

<script>
import Directive from "@/views/practices/directives/Directive";
import MixinUI from "@/views/practices/mixinUI/MixinUI";
export default {
  components: {
    Directive,
    MixinUI
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 8vh;
  .container-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    span {
        margin-right: 20px;
    }
  }
}
</style>
