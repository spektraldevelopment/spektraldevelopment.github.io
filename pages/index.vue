<template>
  <v-content>
    <v-container pa-0 fluid>
      <!--Callout-->
      <Callout />
      <!--Tagline-->
      <v-row justify="center" align="center">
        <v-col cols="8" class="text-center">
          <h2 class="white--text pt-5">Here are some of my projects</h2>
        </v-col>
      </v-row>
      <!--Projects-->
      <v-row class="pa-4">
        <v-col v-for="(card, index) in cards" :key="index" cols="12" md="4">
          <v-card class="blue darken-4">
            <v-img :src="card.image" class="white--text align-end" height="150px">
              <v-card-title>{{ card.title }}</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <p class="white--text ma-0">{{ card.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn class="white--text" text>More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Callout from '@/components/global/Callout'
export default {
  components: {
    Callout
  },
  data() {
    return {
      cards: [
        {
          image: "https://picsum.photos/id/237/1280/720",
          title: "Project 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
        },
        {
          image: "https://picsum.photos/id/1025/1280/720",
          title: "Project 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
        },
        {
          image: "https://picsum.photos/id/1018/3914/2935",
          title: "Project 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
        },
        {
          image: "https://picsum.photos/id/1026/1280/720",
          title: "Project 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
        },
        {
          image: "https://picsum.photos/id/1032/1280/720",
          title: "Project 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
        },
        {
          image: "https://picsum.photos/id/1040/1280/720",
          title: "Project 6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
        },
        {
          image: "https://picsum.photos/id/1042/1280/720",
          title: "Project 7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
        },
        {
          image: "https://picsum.photos/id/1051/1280/720",
          title: "Project 8",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
        },
        {
          image: "https://picsum.photos/id/1024/1280/720",
          title: "Project 9",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
        }
      ]
    };
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