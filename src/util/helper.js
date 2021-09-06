import store from '../store'
import setting from '@/setting'

/*
 * 言語設定
 */
// cookieに言語登録
const setCookie = (langData) => {
  return new Promise((resolve) => {
    const domain = /:\/\/([^\\/]+)/.exec(window.location.href)[1].replace(/tour\.en\./g, '')
    // const domain = 'localhost'
    // console.log('domain', domain)
    const maxAge = 3600 * 24 * 360
    const vals = JSON.stringify(langData)
    // SSL対応
    // window.document.cookie = `key=${langData}; path=/; domain=${domain}; max-age=${maxAge}; secure; samesite=lax;`
    // 非SSL
    window.document.cookie = `test=${vals}; path=/; domain=${domain}; max-age=${maxAge}; samesite=lax;`
    resolve(true)
  })
}

export const Helper = {
  setCookie
}
