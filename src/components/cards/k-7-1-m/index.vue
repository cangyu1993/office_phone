<template>
  <div>
    <loading v-if="isLoading"/>
    <div class="all W690">
      <van-swipe :autoplay="3000" indicator-color="skyblue">
        <van-swipe-item class="item" v-for="(item,index) in showData" :key="index">
          <img v-lazy="img_0.value" img_0.value class="img">
          <h1 class="title">{{ item.value.a0 }}</h1>
          <h1 class="title_second">{{ item.value.a1 }}</h1>
          <p class="content">
            {{ item.value.a2 }}
          </p>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'vant'

  export default {
    name: "index",
    data() {
      return {
        isLoading: false,
        img_0: {},
        img_1: {},
        showData: [],
      }
    },
    methods: {
      getData() {
        // this.isLoading = true
        this.$axios.get('/info?pid=k_10').then(res => {
          if (res.data.code == 200) {
            this.img_0 = res.data.data.txt[0]
            this.img_1 = res.data.data.txt[1]
            this.showData = res.data.data.model
            // this.isLoading = false
          }
        }).catch(err => {
          // this.isLoading = false
          Toast('请求出错')
        })
      },
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .all {
    padding-top: .6rem;
    box-sizing: border-box;
    padding-bottom: .8rem;
    .item {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #F6F6F6;
      .img {
        width: 6.9rem;
        height: 6.9rem;
        background: skyblue;
      }
      .title {
        font-size: .28rem;
        margin-top: .56rem;
        margin-bottom: .24rem;
      }
      .title_second {
        font-size: .28rem;
      }
      .content {
        height: .68rem;
        font-size: .24rem;
        color: #8d8d8d;
        margin-top: .35rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: .8rem;
        text-align: center;
      }
    }
  }
</style>
