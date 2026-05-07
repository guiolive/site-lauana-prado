import puppeteer from 'puppeteer-core'

const URL = 'http://localhost:3000'
const OUT = '/Users/guilhermeoliveira/Documents/Projetos/Site Lauana/site-lauana-prado.pdf'
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const WIDTH = 1440

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
})

const page = await browser.newPage()
await page.setViewport({ width: WIDTH, height: 900, deviceScaleFactor: 2 })
await page.emulateMediaType('screen')

console.log(`→ navegando para ${URL}…`)
await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 })

console.log('→ aguardando fontes…')
await page.evaluate(() => document.fonts.ready)

// Force all reveal-on-scroll elements to be in
console.log('→ revelando elementos com .reveal…')
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'))
  // hide scroll-to-top button (it's only shown after scrolling)
  document.querySelectorAll('.scroll-anchor').forEach((el) => {
    el.style.display = 'none'
  })
  // pause animations so they freeze at frame 0 reliably
  const style = document.createElement('style')
  style.textContent = `
    *, *::before, *::after {
      animation-duration: 0.0001s !important;
      animation-iteration-count: 1 !important;
      animation-fill-mode: forwards !important;
      transition: none !important;
    }
  `
  document.head.appendChild(style)
})

// Let layout settle and lazy images load
await new Promise((r) => setTimeout(r, 1500))

// Trigger lazy images
await page.evaluate(async () => {
  const imgs = Array.from(document.querySelectorAll('img'))
  await Promise.all(
    imgs.map((img) => {
      if (img.complete) return Promise.resolve()
      return new Promise((res) => {
        img.addEventListener('load', res, { once: true })
        img.addEventListener('error', res, { once: true })
      })
    })
  )
})

const height = await page.evaluate(() => {
  const body = document.body
  const html = document.documentElement
  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
})
console.log(`→ altura total: ${height}px`)

await page.setViewport({ width: WIDTH, height, deviceScaleFactor: 2 })
await new Promise((r) => setTimeout(r, 800))

console.log(`→ gerando PDF (${WIDTH}px × ${height}px)…`)
await page.pdf({
  path: OUT,
  width: `${WIDTH}px`,
  height: `${height}px`,
  printBackground: true,
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
  preferCSSPageSize: false,
})

await browser.close()
console.log(`✓ PDF salvo em ${OUT}`)
