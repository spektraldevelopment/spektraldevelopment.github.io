<template>
  <v-row justify="center" align="center">
    <v-col class="pa-0" cols="12">
      <v-img :src="image" max-height="350" class="align-end">
        <h1 class="white--text ml-4">{{ title }}</h1>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-shadow: 2px 2px 2px #000000;
}
</style>