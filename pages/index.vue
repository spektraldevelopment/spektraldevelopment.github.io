<template>
  <v-content>
    <v-container pa-0 fluid>
      <v-row justify="center" align="center" no-gutters class="purple darken-2 pa-4">
        <v-col cols="12" md="4" class="text-center">
          <v-avatar size="250">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-col>
        <v-col cols="12" md="4" justify-self="center" class="text-center">
          <h1>Hello, I'm Dave</h1>
          <p>I'm a Senior Software Engineer in Toronto</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">Projects</v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<style scoped>
h1,
p {
  color: #fff;
}
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>