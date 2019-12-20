<template>
  <!--Callout-->
  <v-row justify="center" align="center" no-gutters class="purple darken-2 pa-4 background">
    <v-col cols="12" md="4" lg="3" class="text-center">
      <v-avatar height="100%" width="100%" class="avatar">
        <v-img :src="avatar" :alt="avtrAlt">
        </v-img>
      </v-avatar>
    </v-col>
    <v-col cols="12" md="4" lg="3" justify-self="center" class="callout text-center">
      <transition name="fade" mode="in-out">
        <div v-if="show">
          <h1 class="display-2">{{ title }}</h1>
          <p>{{ tagline }}</p>
        </div>
      </transition>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },
    tagline: {
      type: String,
      default: "Tagline"
    },
    avatar: {
      type: String,
      default: "https://picsum.photos/id/237/300"
    },
    avtrAlt: {
      type: String,
      default: "A picture of something"
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
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
  min-height: 350px;
}

.avatar {
  max-width: 50%;
}

@media all and (min-width: 600px) {
  .avatar {
    max-width: 35%;
  }
}

@media all and (min-width: 960px) {
  .avatar {
    max-width: 75%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>