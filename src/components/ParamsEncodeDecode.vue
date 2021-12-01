<template>
  <div class="container">
    <h1>パラメーターエンコード＆デコード</h1>
    <button
      style="border: 1px solid #333;"
      @click="setParams">
      パラメーター付与
    </button>
    <span>ボタン押下でパラメータに付与＆デコード結果を表示する</span>
    <h2>デコード結果</h2>
    <p>Name：{{ paramName }}</p>
    <p>Address：{{ paramAddress }}</p>
    <p>Key：{{ paramKey }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ParamsEncodeDecode',
  data () {
    return {
      name: 'テスト',
      address: 'asg23q4ytq3hfdasa',
      key: 'w42jywm932u4ym',
      paramName: '',
      paramAddress: '',
      paramKey: ''
    }
  },
  components: {
    mapGetters
  },
  methods: {
    setParams () {
      this.$router.push({
        path: '/',
        query: {
          name: encodeURI(this.name),
          address: encodeURI(this.address),
          key: encodeURI(this.key)
        }
      }, () => {})

      this.paramName = decodeURI(this.$route.query.name)
      this.paramAddress = decodeURI(this.$route.query.address)
      this.paramKey = decodeURI(this.$route.query.key)
    }
  },
  mounted () {
    if (this.$route.query.name && this.$route.query.address && this.$route.query.key) {
      this.paramName = decodeURI(this.$route.query.name)
      this.paramAddress = decodeURI(this.$route.query.address)
      this.paramKey = decodeURI(this.$route.query.key)
    } else {
      this.paramName = ''
      this.paramAddress = ''
      this.paramKey = ''
    }
  },
  created () {
  }
}
</script>
