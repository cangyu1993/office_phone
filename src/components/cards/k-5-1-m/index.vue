<template>
  <div>
    <loading v-if="isLoading"/>
    <div class="all W690">
      <div class="box" v-for="(item,index) in showData.model" :key="index">
        <img v-lazy="item.value.a0" :key="item.value.a0" alt="item.value.a0" class="img_box">
        <h2 class="title">{{item.value.a1}}</h2>
        <p class="content">
          {{item.value.a2}}
        </p>
        <van-button round size="large" type="primary">
          进入
        </van-button>
      </div>
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
        showData: {},
      }
    },
    methods: {
      getData() {
        let num = this.$store.state.loadingNum
        if (num <= 0) {
          this.isLoading = true
          this.$store.commit('LOADING_NUM_ADD', 1)
        }
        this.$axios.get('/info?pid=k_4').then(res => {
          if (res.data.code == 200) {
            this.showData = res.data.data
            this.isLoading = false
            this.$store.commit('LOADING_NUM_REDUCE', 1)
          }
        }).catch(err => {
          this.isLoading = false
          this.$store.commit('LOADING_NUM_REDUCE', 1)
          Toast('更新失败');
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
    box-sizing: border-box;
    padding-bottom: 1rem;
    .box {
      margin-top: .9rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .img_box {
        width: 1.23rem;
        height: 1.23rem;
        background: #000;
        border-radius: 50%;
      }
      .title {
        font-size: .34rem;
        color: #222;
        margin-top: .4rem;
      }
      .content {
        font-size: .24rem;
        color: #8d8d8d;
        margin-top: .2rem;
        padding: 0 .8rem;
        text-align: center;
      }
      .van-button--large {
        width: 90%;
        height: .8rem;
        line-height: .4rem;
        margin-top: .45rem;
      }
    }
  }
</style>
