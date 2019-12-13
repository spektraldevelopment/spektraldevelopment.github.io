<template>
  <v-content>
    <v-container pa-0 fluid>
      <v-row justify="center" align="center">
        <v-col cols="8">
          <h1 class="white--text text-center mt-4">Create a project</h1>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8">
          <ProjectForm
            @submitForm="onFormSubmit"
            :title="title"
            @updateTitle="onTitleUpdate"
            :image="image"
            @updateImage="onImageUpdate"
            :description="description"
            @updateDescription="onDescUpdate"
            :link="link"
            @updateLink="onLinkUpdate"
            @cancel="onFormCancel"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions } from "vuex";
import ProjectForm from "@/components/global/ProjectForm";
export default {
  components: {
    ProjectForm
  },
  data() {
    return {
      title: "",
      image: "",
      description: "",
      link: ""
    };
  },
  methods: {
    ...mapActions({
      setProject: "projects/SET_PROJECT"
    }),
    onTitleUpdate(title) {
      this.title = title;
    },
    onImageUpdate(image) {
      this.image = image;
    },
    onDescUpdate(desc) {
      this.description = desc;
    },
    onLinkUpdate(link) {
      this.link = link;
    },
    onFormSubmit() {
      this.setProject({
        title: this.title,
        image: this.image,
        description: this.description,
        link: this.link === "" ? undefined : this.link
      }).then(() => {
        this.$router.push("/");
      });
    },
    onFormCancel() {
      this.$router.push("/");
    }
  }
};
</script>