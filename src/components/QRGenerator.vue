<template>
  <div class="container">
    <h1>QRGenerator</h1>
    <canvas
      id="mycanvasqr"
      width="240"
      height="240"/>
    <input
      id="data"
      v-model="qrtext">
    <button @click="qrRender">QR生成</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import QRCode from 'qrcode'

export default {
  name: 'QRGenerator',
  data () {
    return {
      qrtext: ''
    }
  },
  components: {
    mapGetters
  },
  methods: {
    qrRender () {
      const canvas = document.getElementById('mycanvasqr')
      if (this.qrtext) {
        QRCode.toCanvas(canvas, this.qrtext, {}, function (err, canvas) {
          if (err) throw err
          console.log(canvas)
        })
      } else {
        alert('文字を入力してね')
      }
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>
<style lang="postcss" scoped>
  @import '../assets/css/mixins.css';
  @import '../assets/css/variables.css';

  #mycanvasqr{
    border: 1px solid #333;
  }

  button {
    border: 1px solid #000;
  }
</style>
