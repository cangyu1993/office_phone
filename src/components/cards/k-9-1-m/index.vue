<template>
  <div>
    <loading v-if="isLoading"/>
    <div class="all">
      <h1 class="eng">{{engTitle.value}}</h1>
      <h1 class="chi">{{chiTitle.value}}</h1>
      <img v-lazy="bgImg.value" :key="bgImg.value" class="img">
      <p class="content W690">
        {{content.value}}
      </p>
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
        engTitle: {},
        chiTitle: {},
        bgImg: {},
        content: {},
      }
    },
    methods: {
      getData() {
        let num = this.$store.state.loadingNum
        if (num <= 0) {
          this.isLoading = true
          this.$store.commit('LOADING_NUM_ADD', 1)
        }
        this.$axios.get('/info?pid=k_9').then(res => {
          if (res.data.code == 200) {
            this.engTitle = res.data.data.txt[0]
            this.chiTitle = res.data.data.txt[1]
            this.bgImg = res.data.data.txt[2]
            this.content = res.data.data.txt[3]
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
    text-align: center;
    padding-top: .96rem;
    padding-bottom: 1.35rem;
    .eng {
      font-size: .4rem;
      color: #222;
    }
    .chi {
      font-size: .34rem;
      color: #222;
      margin-top: .24rem;
    }
    .img {
      width: 7.5rem;
      height: 2.15rem;
      margin-top: .3rem;
    }
    .content {
      font-size: .24rem;
      margin-top: .35rem;
      color: #606060;
      text-align: justify;
    }
  }
</style>
