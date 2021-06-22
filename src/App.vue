<template>
  <v-app>
    <router-view>
    <!-- Could add 'app' to make it scroll witth page -->
    <v-app-bar color="primary" light>
      <v-spacer />

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="
            require('../static/pictures/favicon_ioLOGO/apple-touch-icon.png')
          "
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          :src="require('../static/pictures/AidanMackeyHeaderWHITE.png')"
          width="200"
        />
      </div>

      <v-spacer />
    </v-app-bar>

    <v-main>
      <Index />
    </v-main>
    </router-view>
  </v-app>
</template>

<script>
import Index from "./components/Index";

export default {
  name: "App",

  components: {
    Index,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
html,
body,
#app {
  overflow-x: hidden;
}
</style>
