<template>
  <div class="headers">
    <div class="all addpading">
      <img src="http://cshotel.cn/static/images/logo-zrht.png" class="img">
      <div class="right">
        <div class="right_top">EN | 中文</div>
        <i class="iconfont icon-toggle icon" @click="hadleClick"></i>
      </div>
    </div>
    <div class="nav_botton" :class="{'toggleClass':isShow}">
      <router-link class="link" :class="{'changeColor':$route.name === 'home' }" to="/" @click.native="hadleClick">首页
      </router-link>
      <router-link to="/" class="link" @click.native="hadleClick">服务平台</router-link>
      <router-link to="/" class="link" @click.native="hadleClick">关于我们</router-link>
      <router-link to="/" class="link" @click.native="hadleClick">联系我们</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      hadleClick() {
        this.isShow = !this.isShow
        // console.log(this.isShow )
      },
    }
  }
</script>

<style scoped lang="scss">
  .headers {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 998;
    .all {
      position: relative;
      z-index: 100;
      height: 2.1rem;
      background: #FFF;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e9e9e9;
      .img {
        width: 3rem;
        height: 1.5rem;
      }
      .right {
        color: #ccc;
        height: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        .right_top {
          font-size: .3rem;
        }
        .icon {
          font-size: .6rem;
          text-align: right;
        }
        .icon:active {
          color: skyblue;
        }
      }
    }
    .nav_botton {
      margin-top: -4rem;
      position: relative;
      z-index: 80;
      background: #fff;
      display: flex;
      flex-direction: column;
      color: #ccc;
      font-size: .35rem;
      transition: all 0.5s ease;
      .link {
        color: #333;
        padding: 10px .3rem;
      }
      .link:active {
        background: skyblue;
        color: #fff;
      }
      .changeColor {
        color: skyblue;
      }
    }
  }

  .toggleClass {
    transform: translateY(3.9rem);
  }


</style>
