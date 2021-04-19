<template>
  <v-container
  >

    <v-card
      width="300px"
      height="150px"
      flat
    >
        <v-img
          height="150px"
          :src="image"
          style="
            position: absolute;
          "
        ></v-img>
    
        <h1
          style="
            position: absolute;
            background-color: rgba(0,0,0,0.2);
            color: white;
            padding-left: 10px;
            padding-right: 10px;
            border-radius: 15px;
          "
          class="ml-4 mt-4"
        >
            {{title}}
        </h1>

        <v-card-text>
            {{text}}
        </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

  export default {
    name: 'Project Card',

    props: {
      title: String,
      text: String,
      link: String,
      image: String,
    },

    data: () => ({

    }),
  }
</script>
