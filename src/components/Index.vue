<template>
  <v-container>
    <!-- Name, Title, Buttons, and Image -->
    <v-row class="text-center" align="center" justify="center" cols="12">
      <v-col style="" sm="6" xs="12">
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
          {{ Name }}
        </h1>

        <h2
          class="display-1 mt-10"
          style="
            font-family: 'Roboto'; 
            font-weight: 350;
            font-size: 4em;
            letter-spacing: 2px;
          "
        >
          {{ Title }}
        </h2>

        <v-container class="mt-6">
          <v-row>
            <v-col v-for="button in buttons" :key="button.name">
              <v-btn
                class=""
                fab
                medium
                :href="button.link"
                :color="button.color"
              >
                <v-icon :color="button.secondaryColor">
                  {{ button.icon }}
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col sm="6" xs="12">
        <v-img :src="require('../../static/pictures/man.svg')" contain />
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-card
        color="primary"
        height="auto"
        width="100%"
        class="text-center justify-center rounded-lg"
        flat
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
          {{ AboutMeHeader }}
        </v-card-title>

        <v-card-text
          style="
              font-family: 'Roboto'; 
              font-weight: 300;
              font-size: 18px;
              letter-spacing: 1.7px;
              line-height: 32px;
            "
          class="white--text pl-12 pr-12 mb-12"
        >
          {{ AboutMeText }}
        </v-card-text>
      </v-card>
    </v-row>

    <v-row class="mt-8" justify="center" align="cetner" cols="12">
      <v-col>
        <div align="center">
          <v-img
            width="50%"
            :src="require('../../static/pictures/programmer.svg')"
            contain
          />
        </div>
      </v-col>

      <v-col
        sm="6"
        xs="12"
        justify="center"
        align="center"
        class="text-center"
        style="justify-content: center"
      >
        <h1
          style="
            font-family: 'Roboto'; 
            font-weight: 500;
            font-size: 2em;
            letter-spacing: 4px;
          "
          class="mb-1"
        >
          {{ Header1 }}
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
          {{ Header1Subtitle }}
        </p>

        <h1
          style="
            font-family: 'Roboto'; 
            font-weight: 400;
            font-size: 1.5em;
            letter-spacing: 4px;
          "
        >
          {{ Header1SubHeader }}
        </h1>

        <ul
          style="
            list-style-type: none;
          "
        >
          <li v-for="language in languages" :key="language.name">
            <h3
              style="
                font-family: 'Roboto'; 
                font-weight: 400;
                font-size: 1em;
                letter-spacing: 4px;
              "
            >
              {{ language.name }}
            </h3>
          </li>
        </ul>
      </v-col>

      <v-col sm="6" xs="12" justify="center" align="center" class="text-center">
        <!-- <div align="center">
          <v-img
            width="50%"
            :src="require('../../static/pictures/finish.svg')"
            contain
          />
        </div> -->

        <h1
          style="
            font-family: 'Roboto'; 
            font-weight: 500;
            font-size: 2em;
          "
        >
          {{ Header2 }}
        </h1>

        <p
          style="
            font-family: 'Roboto'; 
            font-weight: 300;
            font-size: 18px;
            letter-spacing: 1.7px;
          "
        >
          {{ Header2Subtitle }}
        </p>

        <h1
          style="
            font-family: 'Roboto'; 
            font-weight: 400;
            font-size: 1.5em;
            letter-spacing: 4px;
          "
        >
          {{ Header2SubHeader }}
        </h1>

        <ul
          style="
            list-style-type: none;
          "
        >
          <li v-for="website in websites" :key="website.site">
            <h3
              style="
                font-family: 'Roboto'; 
                font-weight: 400;
                font-size: 1em;
                letter-spacing: 4px;
              "
            >
              {{ website.site }}
            </h3>
          </li>
        </ul>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-card
        color="primary"
        height="auto"
        width="100%"
        class="text-center justify-center rounded-lg"
        flat
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
          {{ ProjectsHeader }}
        </v-card-title>

        <v-card-text
          style="
              font-family: 'Roboto'; 
              font-weight: 300;
              font-size: 18px;
              letter-spacing: 1.7px;
              line-height: 32px;
            "
          class="white--text pl-12 pr-12 mb-12"
        >
          {{ ProjectsSubHeader }}
        </v-card-text>

        <v-row cols="12" class="mb-12" justify="center">
          <v-cols v-for="project in projects" :key="project.name">
            <projectCard
              :title="project.name"
              :text="project.text"
              :image="project.image"
            />
          </v-cols>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import projectCard from "../../static/objects/projectCard.vue";

export default {
  name: "Home",

  components: {
    projectCard,
  },

  icons: {
    iconfont: "mdi",
  },

  data: () => ({
    buttons: [
      {
        name: "linkedIn",
        icon: "mdi-linkedin",
        color: "blue",
        secondaryColor: "white",
        link: "https://www.linkedin.com/in/aidanmackey/",
      },
      {
        name: "GitHub",
        icon: "mdi-github",
        color: "light-grey",
        secondaryColor: "black",
        link: "https://github.com/A-Mackey",
      },
      {
        name: "Devpost",
        icon: "mdi-dev-to",
        color: "primary",
        secondaryColor: "white",
        link: "https://devpost.com/amackey",
      },
    ],

    Name: "Aidan Mackey",
    Title: "Programmer, Student, and Intern",

    AboutMeHeader: "Hello World!",
    AboutMeText:
      "Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.",

    Header1: "Programmer",
    Header2: "Website Developer",

    Header1Subtitle: "",
    Header2Subtitle: "",

    Header1SubHeader: "Languages",
    Header2SubHeader: "Websites",

    ProjectsHeader: "Projects",
    ProjectsSubHeader:
      "I have taken part in many projects, here are some of them",

    languages: [
      { name: "C++ / C#" },
      { name: "Javascript" },
      { name: "Vue JS" },
      { name: "Dotnet Framework" },
    ],

    websites: [
      { site: "INRIX Scorecard" },
      { site: "Panteix.com" },
      { site: "AidanMackey.net" },
    ],

    projects: [
      {
        name: "Panterix.com",
        text: "Panterix",
        link: "link",
        image:
          "https://www.pnas.org/content/pnas/118/3/e2024425118/F1.large.jpg",
      },
      {
        name: "INRIX Scorecard",
        text: "INRIX",
        link: "link",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Road_in_Norway.jpg/1200px-Road_in_Norway.jpg",
      },
      {
        name: "AidanMackey.net",
        text: "AidanMakcey.net",
        link: "link",
        image:
          "https://cdn.lynda.com/course/82409/82409-637199534202772226-16x9.jpg",
      },
      {
        name: "Inspirometer",
        text: "Inspirometer",
        link: "link",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      },
      {
        name: "Inspirometer",
        text: "Inspirometer",
        link: "link",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      },
      {
        name: "Inspirometer",
        text: "Inspirometer",
        link: "link",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      },
    ],
  }),
};
</script>
