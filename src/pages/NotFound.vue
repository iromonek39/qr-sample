<template>
  <div class="notfound">
    <h3>notFound</h3>
  </div>
</template>

<script>
import Meta from '@/components/mixin/Meta'

export default {
  name: 'NotFound',
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
