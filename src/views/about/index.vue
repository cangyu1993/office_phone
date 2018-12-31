<template>
  <div class="all">
    <k31m />
    <k41m />
    <k81m />
  </div>
</template>

<script>
  import k31m from '@/components/cards/k-3-1-m'
  import k41m from '@/components/cards/k-4-1-m'
  import k81m from '@/components/cards/k-8-1-m'
  export default {
    name: "index",
    components: {
      k31m,
      k41m,
      k81m
    },

  }
</script>

<style scoped>

</style>
