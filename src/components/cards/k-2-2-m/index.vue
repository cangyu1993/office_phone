<template>
  <div class="all W690">
    <div class="title">
      <h1 class="left_title">看好健康产业发展前景</h1>
      <h1 class="right_title">安利亮相首届中国进博会</h1>
    </div>
    <div class="box_item">
      <div class="item" v-for="item in 4" :key="item">
        <div class="img"></div>
        <div class="right_box">
          <h1 class="item_title">官方网站亮证</h1>
          <p class="item_content">网站亮证概念:网站亮证是指持有“官方网站认证证
            书”和“官方网站认证标志的企业网上身份认证资质，将证书标志悬挂在官网的醒目位置。
            网站亮证经营是由于网络的虚拟性和开放性
          </p>
        </div>
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
  .title {
    margin-top: .45rem;
    display: flex;
    justify-content: space-between;
    .left_title {
      font-size: .32rem;
    }
    .right_title {
      font-size: .32rem;
      color: skyblue;
    }
  }

  .box_item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item{
      width: 3.3rem;
      height: 4.95rem;
      background: rgba(204,204,204,.3);
      border-radius: 4px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin-top: .5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .img{
        width: .9rem;
        height: .9rem;
        background: skyblue;
        flex-shrink: 0;
        border-radius: 50%;
      }
      .right_box{
        .item_title{
          font-size: .28rem;
          margin-top: .35rem;
          text-align: center;
        }
        .item_content{
          font-size: .24rem;
          margin-top: .3rem;
          color: #8d8d8d;
          padding: 0 .3rem;
        }
      }
    }
  }
</style>
