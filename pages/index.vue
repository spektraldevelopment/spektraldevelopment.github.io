<template>
  <v-content>
    <!--Callout-->
    <Callout :title="calloutTitle" :tagline="calloutTagline" :avatar="calloutAvatar" />
    <v-container fluid>
      <!--Tagline-->
      <v-row justify="center" align="center">
        <v-col cols="8" class="text-center">
          <fade delay="0.25">
            <h2 class="white--text pt-5">Here is some of my work</h2>
          </fade>
        </v-col>
      </v-row>
      <fade :delay="0.5">
        <SearchBar @search="onSearch" />
      </fade>
      <!--Skeleton Loaders -->
      <v-row v-show="!projectsLoaded" class="pa-4">
        <v-col cols="12" md="4">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-col>
        <v-col cols="12" md="4">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-col>
        <v-col cols="12" md="4">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
      <!--Projects Cards-->
      <fade :delay="0.75">
        <v-row class="pa-4">
          <v-col v-for="(card, index) in projects" :key="index" cols="12" md="4">
            <ProjectCard :card="card" />
          </v-col>
          <v-col cols="12" md="4">
            <div v-show="projects.length === 0">
              <p class="no-projects">No Project Found</p>
            </div>
          </v-col>
        </v-row>
      </fade>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Callout from "@/components/global/Callout";
import ProjectCard from "@/components/projects/ProjectCard";
import SearchBar from "@/components/global/SearchBar";
import Fade from "@/components/global/Fade";
export default {
  components: {
    Callout,
    ProjectCard,
    SearchBar,
    Fade
  },
  computed: {
    ...mapGetters({
      projectsLoaded: "projects/projectsLoaded",
      projects: "projects/projects",
      calloutTitle: "projects/calloutTitle",
      calloutTagline: "projects/calloutTagline",
      calloutAvatar: "projects/calloutAvatar"
    })
  },
  methods: {
    ...mapMutations({
      filterProjects: "projects/filterProjects"
    }),
    onSearch(searchTerm) {
      this.filterProjects(searchTerm);
    }
  }
};
</script>

<style lang="scss" scoped>
.callout {
  color: #fff;
}

.no-projects {
  color: #fff;
}

.background {
  background-image: url(/images/banner-dark.jpg);
  background-size: cover;
}

.avatar {
  max-width: 75%;
}

@media all and (max-width: 960px) {
  .avatar {
    max-width: 25%;
  }
}
</style>