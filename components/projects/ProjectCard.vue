<template>
  <v-card @click="onMore" height="100%" class="black">
    <v-img :src="card.image" class="white--text align-end" height="150px">
      <v-card-title class="card-title">{{ card.title }}</v-card-title>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-text class="text--primary">
      <p class="white--text ma-0">{{ card.description }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="onMore" class="white--text" text>More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    onMore() {
      this.$router.push(`/project/${this.card.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-title {
  text-shadow: 2px 2px 2px #000000;
}
</style>