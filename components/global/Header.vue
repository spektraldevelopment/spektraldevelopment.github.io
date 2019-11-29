<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped color="blue darken-4">
      <v-list dense>
        <!--Iterate over links-->
        <v-list-item link v-for="link in links" :key="link.title">
          <v-list-item-action>
            <v-icon color="white">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="blue darken-4">
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="logo white--text">Spektral Development</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { icon: 'mdi-view-dashboard', title: 'Projects' },
      { icon: 'mdi-account-circle', title: 'About' },
      { icon: 'mdi-email', title: 'Contact' }
    ]
  })
}
</script>

<style scoped>
  .logo {
    font-family: 'Raleway', sans-serif;
  }
</style>
