<template>
  <div>
    <loading v-if="isLoading"/>
    <div class="all">
      <h1 class="title">{{title.value}}</h1>
      <p class="content">
        {{mainContent.value}}
      </p>
      <div class="box_cards">
        <div class="box" v-for="(item,index) in showData.model" :key="index">
          <img v-lazy="item.value.a0" :key="item.value.a0" class="img">
          <p class="img_title">{{item.value.a1}}</p>
          <p class="img_content">{{item.value.a2}}</p>
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
        isLoading: false,
        showData: {},
        title: {},
        mainContent: {},
      }
    },
    methods: {
      getData() {
        let num = this.$store.state.loadingNum
        if (num <= 0) {
          this.isLoading = true
          this.$store.commit('LOADING_NUM_ADD', 1)
        }
        this.$axios.get('/info?pid=k_1').then(res => {
          if (res.data.code == 200) {
            this.showData = res.data.data
            this.title = res.data.data.txt[0]
            this.mainContent = res.data.data.txt[1]
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
    padding-bottom: .86rem;
    .title {
      margin-top: .4rem;
      margin-bottom: .3rem;
      font-size: .32rem;
      text-align: center;
    }
    .content {
      font-size: .24rem;
      text-align: center;
      padding: 0 .6rem;
      color: #8d8d8d;
      font-family: "Microsoft YaHei";
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
    }
    .box_cards {
      margin-top: .4rem;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .box {
        padding-top: .3rem;
        border-bottom: 1px solid #ccc;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        .img {
          width: 3.3rem;
          height: 2.16rem;
          background: #000;
          flex-shrink: 0;
        }
        .img_title {
          font-size: .26rem;
          line-height: 1.5;
        }
        .img_content {
          font-size: .22rem;
          text-align: center;
          padding-bottom: .35rem;
          color: #8d8d8d;
        }
      }
    }
  }
</style>
