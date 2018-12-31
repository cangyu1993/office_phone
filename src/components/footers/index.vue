<template>
    <div class="all bgColor addpading">
      <div class="box_top">
        <p class="box_title">联系我们</p>
        <p class="box_title">联系我们</p>
        <p class="box_title">联系我们</p>
        <p class="box_title">联系我们</p>
        <p class="box_title">联系我们</p>
        <p class="box_title" style="border-right: none">联系我们</p>
      </div>
      <p class="num">©北京中软好泰科技有限责任公司版权所有 京ICP备18050968号-1</p>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
.all{
  padding: .3rem 0;
  .box_top{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .box_title{
      font-size: .3rem;
      color: #ccc;
      padding: 0 .1rem;
      margin: .1rem .1rem;
      border-right: 1px solid #fff;
    }
  }
  .num{
    margin-top: .2rem;
    font-size: .23rem;
    text-align: center;
    line-height: 1.5;
    color: #ccc;
  }
}
</style>
