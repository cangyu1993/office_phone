<template>
  <div class="all">
    <headers_0/>
    <div class="views">
      <div class="empty"></div>
      <router-view/>
    </div>
    <footer_0 />
  </div>
</template>

<script>
  import headers_0 from '@/components/header_zhong'
  import footer_0 from '@/components/footer_zhong'

  export default {
    components: {
      headers_0,
      footer_0
    },
    name: "index",
    data() {
      return {}
    },
    methods: {},
    mounted() {}
  }
</script>

<style scoped lang="scss">
  .all {
    .views {
      .empty {
        height: 1rem;
      }
    }
  }
</style>
