<template>
  <div class="all W690">
    <loading v-if="isLoading"/>
    <h1 class="title">{{title.value}}</h1>
    <p class="content">
      {{content.value}}
    </p>
    <div class="box" v-for="(item,index) in showData.model" :key="index">
      <img v-lazy="item.value.a0" :key="item.value.a0" class="img">
      <div class="img_title">{{item.value.a1}}</div>
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
        content: {},
      }
    },
    methods:{
      getData() {
        let num = this.$store.state.loadingNum
        if (num <= 0) {
          this.isLoading = true
          this.$store.commit('LOADING_NUM_ADD',1)
        }
        this.$axios.get('/info?pid=k_6').then(res => {
          if (res.data.code == 200) {
            this.showData = res.data.data
            this.title = res.data.data.txt[0]
            this.content = res.data.data.txt[1]
            this.isLoading = false
            this.$store.commit('LOADING_NUM_REDUCE',1)
          }
        }).catch(err => {
          this.isLoading = false
          this.$store.commit('LOADING_NUM_REDUCE',1)
          Toast('请求出错')
        })
      },
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .all {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-bottom: .87rem;
    .title {
      font-size: .32rem;
      text-align: center;
      margin-top: .6rem;
      margin-bottom: .33rem;
    }
    .content {
      font-size: .24rem;
      text-align: center;
      color: #8d8d8d;
      margin-bottom: .5rem;
      padding: 0 .1rem;
    }
    .box {
      position: relative;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin-left: .3rem;
      .img {
        width: 6.5rem;
        height: 6.3rem;
        background: #ccc;
        vertical-align: middle;
      }
      .img_title {
        box-sizing: border-box;
        font-size: .24rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        line-height: 2;
        width: 6.5rem;
        padding-left: .1rem;
        background: rgba(154, 47, 54, .7);
        text-align: center;
      }
    }
  }
</style>
