<template>
  <div class="all">
    <loading v-if="isLoading"/>
    <k12m :imgList="k12m"/>
    <k11m />
    <k21m/>
    <k51m/>
    <k61m/>
  </div>
</template>

<script>
  import k12m from '@/components/cards/k-1-2-m'
  import k11m from '@/components/cards/k-1-1-m'
  import k21m from '@/components/cards/k-2-1-m'
  import k51m from '@/components/cards/k-5-1-m'
  import k61m from '@/components/cards/k-6-1-m'
  import {Toast} from 'vant'

  export default {
    name: "index",
    components: {
      k12m,
      k11m,
      k21m,
      k51m,
      k61m
    },
    data() {
      return {
        isLoading: false,
        k12m: [],
      }
    },
    methods: {
      getk12m() {
        return new Promise((resolve, reject) => {
          this.$axios.get('/info?pid=k_2').then(res => {
            if (res.data.code == 200) {
              this.k12m = res.data.data.txt.splice(0,4)
              resolve()
            }
          }).catch(err => {
            Toast('请求失败');
            reject()
          })
        })
      },
      getALLData() {
        let num = this.$store.state.loadingNum
        if (num <= 0) {
          this.isLoading = true
          this.$store.commit('LOADING_NUM_ADD',1)
        }
        return new Promise((resolve, reject) => {
          Promise.all([this.getk12m()]).then(() => {
            this.isLoading = false
            this.$store.commit('LOADING_NUM_REDUCE',1)
            resolve()
          }).catch(() => {
            this.isLoading = false
            this.$store.commit('LOADING_NUM_REDUCE',1)
            reject()
          })
        })
      },
    },
    created() {
      this.getALLData()
    },
    mounted(){}
  }
</script>

<style scoped>

</style>
