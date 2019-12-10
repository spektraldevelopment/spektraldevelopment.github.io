<template>
  <v-form ref="form">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <!--Title-->
          <v-text-field
            v-model="projectTitle"
            :rules="titleRules"
            label="Title"
            @input="onTitleChange"
            solo
          ></v-text-field>
          <!--image-->
          <v-text-field
            v-model="projectImage"
            :rules="imageRules"
            label="Image URL"
            @input="onImageChange"
            solo
          ></v-text-field>
          <!--Description-->
          <v-textarea
            v-model="projectDesc"
            :rules="descriptionRules"
            label="Description"
            @input="onDescChange"
            solo
          ></v-textarea>
          <!--Link-->
          <v-text-field v-model="projectLink" label="Link URL" @input="onLinkChange" solo></v-text-field>
          <!--Create Submit-->
          <v-btn v-if="this.formType === 'create'" @click.prevent="onSubmit">
            <v-icon class="mr-1">mdi-plus</v-icon>Create
          </v-btn>
          <!--Update Button-->
          <v-btn v-if="this.formType === 'edit'" @click.prevent="onSubmit">
            <v-icon class="mr-1">mdi-arrow-up-bold-outline</v-icon>Update
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    formType: {
      type: String,
      default: "create"
    }
  },
  computed: {
    projectTitle: {
      get() {
        return this.title;
      },
      set() {}
    },
    projectImage: {
      get() {
        return this.image;
      },
      set() {}
    },
    projectDesc: {
      get() {
        return this.description;
      },
      set() {}
    },
    projectLink: {
      get() {
        return this.link;
      },
      set() {}
    },
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
    onTitleChange(title) {
      this.$emit("updateTitle", title);
    },
    onImageChange(image) {
      this.$emit("updateImage", image);
    },
    onDescChange(desc) {
      this.$emit("updateDescription", desc);
    },
    onLinkChange(link) {
      this.$emit("updateLink", link);
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.$emit("submitForm");
      }
    }
  }
};
</script>