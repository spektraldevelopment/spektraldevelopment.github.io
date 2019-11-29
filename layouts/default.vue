<template>
  <v-app>
    <Header />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script>

import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #000;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
