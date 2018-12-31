<template>
  <div>
    <loading v-if="isLoading"/>
    <div class="all">
      <div class="main W690">
        <img v-lazy="bg.value" :key="bg.value" class="img_bg">
        <h1 class="title">{{title.value}}</h1>
        <p class="content">
          {{content.value}}
        </p>
        <p class="more">{{more.value}}</p>
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
        bg: {},
        title: {},
        content: {},
        more: {},
      }
    },
    methods: {
      getData() {
        let num = this.$store.state.loadingNum
        if (num <= 0) {
          this.isLoading = true
          this.$store.commit('LOADING_NUM_ADD', 1)
        }
        this.$axios.get('/info?pid=k_7').then(res => {
          if (res.data.code == 200) {
            this.bg = res.data.data.txt[0]
            this.title = res.data.data.txt[1]
            this.content = res.data.data.txt[2]
            this.more = res.data.data.txt[3]
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
    position: relative;
    height: 4.3rem;
    margin-top: .6rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .main {
      box-sizing: border-box;
      width: 5.6rem;
      height: 3.4rem;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: .3rem;
        margin-top: .5rem;
        color: #222;
        text-align: center;
      }
      .content {
        font-size: .24rem;
        color: #8d8d8d;
        padding: 0 .75rem;
        line-height: 1.5;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
      .more {
        font-size: .2rem;
        margin-top: .1rem;
        padding: .2rem .2rem;
        border-bottom: 2px solid #000;
      }
      .img_bg {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: -1;
      }
    }
  }
</style>
