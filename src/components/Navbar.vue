<template>
  <div>
    <v-app-bar dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/explore" text>Explore</v-btn>
        <v-btn to="/user" text>User</v-btn>
        <v-btn to="/contact" text>Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute>
      <v-list>
          <v-list-item active-class="primary--text" to="/">Home</v-list-item>
          <v-list-item active-class="primary--text" to="/explore">Explore</v-list-item>
          <v-list-item active-class="primary--text" to="/user">User</v-list-item>
          <v-list-item active-class="primary--text" to="/contact">Contact</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div> 
</template>
<script>
export default {
  data(){
    return {
      drawer: false
    }
  }
}
</script>