<template>
  <div class="all">
    <div class="box_cards">
      <van-swipe :autoplay="2000" indicator-color="skyblue">
        <van-swipe-item v-for="(item,index) in imgList" :key="index" class="swiperItem">
          <img v-lazy="item.value" :key="item.value" class="img" >
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    props:['imgList'],
  }
</script>

<style scoped lang="scss">
  .all {
    box-sizing: border-box;
    .box_cards {
      box-sizing: border-box;
      padding-bottom: .6rem;
      .swiperItem {
        width: 100%;
        .img {
          width: auto;
          height: auto;
          min-width: 100%;
          max-height: 2.08rem;
        }
      }
    }
  }
</style>
