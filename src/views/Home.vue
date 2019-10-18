<template>
  <v-app>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <h1 class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <v-btn large to="/explore" width="100" class="transform-center mt-2 white--text" color="primary">Explore</v-btn>
    </v-parallax>

    <h1 class="text-center pt-5 mt-5">Citajte razne kategorije</h1>
  
    <v-row class="pt-5" align="center" justify="center">
      <div class="boxes">
        <div class="circle"> <v-icon class="icon">mdi-account</v-icon> </div>
        <h3 class="text-center py-3">Lorem ipsum dolor</h3>
        <p  class="text-center pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque minus quasi, eaque ab ad doloremque, saepe placeat architecto libero corporis accusamus sint. Reprehenderit vitae nisi pariatur dolore odio doloremque, dolorum, sit dolores aut officia minus unde corrupti iusto, ab rem?</p>
      </div>
      <div class="boxes">
        <div class="circle"> <v-icon class="icon">mdi-heart</v-icon> </div>
        <h3 class="text-center py-3">Lorem ipsum dolor</h3>
        <p  class="text-center pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate sequi saepe eaque eligendi iusto at repellendus, illum quasi possimus! Explicabo necessitatibus, nisi aliquid, facere odio officia hic quasi dolore, minus perferendis repellat. Officia aperiam assumenda quos voluptatibus eos laudantium!</p>
      </div>
      <div class="boxes">
        <div class="circle"> <v-icon class="icon">mdi-pencil</v-icon> </div>
        <h3 class="text-center py-3">Lorem ipsum dolor</h3>
        <p class="text-center pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate sequi saepe eaque eligendi iusto at repellendus, illum quasi possimus! Explicabo necessitatibus, nisi aliquid, facere odio officia hic quasi dolore, minus perferendis repellat. Officia aperiam assumenda quos voluptatibus eos laudantium!</p>
      </div>
    </v-row>
   
    <h1 class="text-center py-5 my-5">Cesta pitanja</h1>

    <v-row align="center" justify="center">
      <v-col cols="10" sm="6" >
        <template>
          <v-expansion-panels class="pb-5" focusable>
            <v-expansion-panel
              v-for="(item,i) in 5"
              :key="i"
            >
              <v-expansion-panel-header>Item</v-expansion-panel-header>
              <v-expansion-panel-content class="pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.boxes {
  display: inline-block;
  width: 300px;
  padding: 20px;
}
.boxes p {
  height: 300px;
}
h3 {
  border-bottom: 2px solid #48C7B5;
}
.circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 15px solid #48C7B5 ;
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s;
}
.icon {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 60px;
}
.circle:hover, .icon:hover{
  border-color: #FF6B6A;
  color: #FF6B6A;
  
}
</style>