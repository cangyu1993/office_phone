<template>
    <div class="all">
      <van-swipe :autoplay="3000" indicator-color="skyblue">
        <van-swipe-item>
          <img src="http://img1.imgtn.bdimg.com/it/u=865111090,4158915163&fm=26&gp=0.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://img1.imgtn.bdimg.com/it/u=865111090,4158915163&fm=26&gp=0.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://img1.imgtn.bdimg.com/it/u=865111090,4158915163&fm=26&gp=0.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
.all{
  img{
    vertical-align: middle;
    width: 100%;
    height: 3.5rem;
  }
}
</style>
