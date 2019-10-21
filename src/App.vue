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

/*

********** APP. VUE: ***********************************************************

- App.vue je glavna stranica, ona se direktno 'salje' u index.html (folder public)
- Komponente koje ukljucite ovde, bice na SVAKOJ stranici (navbar i foot)
- Tag router-view (koji imamo jer smo instalirali vue router) oznacava da ce se na tom mestu
  ucitavati sve nase rute (stranice) koje smo registrovali u router.js, stavili smo ga izmedju
  navbar i foot komponente, jer zelimo da se stranice prikazuju izmedju njih
- Bez router-view taga vue nece da prepozna rute i nece da ih ucita

********* UOPSTENO ***************************************************

-Svaki .vue fajl se sastoji iz 3 dela:
1. Template: u template tag stavljamo html stranice, on moze da sadrzi SAMO 1 tag u sebi
2. Script: deo u kojem pisemo javscript, importujemo komponente, pisemo funkcije itd
3. Style: css deo, ako style tag otvorimo <style scoped> ovo scoped znaci da taj css vazi
          SAMO u toj komponenti, i nijedan css ne moze da ga overwrituje
*/
</script>
