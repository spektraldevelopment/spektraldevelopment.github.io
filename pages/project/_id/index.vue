<template>
  <v-content>
    <v-container pa-0 fluid>
      <Banner :title="title" :image="image" />
      <v-row justify="center" align="center">
        <v-col cols="10" sm="8"></v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="10" sm="8">
          <p class="white--text">{{ description }}</p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="10" sm="8">
          <v-btn v-if="link" @click="onLinkClick" solo>
            <v-icon class="mr-1">mdi-application</v-icon>Visit
          </v-btn>
        </v-col>
        <v-col cols="10" sm="8">
          <v-btn @click="onEditClick" solo class="success">
            <v-icon class="mr-1">mdi-pencil</v-icon>Edit
          </v-btn>
          <v-btn @click="onDeleteClick" solo class="error">
            <v-icon class="mr-1">mdi-delete-forever</v-icon>Delete
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Banner from "@/components/global/Banner";
export default {
  components: {
    Banner
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
      deleteProject: "projects/DELETE_PROJECT"
    }),
    onLinkClick() {
      window.open(this.link, "_blank");
    },
    onEditClick() {
      this.$router.push(`/edit/${this.$route.params.id}`);
    },
    onDeleteClick() {
      this.deleteProject(this.$route.params.id).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>