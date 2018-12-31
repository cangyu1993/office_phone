<template>
  <div>
    <loading v-if="isLoading"/>
    <div class="all W690">
      <div class="frist_box">
        <h1 class="title">{{titleLeft.value}}</h1>
        <h1 class="more">{{titleRight.value}}>></h1>
      </div>
      <div class="box">
        <div class="box_item" v-for="(item,index) in showData" :key="index">
          <img v-lazy="item.value.a0" :key="item.value.a0" class="img">
          <div class="box_title">
            <p class="write_title">{{item.value.a1}}</p>
            <p class="write_m">{{item.value.a2}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        titleLeft: {},
        titleRight: {},
        showData: [],
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
        this.$axios.get('/info?pid=k_8').then(res => {
          if (res.data.code == 200) {
            this.titleLeft = res.data.data.txt[0]
            this.titleRight = res.data.data.txt[1]
            this.showData = res.data.data.model
            this.isLoading = false
            this.$store.commit('LOADING_NUM_REDUCE', 1)
          }
        }).catch(err => {
          this.isLoading = false
          this.$store.commit('LOADING_NUM_REDUCE', 1)
          console.log(err)
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
    padding-top: .64rem;
    padding-bottom: 1rem;
    .frist_box {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: .28rem;
      }
      .more {
        font-size: .24rem;
        color: #555;
      }
    }
    .box {
      box-sizing: border-box;
      margin-top: .3rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .box_item {
        box-sizing: border-box;
        position: relative;
        margin-top: .2rem;
        .img {
          flex-shrink: 0;
          width: 3.28rem;
          height: 3.28rem;
          background: skyblue;
          opacity: .3;
        }
        .box_title {
          min-width: 2.7rem;
          min-height: .75rem;
          background: rgba(204, 204, 204, .6);
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .write_title {
            font-size: .24rem;
          }
          .write_m {
            font-size: .22rem;
          }
        }
      }
    }
  }
</style>
