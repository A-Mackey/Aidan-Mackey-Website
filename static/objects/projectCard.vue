<template>
  <v-container>

    <v-card>
        <v-card-title>
            Title
        </v-card-title>

        <v-card-text>
            Text
        </v-card-text>
    </v-card>

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
      Header2: "Website Developer",

      Header1Subtitle: "",
      Header2Subtitle: "",

      Header1SubHeader: "Languages",
      Header2SubHeader: "Websites",

      ProjectsHeader: "Projects",
      ProjectsSubHeader: "I have taken part in many projects, here are some of them",

      languages: [
        {name:"C++ / C#"},
        {name:"Javascript"},
        {name:"Vue JS"},
        {name:"Dotnet Framework"},
      ],

      websites: [
        {site: "INRIX"},
        {site: "Panteix"},
        {site: "This Website"},
      ]
    }),
  }
</script>
