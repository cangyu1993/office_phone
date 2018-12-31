<template>
  <div>
    <loading v-if="isLoading"/>
    <div class="all W690">
      <div class="title">
        <h1 class="left_title">{{title_1.value}}</h1>
        <h1 class="right_title">{{title_2.value}}</h1>
      </div>
      <div class="content">
        {{mainContent.value}}
      </div>
      <div class="box_item">
        <div class="item" v-for="(item,index) in showData.model" :key="index">
          <img v-lazy="item.value.a1" :key="item.value.a1" :alt="item.value.a1" class="img">
          <div class="right_box">
            <h1 class="item_title">{{item.value.a0}}</h1>
            <p class="item_content">
              {{item.value.a2}}
            </p>
          </div>
        </div>
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
        showData: {},
        title_1: {},
        title_2: {},
        mainContent: {},
        isLoading: false
      }
    },
    methods: {
      getData() {
        let num = this.$store.state.loadingNum
        if (num <= 0) {
          this.isLoading = true
          this.$store.commit('LOADING_NUM_ADD', 1)
        }
        this.$axios.get('/info?pid=k_3').then(res => {
          if (res.data.code == 200) {
            this.showData = res.data.data
            this.title_1 = res.data.data.txt[0]
            this.title_2 = res.data.data.txt[1]
            this.mainContent = res.data.data.txt[2]
            this.isLoading = false
            this.$store.commit('LOADING_NUM_REDUCE', 1)
          }
        }).catch(err => {
          this.isLoading = false
          this.$store.commit('LOADING_NUM_REDUCE', 1)
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
    width: 100%;
    background: #EEF3FB;
    padding-bottom: .88rem;
    .title {
      box-sizing: border-box;
      padding-top: .45rem;
      display: flex;
      justify-content: center;
      .left_title {
        box-sizing: border-box;
        font-size: .32rem;
        padding-right: .1rem;
      }
      .right_title {
        font-size: .32rem;
        color: skyblue;
        padding-left: .1rem;
      }
    }
    .content {
      font-size: .24rem;
      color: #8d8d8d;
      padding: 0 .35rem;
      text-align: center;
    }
    .box_item {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: .1rem;
      .item {
        box-sizing: border-box;
        width: 100%;
        padding-left: .64rem;
        padding-right: .64rem;
        margin-top: .82rem;
        display: flex;
        justify-content: space-between;
        .img {
          width: 1rem;
          height: 1rem;
          background: skyblue;
          flex-shrink: 0;
          border-radius: 50%;
        }
        .right_box {
          margin-left: .46rem;
          .item_title {
            font-size: .28rem;
          }
          .item_content {
            font-size: .24rem;
            margin-top: .3rem;
            color: #8d8d8d;
          }
        }
      }
    }
  }

</style>
