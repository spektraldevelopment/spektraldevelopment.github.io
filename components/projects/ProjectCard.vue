<template>
  <v-card height="100%" class="black" @click="onMore">
    <v-img :src="card.image" class="white--text align-end" height="150px">
      <v-card-title>{{ card.title }}</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <p class="white--text ma-0">{{ card.description }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn class="white--text" @click="onMore" text>More</v-btn>
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
      this.$router.push(`/project/${this.card.id}`)
    }
  }
};
</script>