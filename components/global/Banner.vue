<template>
  <v-row justify="center" align="center">
    <v-col class="pa-0" cols="12">
      <v-img :src="image" max-height="350" class="align-end">
        <div class="title-bg">
          <h1 class="white--text ma-4 pl-4">{{ title }}</h1>
        </div>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
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
};
</script>

<style lang="scss" scoped>
h1 {
  text-shadow: 2px 2px 2px #000000;
}

.title-bg {
  background-color: rgba(0,0,0, 0.25);
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>