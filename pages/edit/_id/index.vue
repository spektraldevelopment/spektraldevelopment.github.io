<template>
  <v-content>
    <v-container pa-0 fluid>
      <v-row justify="center" align="center">
        <v-col cols="8">
          <h1 class="white--text text-center">Edit project</h1>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="8">
          <ProjectForm
            formType="edit"
            @submitForm="onFormSubmit"
            :title="title"
            @updateTitle="onTitleUpdate"
            :image="image"
            @updateImage="onImageUpdate"
            :description="description"
            @updateDescription="onDescUpdate"
            :link="link"
            @updateLink="onLinkUpdate"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
  computed: {
    ...mapGetters({
      projects: "projects/projects"
    })
  },
  mounted() {
    const projectData = this.projects.filter(
      project => project.id === this.$route.params.id
    );
    this.title = projectData[0].title;
    this.image = projectData[0].image;
    this.description = projectData[0].description;
    this.link = projectData[0].link;
  },
  methods: {
    ...mapActions({
      updateProject: "projects/UPDATE_PROJECT"
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
      this.updateProject({
          id: this.$route.params.id,
          title: this.title,
          image: this.image,
          description: this.description,
          link: this.link === '' ? undefined : this.link
        }).then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>