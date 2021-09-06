// import meta from './meta'
import metaJa from '../static/metaJa'

export default {
  develop: window.location.href.indexOf('localhost') !== -1,
  apiURL: process.env.API_ENDPOINT,
  pageURL: process.env.URL,
  metas: metaJa.metas
}
