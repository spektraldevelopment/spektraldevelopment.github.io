<template>
  <v-content>
    <!--Callout-->
    <Callout :title="calloutTitle" :tagline="calloutTagline" :avatar="calloutAvatar" />
    <v-container fluid>
      <!--Tagline-->
      <v-row justify="center" align="center">
        <v-col cols="8" class="text-center">
          <h2 class="white--text pt-5">Here is some of my work</h2>
        </v-col>
      </v-row>
      <!--Projects Cards-->
      <v-row class="pa-4">
        <v-col v-show="!projectsLoaded" cols="12" md="4">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-col>
        <v-col v-for="(card, index) in cards" :key="index" cols="12" md="4">
          <ProjectCard :card="card" />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import Callout from "@/components/global/Callout";
import ProjectCard from "@/components/projects/ProjectCard";
export default {
  components: {
    Callout,
    ProjectCard
  },
  computed: {
    ...mapGetters({
      projectsLoaded: "projects/projectsLoaded",
      cards: "projects/projects",
      calloutTitle: "projects/calloutTitle",
      calloutTagline: "projects/calloutTagline",
      calloutAvatar: "projects/calloutAvatar"
    })
  }
};
</script>

<style lang="scss" scoped>
.callout {
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