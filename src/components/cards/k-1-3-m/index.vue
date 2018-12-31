<template>
  <div class="all">
    <h1 class="title">看好健康产业发展前景 安利亮相首届中国进博会</h1>
    <p class="content">向世界表明了中国愿意敞开大门，
      让各国分享中国发展机遇，
      充分体现了中国对外开放的诚意、
      善意和信息
    </p>
    <div class="box_cards">
      <div class="box" v-for="item in 4" :key="item">
        <div class="img"></div>
        <p class="img_title">新浪科技讯北京时间12月</p>
        <p class="img_content">北京时间12月4日</p>
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
  .all {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .title{
      margin-top: .4rem;
      margin-bottom: .3rem;
      font-size: .32rem;
      text-align: center;
    }
    .content{
      font-size: .24rem;
      text-align: center;
      padding: 0 .6rem;
      color: #ccc;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .box_cards{
      margin-top: .4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .box{
        padding-top: .3rem;
        border-bottom:1px solid #ccc ;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        .img{
          width: 6.9rem;
          height: 2.9rem;
          background: #000;
          flex-shrink: 0;
        }
        .img_title{
          font-size: .3rem;
          margin-top: .3rem;
          line-height: 1.5;
          text-align: center;
        }
        .img_content{
          font-size: .24rem;
          text-align: center;
          padding-bottom: .35rem;
          color: #ccc;
        }
      }
    }
  }
</style>
