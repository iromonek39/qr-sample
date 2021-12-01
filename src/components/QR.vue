<template>
  <div class="container">
    <h1>Web QRCode</h1>
    <p>リサイズ前画像
      <span id="src-width-height">幅: 高さ: </span>
    </p>
    <p>リサイズ後画像
      <span id="dst-width-height">幅: 高さ: </span>
    </p>
    <div>
      <form
        id="form1"
        enctype="multipart/form-data">
        <input
          id="file-image"
          type="file"
          accept="image/*"
          capture="camera"
          name="file"
          @change="selectReadFile">
      </form>
    </div>
    <div>
      <canvas id="mycanvas"/>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import jsQR from 'jsqr'

export default {
  name: 'QR',
  data () {
    return {
      canvas: null,
      ctx: null,
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
    selectReadFile (e) {
      let that = this

      let file = e.target.files
      let reader = new FileReader()

      let canvas = document.getElementById('mycanvas')
      // reader.readAsDataURL( file[0] );
      reader.onload = function (e) {
        that.readDrawImg(e.target, canvas, 0, 0)
      }
      reader.readAsDataURL(file[0])
    },

    readDrawImg (reader, canvas, x, y) {
      let that = this
      let img = this.readImg(reader)
      img.onload = function () {
        let w = img.width
        let h = img.height
        that.printWidthHeight('src-width-height', true, w, h)

        // resize
        let resize = that.resizeWidthHeight(1024, w, h)
        that.printWidthHeight('dst-width-height', resize.flag, resize.w, resize.h)
        that.drawImgOnCav(canvas, img, x, y, resize.w, resize.h)
      }
    },

    readImg (reader) {
      let resultDataURL = reader.result
      let img = new Image()
      img.src = resultDataURL

      return img
    },

    drawImgOnCav (canvas, img, x, y, w, h) {
      canvas.width = w
      canvas.height = h
      this.ctx.drawImage(img, x, y, w, h)

      this.checkQRCode()
    },

    resizeWidthHeight (targetLengthPx, w0, h0) {
      let length = Math.max(w0, h0)
      if (length <= targetLengthPx) {
        return ({
          flag: false,
          w: w0,
          h: h0
        })
      }

      let w1
      let h1
      if (w0 >= h0) {
        w1 = targetLengthPx
        h1 = h0 * targetLengthPx / w0
      } else {
        w1 = w0 * targetLengthPx / h0
        h1 = targetLengthPx
      }

      return ({
        flag: true,
        w: parseInt(w1),
        h: parseInt(h1)
      })
    },

    printWidthHeight (widthHeightId, flag, w, h) {
      let wh = document.getElementById(widthHeightId)
      wh.innerHTML = '幅: ' + w + ', 高さ: ' + h
    },

    checkQRCode () {
      let imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
      let code = jsQR(imageData.data, this.canvas.width, this.canvas.height)
      if (code) {
        // console.log( code );
        alert(code.data)
      } else {
        alert('No QR Code found.')
      }
    },

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
    this.canvas = document.getElementById('mycanvas')
    this.ctx = this.canvas.getContext('2d')

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
<style lang="postcss" scoped>
  @import '../assets/css/mixins.css';
  @import '../assets/css/variables.css';

  #mycanvas{
    border: 1px solid #333;
  }
</style>
