<template>
  <v-content>
    <v-container pa-0 fluid>
      <Banner :title="title" :image="image" />
      <v-row justify="center" align="center">
        <v-col cols="10" md="8"></v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col class="py-5" cols="10" md="8">
          <p
            class="white--text"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia fugit facere ab mollitia vitae quibusdam aliquid, assumenda, molestias harum quas perspiciatis iusto quidem quo aspernatur ipsam est veniam? Laudantium, deleniti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis beatae cumque eos rem earum vero placeat repudiandae accusamus dolorem, hic esse consequatur, adipisci laudantium iste harum atque tempora! Odio?</p>
            <v-btn v-if="link" @click="onLinkClick" solo><v-icon class="mr-1">mdi-application</v-icon>Visit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import Banner from "@/components/global/Banner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      title: '',
      image: '',
      description: '',
      link: ''
    }
  },
  computed: {
    ...mapGetters({
      projects: "projects/projects"
    })
  },
  mounted() {
      const projectData = this.projects.filter(project => project.id === this.$route.params.id);
      this.title = projectData[0].title;
      this.image = projectData[0].image;
      this.description = projectData[0].description;
      this.link = projectData[0].link;

      console.log(this.link);
  },
  methods: {
    onLinkClick() {
      window.open(this.link, "_blank");
    }
  }
};
</script>