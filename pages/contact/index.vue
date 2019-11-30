<template>
    <v-content>
    <v-container pa-0 fluid>
      <v-row justify="center" align="center">
        <v-col cols="8">
          <h1 class="white--text text-center">Give me a shout</h1>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="8">
          <ContactForm />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import ContactForm from '@/components/contact/ContactForm'
export default {
  components: {
    ContactForm
  }
}
</script>