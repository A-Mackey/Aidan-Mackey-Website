<template>
  <v-container>
    <v-hover v-slot:default="{ hover }">
      <v-card 
        class="ma-4"
        color="grey lighten-4" 
        height="150px" 
        width="300"
        style="border-radius: 15px"
      >
        <v-img :aspect-ratio="16 / 9" :src="image">
          <v-fade-transition>
            <div
              v-if="hover"
              class="
              d-flex 
              transition-fast-in-fast-out 
              primary 
              darken-2 
              v-card--reveal 
              display-3 
              white--text
              text-center
              text-center
              justify-center
              "
              style="height: 100%;"
            >
              <v-row cols="12" justify="center" align="center">
                <v-col lg="8">
                  
                  <h3 style="
                  font-family: 'Roboto'; 
                  font-weight: 300;
                  font-size: 0.25em;
                  letter-spacing: 2px;
                  line-height: 25px;
                ">
                  {{text}}
                </h3>


                  <v-btn 
                    rounded 
                    color="white" 
                    outlined
                    :href="link"
                    target="_blank"
                  >
                    {{button}}
                  </v-btn>
                </v-col>
              </v-row>
              
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
            <!-- {{ title }} -->
          </h2>
          <v-card-text>
            <!-- {{ text }} -->
          </v-card-text>
        </v-img>
      </v-card>
    </v-hover>
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
    button: String,
  },

  data: () => ({}),
};
</script>
