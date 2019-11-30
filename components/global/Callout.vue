<template>
  <!--Callout-->
  <v-row justify="center" align="center" no-gutters class="purple darken-2 pa-4 background">
    <v-col cols="12" md="4" lg="3" class="text-center">
      <v-avatar height="100%" width="100%" class="avatar">
        <img :src="avatar" :alt="avtrAlt" />
      </v-avatar>
    </v-col>
    <v-col cols="12" md="4" lg="3" justify-self="center" class="callout text-center">
      <h1 class="display-2">{{ title }}</h1>
      <p>{{ tagline }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Hello I\'m Dave'
        },
        tagline: {
            type: String,
            default: 'I\'m a Senior Software Engineer in Toronto'
        },
        avatar: {
            type: String,
            default: '/images/my-avatar.jpg'
        },
        avtrAlt: {
            type: String,
            default: 'A picture of Dave Boyle'
        }
    }
}
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