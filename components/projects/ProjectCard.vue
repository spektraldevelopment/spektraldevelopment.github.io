<template>
  <v-card class="blue darken-4">
    <v-img :src="card.image" class="white--text align-end" height="150px">
      <v-card-title>{{ card.title }}</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <p class="white--text ma-0">{{ card.description }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn class="white--text" text>More</v-btn>
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
  }
};
</script>