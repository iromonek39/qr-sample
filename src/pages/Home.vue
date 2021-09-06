<template>
  <div class="home">
    <!-- <router-link
      to="/contents">
      コンテンツ
    </router-link>
    <router-link
      to="/login">
      ログイン
    </router-link> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Meta from '@/components/mixin/Meta'

export default {
  name: 'Home',
  mixins: [Meta],
  components: {
    mapGetters
  },
  mounted () {
  },
  created () {
    this.metaInitialized = true
  }
}
</script>
<style lang="postcss" scoped>
  @import '../assets/css/mixins.css';
  @import '../assets/css/variables.css';
</style>
