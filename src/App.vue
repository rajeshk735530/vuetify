<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-main class="mx-4 ml-4 mb-4">
      <router-view></router-view>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from '@/components/NavbarPage';

export default {
  name: 'App',
  components: { Navbar },

  data: () => ({
    //
  }),
};
</script>
