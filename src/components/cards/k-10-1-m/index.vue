<template>
  <div>
    <loading v-if="isLoading"/>
    <div class="all W690">
      <h1 class="title">{{title.value}}</h1>
      <div class="box" v-for="(item,index) in showData" :key="index">
        <img v-lazy="item.value.a0" :key="item.value.a0" class="img">
        <div class="box_font">
          <h2 class="box_title">{{item.value.a1}}</h2>
          <p class="more">{{item.value.a2}}</p>
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
        title: {},
        showData: [],
      }
    },
    methods: {
      getData() {
        let num = this.$store.state.loadingNum
        if (num <= 0) {
          this.isLoading = true
          this.$store.commit('LOADING_NUM_ADD', 1)
        }
        this.$axios.get('/info?pid=k_11').then(res => {
          if (res.data.code == 200) {
            this.title = res.data.data.txt[0]
            this.showData = res.data.data.model
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
    padding-top: .6rem;
    padding-bottom: .6rem;
    box-sizing: border-box;
    .title {
      font-size: .36rem;
      color: #222;
      text-align: center;
    }
    .box {
      height: 4.3rem;
      border: 1px solid #CCC;
      border-top: none;
      border-radius: 4px;
      box-sizing: border-box;
      margin-top: .56rem;
      overflow: hidden;
      box-shadow: .1rem .1rem .12rem #ccc;
      .img {
        width: 6.9rem;
        height: 3.14rem;
        vertical-align: middle;
      }
      .box_font {
        margin-top: .4rem;
        padding: 0 .32rem;
        display: flex;
        justify-content: space-between;
        .box_title {
          font-size: .26rem;
          color: #232323;
        }
        .more {
          font-size: .22em;
          color: #555;
        }
      }
    }
  }
</style>
