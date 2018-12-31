<template>
  <div>
    <k91m />
    <k71m />
    <k101m />
  </div>
</template>

<script>
  import k91m from '@/components/cards/k-9-1-m'
  import k71m from '@/components/cards/k-7-1-m'
  import k101m from '@/components/cards/k-10-1-m'

  export default {
    name: "index",
    components: {
      k91m,
      k71m,
      k101m
    }
  }
</script>

<style scoped>

</style>
