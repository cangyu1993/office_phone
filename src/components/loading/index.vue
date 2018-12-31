<template>
  <div class="all">
    <img src="../../assets/loading.svg" class="loading">
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="scss">
  .all{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 998;
    .loading{
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
    }
  }


</style>
