<template>
  <v-form ref="form">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <!--Title-->
          <v-text-field v-model="title" :rules="titleRules" label="Title" solo></v-text-field>
          <!--image-->
          <v-text-field v-model="image" :rules="imageRules" label="Image URL" solo></v-text-field>
          <!--Description-->
          <v-textarea v-model="description" :rules="descriptionRules" label="Description" solo></v-textarea>
          <!--Link-->
          <v-text-field v-model="link" label="Link URL" solo></v-text-field>
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      image: "",
      description: "",
      link: ""
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
    },
    imageRules() {
      const rules = [];
      const isEmpty = v => {
        return !!v || "A valid image url is required";
      };
      rules.push(isEmpty);
      return rules;
    },
    descriptionRules() {
      const rules = [];
      const isEmpty = v => {
        return !!v || "A description is required";
      };
      rules.push(isEmpty);
      return rules;
    }
  },
  methods: {
    ...mapActions({
      setProject: "projects/SET_PROJECT"
    }),
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.setProject({
          title: this.title,
          image: this.image,
          description: this.description,
          link: this.link === '' ? undefined : this.link
        }).then(() => {
          this.$router.push("/");
        });
      }
    },
    validateField() {
      this.$refs.form.validate();
    }
  }
};
</script>