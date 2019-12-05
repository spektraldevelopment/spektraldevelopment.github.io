<template>
  <v-content>
    <v-container pa-0 fluid>
      <v-row justify="center" align="center">
        <v-col cols="8">
          <h1 class="white--text text-center">Create a project</h1>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="8">
          <PostForm />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import PostForm from "@/components/post/PostForm";
export default {
  components: {
    PostForm
  }
};
</script>