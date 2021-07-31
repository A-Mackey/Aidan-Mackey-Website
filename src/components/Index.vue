<template>
  <div>
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
                  target="_blank"
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
          <v-img :src="require('../../static/pictures/programmerCOLOR.svg')" contain />
        </v-col>
      </v-row>

      <!-- About Me -->
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

      <!-- My Roadmap -->

      <v-card
        flat
        class="mb-8"
      >
        <v-card-title
            class="text-center justify-center black--text mt-12 mb-5 text-wrap"
            :class=" isExtraSmall() ? 'roadMapTitleXS' : 'roadMapTitle'"
          >
            {{RoadMapHeader}}
          </v-card-title>
      </v-card>

      <v-row cols="12" v-for="job, i in Roadmap" :key="i">

        <v-col v-if="(i+1)%2 == 0 && !isExtraSmall()" cols="0" sm="6" md="6" lg="6" xl="6">
        
          <v-row align="center" no-gutters justify="center" style="height: 100%">
            <h1
              class="text-center align-center"
              style="
                font-family: 'Roboto'; 
                font-weight: 600;
                font-size: 2.25em;
                vertical-align: middle;
                color: #3F2D76;
              "
            >
            {{job.when}}
            </h1>
          </v-row>  
        
        </v-col>
          
        <v-divider
          v-if="(i+1)%2 == 0 && !isExtraSmall()"
          class=""
          vertical
        ></v-divider>

        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card
            flat
          >
            <Job :title="job.job" :subTitle="job.title" :text="job.info" :left="(i+1)%2 == 0"/>
          </v-card>
        </v-col>

        <v-divider
          v-if="(i)%2 == 0 && !isExtraSmall()"
          class=""
          vertical
        ></v-divider>

        <v-col v-if="(i)%2 == 0 && !isExtraSmall()" cols="0" sm="6" md="6" lg="6" xl="6" >
          <v-row align="center" no-gutters justify="center" style="height: 100%">
            <h1
              class="text-center align-center"
              style="
                font-family: 'Roboto'; 
                font-weight: 600;
                font-size: 2.25em;
                vertical-align: middle;
                color: #3F2D76;
              "
            >
            {{job.when}}
            </h1>
          </v-row>
        </v-col>

      </v-row>

      <!-- Languages & Websites Row -->
      <v-row class="mt-8" justify="center" cols="12">
        <v-col>
          <div align="center">
            <v-img
              width="50%"
              :src="require('../../static/pictures/manCOLOR.svg')"
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
              margin: 0;
              padding: 0;
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

        <v-col
          sm="6"
          xs="12"
          justify="center"
          align="center"
          class="text-center"
        >
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
              margin: 0;
              padding: 0;
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

      <!-- Projects Row -->
      <v-row class="mt-8 mb-8" justify="center">
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

          <!-- Project Cards -->
          <v-row cols="12" class="mb-12" justify="center">
            <div v-for="project in projects" :key="project.name">
              <ProjectCard
                :title="project.name"
                :text="project.text"
                :image="project.image"
                :button="project.button"
                :link="project.link"
                :width="350"
              />
            </div>
          </v-row>
        </v-card>
      </v-row>

      <!-- Man crossing finish line picture -->
      <v-row cols="12" justify="center">
        <v-col lg="6" md="8" sm="12">
          <v-img
            :src="require('../../static/pictures/finishCOLOR.svg')"
            contain
          />
        </v-col>
      </v-row>
    </v-container>

    <!-- Bottom Footer -->
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="primary">
          <strong class="subheading">{{ footerHeading }}</strong>

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in networks"
            :key="icon.name"
            class="mx-4"
            dark
            icon
            :href="icon.link"
          >
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          © {{ new Date().getFullYear() }} — <strong>{{ name }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import ProjectCard from "../../static/objects/projectCard.vue";
import Job from "../../static/objects/job.vue";

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
    ProjectCard,
    Job,
  },

  icons: {
    iconfont: "mdi",
  },

  data: () => ({
    testText: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.",

    name: "Aidan Mackey",
    buttons: [
      {
        name: "linkedIn",
        icon: "mdi-linkedin",
        color: "#2867B2",
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
        color: "#1B4353",
        secondaryColor: "white",
        link: "https://devpost.com/amackey",
      },
    ],

    Name: "Aidan Mackey",
    Title: "Programmer, Student, and Intern",

    AboutMeHeader: "Hello World!",

    AboutMeText:
      "Thank you for visiting my website! Since beginning my journey as a programmer in high school, I have worked with school IT departments, startups, and big tech companies; as well as worked along side many talented individuals that have helped me to grow in my teamwork and programming skills. I have become quite skilled in Full-Stack Website Development, Software Engineering, and Development Operations. I am a very hardworking person and am always looking for new technologies to learn.",


    RoadMapHeader: "My Experience",
    Roadmap: [
      { 
        job: "INRIX", 
        title: "Software Development Engineer & Product Manger", 
        info: "Returning software engineer with more responsibility as a product manager. I will be responsible for my team reaching project milestones as well as staying organized. I will be working on the DaaS team, working with API's in Java and C#.",
        when: "Summer 2021",
      },
      { 
        job: "Panterix", 
        title: "Founder, CFO, and Software Engineer", 
        info: "Started a business with a product that globally ranks roads on their safety. I Participated in undergraduate research and published a paper at the Good Techs conference with a university professor. Personall, I am developing the consumer facing website in Vue JS and mobile application in React Native as well as the backend API's with Microsoft's ASP.NET product.",
        when: "February 2020 - Present",
      },
      { 
        job: "INRIX", 
        title: "Software Development Engineer Intern", 
        info: "Pitched a hackathon product to INRIX and further developed it with their high-density data into their SaaS suite of products. The product was a road map that displayed danger hopspots, with the intended purpose of giving this data to first responderes to improve response time. Over the summer, I improved the algorithm and customer-facing UI with INRIX data scientists and filed a patent for this technology. During my time here I contributed code to a map tile providing server that is used worldwide by millions of users.",
        when: "Summer 2020",
      },
      { 
        job: "Santa Margarita High School", 
        title: "IT Intern & Consultant", 
        info: "Worked in a high school’s IT department as an intern during the summer, and then consultant during the school year. I resolved computer issues by replacing defective components and troubleshooting software problems and prepared the computers, projectors, Wi-Fi nodes and various other devices for the upcoming school year.",
        when: "2016 - 2019",
      },
    ],

    Header1: "Programmer",
    Header2: "Website Developer",

    Header1Subtitle: "",
    Header2Subtitle: "",

    Header1SubHeader: "Languages",
    Header2SubHeader: "Websites",

    ProjectsHeader: "Projects",
    ProjectsSubHeader:
      "I have taken part in many projects, here are some of my favorites!",

    languages: [
      { name: "C++ / C#" },
      { name: "Javascript" },
      { name: "Vue JS" },
      { name: "Dotnet Framework" },
    ],

    websites: [
      { site: "INRIX Scorecard" },
      { site: "Panterix.com" },
      { site: "AidanMackey.net" },
      { site: "IGCaptions.online" },
    ],

    projects: [
      {
        name: "Panterix.com",
        text: "Founder and CFO of Panterix: we rate roads on their safety.",
        button: "Learn More",
        link: "http://panterix.com",
        image: require("../../static/pictures/Cards/PanterixCard.png"),
      },
      {
        name: "INRIX Scorecard",
        text: "Full-stack developer of dangerous roads scorecard.",
        button: "View Here",
        link: "https://inrix.com/most-dangerous-roads/",
        image: require("../../static/pictures/Cards/InrixCard.png"),
      },
      {
        name: "Quick Bites",
        text: "2021 Hackathon Winning Project.",
        button: "View Here",
        link: "https://devpost.com/software/quick-bites#updates",
        image: require("../../static/pictures/Cards/QuickBitesCard.png"),
      },
      {
        name: "Inspirometer",
        text: "Mobile app that measures and tracks user's lung capacity.",
        button: "GitHub Repo",
        link: "https://github.com/A-Mackey/Inspirometer-Mobile",
        image: require("../../static/pictures/Cards/InspirometerCard.png"),
      },
      {
        name: "AidanMackey.net",
        text: "Developer of this website!",
        button: "GitHub Repo",
        link: "https://github.com/A-Mackey/Aidan-Mackey-Website",
        image: require("../../static/pictures/Cards/AidanMackeyCard.png"),
      },
      {
        name: "Research Paper",
        text: "Panterix research paper publushed at GoodTechs confrance.",
        button: "Read Here",
        link: "https://dl.acm.org/doi/abs/10.1145/3411170.3411269",
        image: require("../../static/pictures/Cards/PublishedPaperCard.png"),
      },
    ],

    footerHeading: "Get connected with me!",

    networks: [
      {
        name: "linkedIn",
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/aidanmackey/",
      },
      {
        name: "GitHub",
        icon: "mdi-github",
        link: "https://github.com/A-Mackey",
      },
      {
        name: "Devpost",
        icon: "mdi-dev-to",
        link: "https://devpost.com/amackey",
      },
      {
        name: "Email",
        icon: "mdi-email",
        link: "mailto:aidan_mackey@yahoo.com",
      },
    ],
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
