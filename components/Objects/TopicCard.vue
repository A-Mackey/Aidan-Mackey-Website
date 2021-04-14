<template>
    <div>
        <v-card>
            <v-card elevation="2">
                <v-card-title>{{header}}</v-card-title>

                <v-card-subtitle>{{subtitle}}</v-card-subtitle>

                <v-card-text>{{body}}</v-card-text>

                <v-card-action>
                    <v-btn>
                        More
                    </v-btn>
                </v-card-action>
            </v-card>
        </v-card>
    </div>
</template>

<script>

export default {
  components: {
  },

  props: {
      header: String,
      subtitle: String,
      body: String,
  }
}
</script>
