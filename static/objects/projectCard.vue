<template>
  <v-container>
    <v-hover v-slot:default="{ hover }">
      <v-card class="ma-4" color="grey lighten-4" height="150px" width="300">
        <v-img :aspect-ratio="16 / 9" :src="image">
          <v-fade-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >
              Testing
            </div>
          </v-fade-transition>
          <h2
            style="
              position: absolute;
              background-color: rgba(0,0,0,0.2);
              color: white;
              padding-left: 10px;
              padding-right: 10px;
            "
            class="ma-4"
          >
            {{ title }}
          </h2>
          <v-card-text>
            <!-- {{ text }} -->
          </v-card-text>
        </v-img>
      </v-card>
    </v-hover>
    <!-- <v-hover v-slot:default="{ hover }"> 
    <v-card
      width="300px"
      height="150px"
    >
    
        <v-img
          height="150px"
          :src="image"
          style="
            position: absolute;
          "
        >
          <v-expand-transition>
            <div v-if="{hover}" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;"> 
              $14.99 
            </div>
          </v-expand-transition>
        </v-img> -->

    <!-- <h2
          style="
            position: absolute;
            background-color: rgba(0,0,0,0.2);
            color: white;
            padding-left: 10px;
            padding-right: 10px;
          "
          class="ml-4 mt-4"
        >
            {{title}}
        </h2>

        <v-card-text>
            {{text}}
        </v-card-text> -->

    <!-- </v-card>

    </v-hover> -->
  </v-container>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default {
  name: "Project Card",

  props: {
    title: String,
    text: String,
    link: String,
    image: String,
  },

  data: () => ({}),
};
</script>
