import { Router } from '@layer0/core'

export default new Router()
  .get('/_nuxt/:path*', ({ cache, serveStatic }) => {
    cache({
      browser: {
        maxAgeSeconds: 60 * 60 * 24 * 365 * 10,
      },
      edge: {
        maxAgeSeconds: 60 * 60 * 24 * 365 * 10,
      },
    })
    serveStatic('.output/public/_nuxt/:path*')
  })
  .fallback(({ renderWithApp }) => {
    renderWithApp()
  })
