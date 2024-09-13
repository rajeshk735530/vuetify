<template>
  <v-nav>
    <!-- App Bar -->
    <v-app-bar app text flat>
      <v-app-bar-nav-icon>
        <v-icon @click="toggleDrawer">mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Johan</span>
        <span>Ranjha</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Dropdown Menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on" color="grey">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" :to="link.route" router>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app v-model="drawer" class="white">

      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar class="ml-4" size="100">
            <img src="/img-1.png" alt="">
          </v-avatar>
          <p class="grey--text subheading mt-1">
            The project avatar
          </p>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item-group v-for="link in links" :key="link.text">
          <v-list-item :to="link.route" router>
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </v-nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account-group', text: 'Team', route: '/team' },
      ],
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
}
</script>