<template>
  <div class="dashboard">

    <div>
      <div 
        style="background-image:url('https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg')"
      >
        <!-- Pull image from LinkedIn Profile -->
        <v-layout justify-center>
          <v-img
            class="rounded-circle mt-5"
            max-height="300"
            max-width="300"
            src="https://media-exp1.licdn.com/dms/image/C5603AQH4J8WLgPWNtw/profile-displayphoto-shrink_200_200/0/1598221957751?e=1623888000&v=beta&t=z5ORgmZ0eSUBGUhlL2JVi8g89ClaqewkUQRWmJLlQl8"
          >
          </v-img>
        </v-layout>

        <h1 
          class="text-center mt-5 mb-5" 
          style="background-color:rgba(0,0,0,0.2)"
        >
          Aidan Mackey
        </h1>
      </div>
    </div>

    <div class="ma-5">
      <v-card>
        <v-card-title class="justify-center">
          About Me
        </v-card-title>
      </v-card>
    </div>

    <v-layout row>

      <!-- For loop that runs through cards and displays all the different
      topic cards I want to cover -->
      <v-flex v-for="card in cards" :key="card.header" xs12 md6 lg3>
        <TopicCard 
          class="ma-5"
          :header="card.header"
          :subtitle="card.subtitle"
          :body="card.body"
        />
      </v-flex>

    </v-layout>

  </div>
</template>

<script>
import TopicCard from '../components/Objects/TopicCard.vue'

export default {
  head: {
    title: 'Home'
  },

  components: {
    TopicCard
  },

  data() {
    return {
      cards: [
        {header:"About Me",subtitle:"",body:"words words words"},
        {header:"Experience",subtitle:"",body:"words words words"},
        {header:"Projects",subtitle:"C#, C++, Vue Js, Java",body:"words words words"},
        {header:"Panterix",subtitle:"Company",body:"words words words"},
      ]
    }
  }
}
</script>
