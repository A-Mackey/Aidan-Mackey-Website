<template>
  <v-container class="global">

      <v-card flat :class=" left ? 'align-left' : 'align-right'">
        <h2 class="jobTitle">{{title}}</h2>
        <h3 class="jobSubTitle">{{subTitle}}</h3>
        <p class="jobText">{{text}}</p>
      </v-card>

    
  </v-container>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default {
  name: "Job",

  props: {
    title: String,
    subTitle: String,
    text: String,
    image: String,
    left: Boolean,
  },

  data: () => ({}),
};
</script>

<style scoped>

    .global {
        font-family: 'Roboto'; 
    }

    .jobTitle {
        font-weight: 500;
        font-size: 1.7em;
        letter-spacing: 1.7px;
        line-height: 32px;
    }

    .jobSubTitle {
        font-weight: 400;
        font-size: 1.25em;
        letter-spacing: 1.7px;
        line-height: 32px;
    }

    .jobText {
        font-weight: 300;
        font-size: 0.9em;
        line-height: 2em;
    }

    .align-left {
        text-align: left;
    }

    .align-right {
        text-align: right;
    }
</style>
