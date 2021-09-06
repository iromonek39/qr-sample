<template>
  <div class="contents">
    <p>コンテンツ</p>
  </div>
</template>

<script>
import Meta from '@/components/mixin/Meta'

export default {
  name: 'Regist',
  mixins: [Meta],
  mounted () {
    this.metaInitialized = true
  }
}
</script>
<style lang="postcss" scoped>
  @import '../assets/css/mixins.css';
  @import '../assets/css/variables.css';
</style>
