<template>
  <div id="app">
    <!-- <Header/> -->
    <div class="main">
      <QR/>
      <QRGenerator/>
      <!-- <keep-alive>
        <router-view/>
      </keep-alive> -->
    </div>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Reset from '@/assets/css/reset.css'
import Default from '@/assets/css/default.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QR from '@/components/QR'
import QRGenerator from '@/components/QRGenerator'

export default {
  name: 'App',
  metaInfo: {
    link: [
      { rel: 'preload', href: require('@/assets/images/preload.png'), as: 'image' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: require('@/assets/images/apple-touch-icon.png') },
      { rel: 'icon', href: require('@/assets/images/favicon.ico') }
    ]
  },
  components: {
    mapGetters,
    Reset,
    Default,
    Header,
    Footer,
    QR,
    QRGenerator
  },
  methods: {
    beforeLeave (element) {
    }
  },
  created () {
  },
  mounted () {
    if (process.env.CLIENT_ENV !== 'production') {
      const head = document.getElementsByTagName('head')[0]
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'robots')
      meta.setAttribute('content', 'noindex')
      head.appendChild(meta)
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import './assets/css/mixins.css';
  @import './assets/css/variables.css';
</style>
