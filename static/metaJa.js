export default Object.freeze({
  metas: {
    // index
    'Home': {
      title: 'meta title',
      meta: [
        { name: 'description', content: 'Homeだよ' },
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { property: 'og:locale', content: 'ja_JP' },
        { property: 'fb:admins', content: '' },
        { property: 'fb:app_id', content: 'fb_id' },
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
    },
    'Contents': {
      title: 'meta title',
      meta: [
        { name: 'description', content: 'Contentsだよ' },
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { property: 'og:locale', content: 'ja_JP' },
        { property: 'fb:admins', content: '' },
        { property: 'fb:app_id', content: 'fb_id' },
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
    },
    'Login': {
      title: 'meta title',
      meta: [
        { name: 'description', content: 'Loginだよ' },
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { property: 'og:locale', content: 'ja_JP' },
        { property: 'fb:admins', content: '' },
        { property: 'fb:app_id', content: 'fb_id' },
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
  }
})
