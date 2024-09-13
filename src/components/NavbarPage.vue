<template>
  <v-nav>
    <!-- App Bar -->
    <v-app-bar app text>
      <v-app-bar-nav-icon>
        <v-icon @click="toggleDrawer">mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Johan</span>
        <span>Ranjha</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text color="red lighten-2">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-list>
        <v-list-item-group v-for="(item, index) in link" :key="index">
          <v-list-item :to="item.route" router>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
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
      link: [
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