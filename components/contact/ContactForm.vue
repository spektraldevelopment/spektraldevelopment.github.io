<template>
  <v-form ref="form">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <!--Name-->
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            solo
            prepend-inner-icon="mdi-account"
          ></v-text-field>
          <!--Email-->
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            solo
            prepend-inner-icon="mdi-at"
          ></v-text-field>
          <!--Subject-->
          <v-text-field
            v-model="subject"
            :rules="subjectRules"
            label="Subject"
            solo
            prepend-inner-icon="mdi-pencil"
          ></v-text-field>
          <!--Message-->
          <v-textarea
            v-model="message"
            :rules="messageRules"
            counter="150"
            label="Message"
            solo
            prepend-inner-icon="mdi-pencil"
          ></v-textarea>
          <!--Submit-->
          <v-btn @click.prevent="onSubmit">
            <v-icon class="mr-1">mdi-email</v-icon>Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  },
  computed: {
    nameRules() {
      const rules = [];
      const isEmpty = v => {
        return !!v || "This input is required";
      };
      rules.push(isEmpty);
      return rules;
    },
    emailRules() {
      const rules = [];
      const isValid = v =>
        /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid";
      rules.push(isValid);
      return rules;
    },
    subjectRules() {
      const rules = [];
      const isEmpty = v => {
        return !!v || "This input is required";
      };
      rules.push(isEmpty);
      return rules;
    },
    messageRules() {
      const rules = [];
      const isEmpty = v => {
        return !!v || "This input is required";
      };
      rules.push(isEmpty);
      return rules;
    }
  },
  watch: {
    nameMin: "validateField"
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        console.log("Name: ", this.name);
        console.log("Email: ", this.email);
        console.log("Message: ", this.message);
      }
    },
    validateField() {
      this.$refs.form.validate();
    }
  }
};
</script>