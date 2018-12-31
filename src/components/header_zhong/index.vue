<template>
  <div>
    <loading v-if="isLoading"/>
    <div class="all">
      <div class="header_title">
        <van-row>
          <van-col span="10">
            <div class="icon">
              <van-icon name="wap-nav" :class="{addBg:isShow}" @click="showTab"/>
            </div>
          </van-col>
          <van-col span="14">
            <p class="title">
              {{title}}
            </p>
          </van-col>
        </van-row>
      </div>


      <transition name="slide-fade">
        <div class="columnList" v-if="isShow" @click="cancel">
          <div class="menu">
            <p v-for="(item,index) in columnList.info"
               :key="index"
               class="item_title"
               :class="{'addColor':$route.path === `/${item.id}`}"
               @click="handleClick(item)"
            >
              {{item.name}}
            </p>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
  import {Notify} from 'vant';

  export default {
    name: "index",
    data() {
      return {
        isShow: false,
        isLoading: false,
        columnList: {},
        title: '',
      }
    },
    methods: {
      //取消显示菜单项
      showTab() {
        this.isShow = !this.isShow
      },
      //获取菜单信息项
      getData() {
        // this.isLoading = true
        this.$axios.get('/columnlist').then(res => {
          if (res.data.code == 200) {
            this.columnList = res.data.data
            this.title = this.columnList.info[0].name
            // this.isLoading = false
          }
        }).catch(err => {
          // this.isLoading = false
          Notify(err)
        })
      },
      //点击菜单item跳转到指定页
      handleClick(item) {
        this.$router.push({path: `/${item.id}`})
        this.title = item.name
        this.isShow = false
      },
      //点击蒙层取消菜单
      cancel() {
        this.isShow = false
      },
      //获取头部高度存入store
      getHeight() {
        let height = document.querySelector('.header_title').offsetHeight
        this.$store.commit('HEADER_HEIGHT', height)
      }
    },
    created() {
      this.getData()
    },
    mounted() {
      this.getHeight()
    }
  }
</script>

<style scoped lang="scss">
  .all {
    font-size: .32rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
    .header_title {
      padding: .32rem 0;
      background: #fff;
      opacity: 1;
      .icon {
        padding-left: .22rem;
      }
    }

    .columnList {
      width: 100%;
      min-height: 95vh;
      .menu {
        box-sizing: border-box;
        padding-top: .1rem;
        width: 3rem;
        background: #fff;
        opacity: 1;
        .item_title {
          box-sizing: border-box;
          width: 3rem;
          text-align: center;
          padding: .2rem .2rem;
        }
      }
    }
  }

  .addBg {
    color: #005bac !important;
  }

  .slide-fade-enter-active {
    transition: all .3s linear;
  }

  .slide-fade-leave-active {
    transition: all .3s linear;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-3rem);
  }

  .addColor {
    background: #1962af !important;
    color: #fff !important;
  }
</style>
