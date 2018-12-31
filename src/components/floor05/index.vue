<template>
  <div class="all bgColor">
    <p class="title">独特性和实用性让您更轻松地管理酒店</p>
    <div class="box addpading">
      <div class="box_item addpading">
        <p class="item_title">零服务器、一体化管理系统，让您成本无忧</p>
        <p class="item_content">
          服务器云端部署，
          系统适用于PC端、移动端，
          集成前台、客房、餐饮、财务、
          销售等功能，旨在为您降低运营成本，
          满足您所有对客服务需求
        </p>
      </div>

      <div class="box_item addpading" style="margin-top: .2rem">
        <p class="item_title">零服务器、一体化管理系统，让您成本无忧</p>
        <p class="item_content">
          服务器云端部署，
          系统适用于PC端、移动端，
          集成前台、客房、餐饮、财务、
          销售等功能，旨在为您降低运营成本，
          满足您所有对客服务需求
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="scss">
.all{
  margin-top: -.05rem;
  box-sizing: border-box;
  .title{
    font-size: .4rem;
    text-align: center;
    line-height: 3;
  }
  .box{
    .box_item{
      background: #fff;
      min-height: 3.5rem;
      border-radius: 6px;
      .item_title{
        padding: .2rem 0;
        color: skyblue;
        font-size: .32rem;
        font-weight: 700;
      }
      .item_content{
        margin-top: .1rem;
        font-size: .32rem;
        line-height: 1.5;
        color: #ccc;
      }
    }
  }
}
</style>
