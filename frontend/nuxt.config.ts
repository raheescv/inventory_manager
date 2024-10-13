// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    // cssSourceMap: false, // Disable CSS source maps
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    // "usebootstrap",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  css: [
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/nifty.min.css",
    "@/assets/css/demo-purpose/demo-icons.min.css",
    "@/assets/css/demo-purpose/demo-settings.min.css",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        "data-bs-theme": "light",
        "data-scheme": "navy",
      },
      title: "My Erp Nuxt App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "My Erp Nuxt App" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "./apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "./favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "./favicon-16x16.png",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Ubuntu:wght@400;500;700&display=swap",
        },
      ],
      script: [
        {
          src: "/assets/vendors/popperjs/popper.min.js",
          type: "text/javascript",
        },
        {
          src: "/assets/vendors/bootstrap/bootstrap.min.js",
          type: "text/javascript",
        },
        { src: "/assets/js/nifty.js", type: "text/javascript" },
        { src: "/assets/js/demo-purpose-only.js", type: "text/javascript" },
        {
          src: "/assets/vendors/chart.js/chart.umd.min.js",
          type: "text/javascript",
        },
        // { src: "/assets/pages/dashboard-1.js", type: "text/javascript" },
      ],
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
});
