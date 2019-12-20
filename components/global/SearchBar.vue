<template>
  <v-form>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8" md="4">
        <v-text-field v-model="searchTerm" @input="onSearch" :hide-details="hideDetails" label="Search for a project" solo></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      hideDetails: true
    };
  },
  methods: {
    onSearch(search) {
      this.$emit('search', this.searchTerm)
    }
  }
};
</script>