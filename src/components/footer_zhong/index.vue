<template>
  <div class="all">
    <loading v-if="isLoading"/>
    <div class="footer_0">
      <p class="title">{{form.title}}</p>
      <p class="item">电话：{{form.phone}}</p>
      <p class="item">商务合作：{{form.business}}</p>
      <p class="item">邮箱：{{form.email}}</p>
      <p class="item">渠道合作：{{form.channel}}</p>
      <p class="item"><i class="iconfont icon-weibo"></i> 官方微博 ></p>
      <img :src="form.wechatCode" class="img">
      <p class="item">微信扫码关注</p>
      <p class="item">{{form.wechatTitle}}</p>
    </div>
    <div class="record">
      <p class="record_0">{{netMsg.record}}</p>
      <p class="record_0 record_1">{{netMsg.copyright}}</p>
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
        form: {},
        netMsg: {}
      }
    },
    methods: {
      //获取footer信息
      getMsg() {
        // this.isLoading = true
        this.$axios.get('/footerinfo').then(res => {
          if (res.data.code == 200) {
            this.form = res.data.data
            // this.isLoading = false
          }
        }).catch(err => {
          // this.isLoading = false
          Toast('更新失败');
        })
      },
      //获取授权等信息
      getData() {
        // this.isLoading = true
        this.$axios.get('/webinfo').then(res => {
          if (res.data.code == 200) {
            this.netMsg = res.data.data
            // this.isLoading = false
          } else {
            Toast('请求出错')
            // this.isLoading = false
          }
        }).catch(err => {
          // this.isLoading = false
          Toast('更新失败');
        })
      }
    },
    created() {
      this.getMsg()
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .all {
    .footer_0 {
      box-sizing: border-box;
      background: #30343D;
      text-align: center;
      color: #A1A2A5;
      font-size: .24rem;
      .title {
        box-sizing: border-box;
        font-size: .32rem;
        padding: .3rem 0;
      }
      .item{
        box-sizing: border-box;
        padding: .1rem 0;
      }
      .img{
        width: auto;
        height: auto;
        max-width: 1.5rem;
        max-height: 1.5rem;
      }
    }
    .record{
      box-sizing: border-box;
      background: #30343D;
      color: #A1A2A5;
      font-size: .24rem;
      display: flex;
      .record_0{
        box-sizing: border-box;
        width: 3.75rem;
        padding: .3rem .1rem;
        text-align: right;
      }
      .record_1{
        text-align: left;
      }
    }
  }
</style>
