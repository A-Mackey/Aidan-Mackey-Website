<template>
  <v-container>

    <!-- Name, Title, Buttons, and Image -->
    <v-row class="text-center" align="center" justify="center" cols="12">
      <v-col style=""
        sm="6"
        xs="12"
      >
        <h1 
          class="font-weight-bold"
          style="
            font-family: 'Roboto'; 
            font-weight: 500;
            font-size: 4em;
            letter-spacing: 2px;
            line-height: 64px;
          "
        >
          {{Name}}
        </h1>

        <h2 class="display-1 mt-10"
          style="
            font-family: 'Roboto'; 
            font-weight: 350;
            font-size: 4em;
            letter-spacing: 2px;
          "
        >
          {{Title}}
        </h2>

        <v-container class="mt-2">
          <v-row justify="center">
            <v-col v-for="button in buttons" :key="button.name">
              <v-btn
                class=""
                fab
                small
                :href="button.link"
                outlined
                color="primary"
              >
                <v-icon 
                  color="black"
                >  
                  {{button.icon}} 
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

      </v-col>

        <v-col sm="6" xs="12">
          <v-img
            :src="require('../../static/pictures/man.svg')"
            contain
          />
        </v-col>

      </v-row>
        
      <v-row class="mt-8">
        <v-card
          color="primary"
          height="auto"
          width="100%"
          class="text-center justify-center rounded-lg"
        >
          <v-card-title
            class="text-center justify-center white--text mt-12 mb-5"
            style="
              font-family: 'Roboto'; 
              font-weight: 400;
              font-size: 3em;
              letter-spacing: 4px;
            "
            
          >
            {{AboutMeHeader}}
          </v-card-title>

          <v-card-text
            style=
            "
              font-family: 'Roboto'; 
              font-weight: 300;
              font-size: 18px;
              letter-spacing: 1.7px;
              line-height: 32px;
            "
            class="white--text pl-12 pr-12 mb-12"
          >
            {{AboutMeText}}
          </v-card-text>
        </v-card>
    </v-row>

    <v-row class="mt-8" justify="center" cols="12">

      <v-col
        sm="6"
        xs="12"
        justify="center"
        class="text-center"
        style="justify-content: center"
      >

        <div align="center">
          <v-img
            width="50%"
            :src="require('../../static/pictures/programmer.svg')"
            contain
          />
        </div>

        <h1
          style="
            font-family: 'Roboto'; 
            font-weight: 400;
            font-size: 2em;
            letter-spacing: 4px;
          "
        >
          {{Header1}}
        </h1>

        <p
          style="
            font-family: 'Roboto'; 
            font-weight: 300;
            font-size: 18px;
            letter-spacing: 1.7px;
            line-height: 32px;
          "
        >
          {{Header1Subtitle}}
        </p>

      </v-col>
      
      <v-col
        sm="6"
        xs="12"
        justify="center"
        class="text-center"
      >

        <div align="center">
          <v-img
            width="50%"
            :src="require('../../static/pictures/finish.svg')"
            contain
          />
        </div>

        <h1
          style="
            font-family: 'Roboto'; 
            font-weight: 400;
            font-size: 2em;
            letter-spacing: 4px;
          "
        >
          {{Header2}}
        </h1>

        <p
          style="
            font-family: 'Roboto'; 
            font-weight: 300;
            font-size: 18px;
            letter-spacing: 1.7px;
            line-height: 32px;
          "
        >
          {{Header2Subtitle}}
        </p>

      </v-col>
          
    </v-row>


    <v-row class="mt-8">
        <v-card
          color="primary"
          height="auto"
          width="100%"
          class="text-center justify-center rounded-lg"
        >
          <v-card-title
            class="text-center justify-center white--text mt-12 mb-5"
            style="
              font-family: 'Roboto'; 
              font-weight: 400;
              font-size: 3em;
              letter-spacing: 4px;
            "
            
          >
            {{ProjectsHeader}}
          </v-card-title>

          <v-card-text
            style=
            "
              font-family: 'Roboto'; 
              font-weight: 300;
              font-size: 18px;
              letter-spacing: 1.7px;
              line-height: 32px;
            "
            class="white--text pl-12 pr-12 mb-12"
          >
            {{ProjectsSubHeader}}
          </v-card-text>
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

      Name: "Aidan Mackey",
      Title: "Programmer, Student, and Intern",

      AboutMeHeader: "Hello World!",
      AboutMeText: "Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.",

      Header1: "Programmer",
      Header2: "Leader",

      Header1Subtitle: "I enjoy creating tools that will help people",
      Header2Subtitle: "I have been a leader in many projects",

      ProjectsHeader: "Projects",
      ProjectsSubHeader: "I have taken part in many projects, here are some of them",
    }),
  }
</script>
