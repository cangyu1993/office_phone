<template>
    <div class="all bgColor addpading">
      <p>一站式解决方案，让您轻松告别这些烦恼</p>
      <div class="box">
        <div class="box_item ">
          <img src="https://i1.jointwisdom.cn/images/pms/service-1.png" >
          <p class="title">运营成本高</p>
          <p class="content">系统采购和维护成本高，并有昂贵的升级培训费用，运营起来成本高</p>
        </div>
        <div class="box_item ">
          <img src="https://i1.jointwisdom.cn/images/pms/service-1.png" >
          <p class="title">运营成本高</p>
          <p class="content">系统采购和维护成本高，并有昂贵的升级培训费用，运营起来成本高</p>
        </div>
        <div class="box_item ">
          <img src="https://i1.jointwisdom.cn/images/pms/service-1.png" >
          <p class="title">运营成本高</p>
          <p class="content">系统采购和维护成本高，并有昂贵的升级培训费用，运营起来成本高</p>
        </div>
        <div class="box_item ">
          <img src="https://i1.jointwisdom.cn/images/pms/service-1.png" >
          <p class="title">运营成本高</p>
          <p class="content">系统采购和维护成本高，并有昂贵的升级培训费用，运营起来成本高</p>
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
  box-sizing: border-box;
  p{
    font-size: .3rem;
    text-align: center;
    font-weight: 700;
    color: #555;
    line-height: 3.5;
  }
  .box{
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box_item{
      width: 3rem;
      height: 3.2rem;
      background: #fff;
      padding: 10px 0;
      border-radius: 6px;
      margin: 10px 10px;
      img{
        display: block;
        margin: 0 auto;
        width: 1rem;
        height: 1rem;
        line-height: 1;
      }
      .title{
        line-height: 3;
      }
      .content{
        font-size: .24rem;
        line-height: 1;
        text-align: left;
        color: #ccc;
        padding: 0 .2rem;
      }
    }
  }
}
</style>
