<script>
import setting from '@/setting'
import { mapGetters } from 'vuex'

export default {
  name: 'Meta',
  components: {
    mapGetters
  },
  data () {
    return {
      metaParams: {},
      metaInitialized: false,
      metaExclude: [
        'Spot',
        'Topics',
        'PremiumItem',
        'PackageItem',
        'SelectItem'
      ]
    }
  },
  computed: {
    ...mapGetters(['lang'])
  },
  metaInfo () {
    // return setting.metas[this.$route.name]
    return this.metaInitialized ? this.createMeta(this.metaParams) : null
  },
  methods: {
    // 動的ページ用
    createMeta (params) {
      let canonicalUrl = location.href
      let links = [
        { rel: 'canonical', href: canonicalUrl },
        { rel: 'preload', href: require('@/assets/images/preload.png'), as: 'image' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: require('@/assets/images/apple-touch-icon.png') },
        { rel: 'icon', href: require('@/assets/images/favicon.ico') }
      ]
      // 条件はroutesでパラメータで切り替えできる仕組みでもOK
      if (this.metaExclude.indexOf(this.$route.name) === -1) {
        let metas = setting.metas[this.$route.name]
        metas['link'] = links
        return metas
      } else {
        // console.log('createMeta', params)
        // console.log('createMeta', this.lang)
        if (this.lang.params === 'jp') {
          let metas = {
            title: this.metaParams.title + ' | test',
            meta: [
              { name: 'description', content: 'test' },
              { name: 'keywords', content: 'test' },
              { property: 'og:locale', content: 'ja_JP' },
              { property: 'fb:admins', content: '' },
              { property: 'fb:app_id', content: '190250645640023' },
              { property: 'og:site_name', content: 'og site name' },
              { property: 'og:title', content: 'og title' },
              { property: 'og:url', content: process.env.URL },
              { property: 'og:image', content: process.env.URL + require('@/assets/images/img-ogp.png').replace('./', '') },
              { property: 'og:description', content: 'og description' },
              { property: 'og:type', content: 'website' },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:title', content: 'twitter title' },
              { name: 'twitter:description', content: 'twitter description' },
              { name: 'twitter:image:src', content: process.env.URL + require('@/assets/images/img-ogp.png').replace('./', '') }
            ]
          }
          metas['link'] = links
          return metas
        } else {
          let metas = {
            title: this.metaParams.title + ' | test',
            meta: [
              { name: 'description', content: '英語英語' },
              { name: 'keywords', content: '英語英語' },
              { property: 'og:locale', content: 'en_US' },
              { property: 'fb:admins', content: '' },
              { property: 'fb:app_id', content: '190250645640023' },
              { property: 'og:site_name', content: 'og site name' },
              { property: 'og:title', content: 'og title' },
              { property: 'og:url', content: process.env.URL },
              { property: 'og:image', content: process.env.URL + require('@/assets/images/img-ogp.png').replace('./', '') },
              { property: 'og:description', content: 'og description' },
              { property: 'og:type', content: 'website' },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:title', content: 'twitter title' },
              { name: 'twitter:description', content: 'twitter description' },
              { name: 'twitter:image:src', content: process.env.URL + require('@/assets/images/img-ogp.png').replace('./', '') }
            ]
          }
          metas['link'] = links
          return metas
        }
      }
    }
  },
  mounted () {
    // ここでAPI通信などの非同期処理を行う。
    // page側で実行、API実行後にmetaParamsに入れてから下記を記述
    // this.metaInitialized = true
  }
}
</script>
