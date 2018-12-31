<template>
    <div class="all">
      <headers />
      <div class="boxEmpty"></div>
      <div class="content">
      <swper/>
      <floor03 />
      <floor04 />
      <floor05 />
      <footers />
      </div>
    </div>
</template>

<script>
  import headers from '@/components/headers'
  import swper from '@/components/swper'
  import floor03 from '@/components/floor03'
  import floor04 from '@/components/floor04'
  import floor05 from '@/components/floor05'
  import footers from '@/components/footers'
    export default {
        name: "index",
        components:{
          headers,
          swper,
          floor03,
          floor04,
          floor05,
          footers
        }
    }
</script>

<style scoped lang="scss">
.boxEmpty{
  height: 2rem;
  background: skyblue;
}

</style>
