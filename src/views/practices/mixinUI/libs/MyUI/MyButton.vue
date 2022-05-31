<!--
 * @Descripttion: 
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
-->
<template>
    <button :class="['my-btn', `my-btn-${type}`]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: String
    }
}
</script>

<style lang="scss" scoped>
.my-btn {
    height:30px;
    padding: 0 10px;
    border: none;
    outline: none;
}
.my-btn.my-btn-primary {
    background-color: cornflowerblue;
    color: #fff;
}
.my-btn.my-btn-danger {
    background-color: crimson;
    color: #fff;
}
.my-btn.my-btn-success {
    background-color: darkseagreen;
    color: #fff;
}
</style>