<template>
  <div>
    <p class="text1">{{message}}</p>
    <div class="iconfont icon-tupian"
         style="width:50px;height:50px;"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '首页'
    }
  }
}
</script>

<style scoped lang="less">
@import '~styles/less/common.less';
.text1 {
  color: @commoncolor;
}
</style>
