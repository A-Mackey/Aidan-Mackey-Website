<template>
  <v-container>
    <v-row class="text-center" align="center" justify="center">
      <v-col style="background-color:white">
        <h1 class="display-3 font-weight-bold">
          Aidan Mackey
        </h1>

        <h2 class="display-1 mt-10">
          Programmer, Student, and Intern
        </h2>

        <v-container class="mt-2">
          <v-row justify="center">
            <v-col v-for="button in buttons" :key="button.name" cols=2>
              <v-btn
                class="ml-2 mr-2"
                fab
                medium
                :href="button.link"
                target="_blank"
              >
                <v-icon color="black">  {{button.icon}} </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

      </v-col>

        <v-col cols="6">
          <v-img
            :src="require('../../static/pictures/man.svg')"
            contain
          />
        </v-col>

      </v-row>
        
      <v-row>
        <v-card
          color="primary"
          height="1000px"
          width="100%"
        >
          <v-card-title
            style="background-color:white"
          >
            Test
          </v-card-title>
        </v-card>
    </v-row>
  </v-container>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

  export default {
    name: 'Home',

    icons: {
      iconfont: 'mdi'
    },

    data: () => ({
      buttons: [
        {name:"linkedIn", icon:"fas fa-linkedin", color:"blue", link:"https://www.linkedin.com/in/aidanmackey/"},
        {name:"GitHub", icon:"icon", color:"blue", link:"https://github.com/A-Mackey"},
        {name:"Devpost", icon:"icon", color:"blue", link:"https://devpost.com/amackey"},
      ],
    }),
  }
</script>
