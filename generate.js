const Chromy = require("chromy")
const xml2js = require("xml2js")
const fs = require("fs")

async function scrap(chromy, pushArray, to) {
  await chromy.blockUrls(["*.ttf", "*.gif", "*.png", "*.jpg", "*.jpeg", "*.webp"])
  // await chromy.click(["div"])
  // await chromy.event(["click"])
  await chromy.goto(to, {waitLoadEvent: true})
  // await chromy.wait("body.is-content-loaded")
  await chromy.wait(10000)
  // await chromy.waitLoadEvent()
  await chromy.click("div")
  const anchors = await chromy.evaluate(()=> {
    const result = []
    for(const item of document.body.getElementsByTagName("a")) {
      if(item.target != "_blank") {
        result.push(item.href)
      }
    }
    return result
  })

  for(let item of anchors) {
    if(pushArray.indexOf(item) == -1 && item.indexOf("http://") > -1) {
      pushArray.push(item)
    }
  }

  await chromy.close()
}

function xmlBuild(object) {
  const array = []
  for(const item of object) {
    console.log(item)
    array.push({ url: { loc: item } })
  }
  const root = {
    urlset: {
      $: {
        xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance"
      }
    }
  }
  const builder = new xml2js.Builder()
  builder.build(root)
  // builder.buildObject({
  //   $: {
  //     xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
  //     "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance"
  //   }
  // })
  const xml = builder.buildObject(array)
  fs.writeFile("sitemap.xml", xml, "utf8")
}

async function scrapingStart() {
  const chromy = new Chromy({
    launchBrowser: false
  })
  const urls = ['http://localhost:8080']
  let count = 0

  do {
    await scrap(chromy, urls, urls[count])
    count++
  } while (count < urls.length - 1)

  await xmlBuild(urls)
}

scrapingStart()
