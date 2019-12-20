<template>
  <v-content>
    <v-container pa-0 fluid>
      <fade :delay="0.25">
        <v-row justify="center" align="center">
          <v-col cols="8">
            <h1 class="white--text text-center">Give me a shout</h1>
          </v-col>
        </v-row>
      </fade>
      <fade :delay="0.5">
        <v-row justify="center" align="center">
          <v-col cols="8">
            <ContactForm />
          </v-col>
        </v-row>
      </fade>
    </v-container>
  </v-content>
</template>

<script>
import ContactForm from "@/components/contact/ContactForm";
import Fade from "@/components/global/Fade";
export default {
  components: {
    ContactForm,
    Fade
  }
};
</script>