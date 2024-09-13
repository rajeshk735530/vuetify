<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-main>
      <router-view></router-view>
    </v-main>
    
  </v-app>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'
import Navbar from './components/NavbarPage.vue';

export default {
  name: 'App',
  components: { Navbar },

  data: () => ({
    //
  }),
};
</script>
