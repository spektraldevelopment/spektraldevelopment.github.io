<template>
  <v-form ref="form">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <!--Title-->
          <v-text-field v-model="title" :rules="titleRules" label="Title" solo></v-text-field>

          <!--Submit-->
          <v-btn @click.prevent="onSubmit">
            <v-icon class="mr-1">mdi-plus</v-icon>Create Project
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      image: "",
      description: ""
    };
  },
  computed: {
    titleRules() {
      const rules = [];
      const isEmpty = v => {
        return !!v || "A title is required";
      };
      rules.push(isEmpty);
      return rules;
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        console.log("Title: ", this.title);
      }
    },
    validateField() {
      this.$refs.form.validate();
    }
  }
};
</script>