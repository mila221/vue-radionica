<template>
  <v-app>
    <Navbar/>
    <router-view></router-view>
    <Foot/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Foot from './components/Foot'

export default {
  name: 'App',
  components: {
    Navbar,
    Foot
  }
}
</script>