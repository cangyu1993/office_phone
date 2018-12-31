<template>
  <div>
    <loading v-if="isLoading"/>
    <div class="all W690">
      <div class="item" v-for="(item,index) in showData.model" :key="index">
        <h1 class="title">{{item.value.a0}}</h1>
        <p class="content">
          {{item.value.a1}}
        </p>
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
        this.$axios.get('/info?pid=k_5').then(res => {
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
    padding-bottom: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      box-sizing: border-box;
      width: 3.4rem;
      height: 4.5rem;
      margin-top: .35rem;
      background: #387EC8;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: .32rem;
        color: #fff;
        margin-top: .48rem;
      }
      .content {
        font-size: .25rem;
        color: #fff;
        margin-top: .25rem;
        padding: 0 .1rem;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
      }
    }
  }
</style>
