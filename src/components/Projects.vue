<template>
  <div>
    <v-card>
        <v-card-title>
            Testing
        </v-card-title>
    </v-card>
  </div>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default {
  name: "Home",

  created() {
    document.title = "Aidan Mackey | Programmer, Student, & Intern";
  },

  methods: {
    isExtraSmall() {
      if (this.$vuetify.breakpoint.name == 'xs') {
        return true;
      }

      return false;
    }
  },

  components: {
  },

  icons: {
    iconfont: "mdi",
  },

  data: () => ({
    
  }),
};
</script>

<style scoped>
  .roadMapTitleXS {
    word-wrap: break-word;
    font-family: 'Roboto'; 
    font-weight: 500;
    font-size: 2.25em;
  }

  .roadMapTitle {
    word-wrap: break-word;
    font-family: 'Roboto'; 
    font-weight: 400;
    font-size: 3em;
  }
</style>
