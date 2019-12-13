<template>
  <v-form ref="form">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <!--Title-->
          <v-text-field
            v-model="projectTitle"
            :rules="titleRules"
            @input="onTitleChange"
            label="Title"
            solo
          ></v-text-field>
          <!--image-->
          <v-text-field
            v-model="projectImage"
            :rules="imageRules"
            @input="onImageChange"
            label="Image URL"
            solo
          ></v-text-field>
          <!--Description-->
          <v-textarea
            v-model="projectDesc"
            :rules="descriptionRules"
            @input="onDescChange"
            label="Description"
            solo
          ></v-textarea>
          <!--Link-->
          <v-text-field v-model="projectLink" @input="onLinkChange" label="Link URL" solo></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="space-between" align="center">
        <v-col cols="12" sm="6" md="4">
          <!--Create Submit-->
          <v-btn v-if="formType === 'create'" @click.prevent="onSubmit" width="100%">
            <v-icon class="mr-1">mdi-plus</v-icon>Create
          </v-btn>
          <!--Update Button-->
          <v-btn v-if="formType === 'edit'" @click.prevent="onSubmit" width="100%">
            <v-icon class="mr-1">mdi-arrow-up-bold-outline</v-icon>Update
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <!--Cancel Button-->
          <v-btn @click.prevent="onCancel" class="error float-sm-right" width="100%">
            <v-icon class="mr-1">mdi-cancel</v-icon>Cancel
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
    },
    onCancel() {
      this.$emit("cancel");
    }
  }
};
</script>