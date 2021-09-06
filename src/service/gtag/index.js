export default class VueGtag {
  configure (config = {}) {
    this.Router = config.router
    // this.TrackingId = config.id
    this.options = config
  }

  static install = (Vue, options) => {
    Object.defineProperty(Vue.prototype, '$gtag', {
      get () { return this.$root._gtag }
    })

    Vue.mixin({
      components: {
      },
      computed: {
      },
      data () {
        return {
        }
      },
      beforeCreate () {
        if (this.$options.gtag) {
          this._gtag = this.$options.gtag
          this._gtag.configure(options)
          this._gtag.appendGtag()
        }
      },
      created () {
        let that = this
        if (process.env.CLIENT_ENV === 'production') {
          if (this._gtag && this._gtag.Router) {
            this._gtag.initialize()
            console.log('ga router', typeof this._gtag.Router === 'function')
            if (typeof this._gtag.Router === 'function') {
              console.log('ga1')
              this._gtag.Router(url => {
                that._gtag.setPageEvent(url)
                if (that._gtag.options.debug) that._gtag.logger(url)
              })
            } else {
              console.log('ga2')
              this._gtag.Router.afterEach(to => {
                that._gtag.setPageEvent(to.fullPath)
                if (that._gtag.options.debug) that._gtag.logger(to.fullPath)
              })
            }
          }
        }
      }
    })
  }

  // appendGtag
  appendGtag () {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.TRACKING_ID}`
    var n = document.getElementsByTagName('head')[0]
    if (!n) n = document.body
    n.appendChild(s)
  }

  // initialize
  initialize () {
    const w = window
    w.dataLayer = w.dataLayer || []
    const gtag = w.gtag = w.gtag || function () {
      w.dataLayer.push(arguments)
    }
    const gtagOpt = this.options.gtagOpt || {}
    gtag('js', new Date())
    gtag('config', process.env.TRACKING_ID, gtagOpt)
  }

  // setPageEvent
  setPageEvent (fullPath) {
    console.log('ga setPageEvent')
    const w = window
    w.dataLayer = w.dataLayer || []
    const gtag = w.gtag = w.gtag || function () {
      w.dataLayer.push(arguments)
    }
    gtag('config', process.env.TRACKING_ID, {'page_path': fullPath})
  }

  // logger
  logger (url) {
    console.log('page: ', url)
  }
}
