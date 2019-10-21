<template>
  <div>
    <v-parallax  style="height:200px;" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-avatar class="transform-center" size="120">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg">
      </v-avatar>
      <h1 class="text-center">{{userInfo.name}}</h1>
    </v-parallax>

    <v-card>
      <v-tabs v-model="tab" background-color="secondary" centered dark icons-and-text>
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-1">
          Personal
          <v-icon>mdi-account</v-icon>
        </v-tab>
        <v-tab href="#tab-2">
          Favorites
          <v-icon>mdi-heart</v-icon>
        </v-tab>
        <v-tab href="#tab-3">
          Todos
          <v-icon>mdi-lead-pencil</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="pb-5">
        <v-tab-item value="tab-1">
          <v-row class="py-5" justify="center" align="center">
            <v-col cols="10" sm="6">
              <v-card class="py-5">
                <v-card-text>
                  <v-row justify="center" align="center">
                    <v-col cols="10" sm="5">
                      <h3 class="text-center">Name</h3> <p  class="text-center">{{ userInfo.name }}</p>
                      <h3  class="text-center">Username</h3><p  class="text-center">{{ userInfo.username }}</p>
                      <h3  class="text-center">Email</h3> <p  class="text-center">{{ userInfo.email }}</p>
                      <h3  class="text-center">Adress</h3> <p  class="text-center">{{ userInfo.address.street }}</p>
                    </v-col>
                    <v-col cols="10" sm="5">
                      <h3  class="text-center">Phone</h3> <p class="text-center">{{ userInfo.phone }}</p>
                      <h3 class="text-center">Website</h3><p class="text-center">{{ userInfo.website}}</p>
                      <h3 class="text-center">Company name</h3> <p class="text-center">{{ userInfo.company.name }}</p>
                      <h3 class="text-center">Company description</h3> <p class="text-center">{{ userInfo.company.bs }}</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item value="tab-2">
          <v-card flat>
            <v-card-text>
              <!-- ucitavanje lajkovanih postova iz niza likedPosts u store -->
               <v-card v-for="post in $store.state.likedPosts" :key="post.title" class="transform-center mt-5" style="width:800px;">
                  <PostPreview :post="post"/>
              </v-card>
            </v-card-text>
          </v-card>
        </v-tab-item>

      <v-tab-item value="tab-3">
        <v-dialog v-model="dialogProject" width="600">
          <!-- ovaj template se stavlja oko dugmeta koji ukljucuje popup -->
          <template v-slot:activator="{ on }">
            <v-btn class="transform-center my-5" color="primary" dark v-on="on">
              Add project
            </v-btn>
          </template>
          <v-card class="pa-4">
            <h2 class="text-center py-4">New project</h2>
            <v-form>
              <v-text-field v-model="newProject.title" label="Project title"></v-text-field>
              <v-select label="Status" :items="statuses" v-model="newProject.status"></v-select>
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :value="computedDateFormattedDatefns"
                    clearable
                    label="Rok"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="newProject.date"
                  @change="menu1 = false"
                ></v-date-picker>
              </v-menu>
              <v-btn @click="submitProject()" class="transform-center" large color="primary">Submit project</v-btn>
            </v-form>
          </v-card>
        </v-dialog>
        <div>
          
        </div>
          <v-card v-for="project in projects" :key="project.title" style="width:800px;" class="transform-center pr-5 mt-3" :class="borderClass(project.status)">
            <v-card-text>
              <v-row class="mt-2">
                <v-col sm="6">
                  <h2>Project title</h2>
                  <h3>{{ project.title }}</h3>
                </v-col>
                <v-col sm="3">
                  <h2>Due by</h2>
                  <p>{{project.date}}</p>
                </v-col>
                <v-col sm="2">
                  <v-row justify="center">
                    <v-chip :class="chipClass(project.status)" text-color="white"> {{ project.status }} </v-chip>
                  </v-row>
                </v-col>
                <v-col sm="1">
                  <v-btn @click="deleteProject(project.id)" text icon color="primary"> <v-icon>mdi-delete</v-icon></v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
    </v-tabs-items>
  </v-card>
  </div>
</template>
<script>
import axios from 'axios'
import format from 'date-fns/format'
/* npm install date-fns --save
   kad instalirate ovo mozete da formatirate datume, vidi dole u computed 
*/
import PostPreview from '../components/PostPreview'

export default {
    components: {
      PostPreview
    },
    data () {
      return {
        statuses: ['Uradjen', 'Na cekanju', 'Istekao rok'],
        menu1: false,
        dialogProject: false,
        tab: null,
        userInfo: [],
        projects: [],
        loadingProject: false,
        newProject: {
          status: 'Na cekanju',
          title: '',
          date: new Date().toISOString().substr(0, 10),
        }
      }
    },
     computed: {
      computedDateFormattedDatefns () {
        return this.newProject.date ? format(this.newProject.date, 'DD.MM.YYYY.') : ''
      },
    },
    created() {
      this.getProjects()
      axios
          .get('https://jsonplaceholder.typicode.com/users/1')
          .then(response => (this.userInfo = response.data))
    },
     watch: {
    // slicno kao computed, svaki put kad se doda novi projekat, zovemo fju get projects i niz projects se updejtuje
    // tako da cim dodamo novi projekat videcemo ga 
      projects: function () {
        this.getProjects()
      }
    },
    methods: {
      submitProject(){
        this.loading = true
        axios
          .post('https://test-s2s-f43b0.firebaseio.com/projects.json', this.newProject)
          .then(response => (
            this.dialogProject = false
          ))
      },
      getProjects(){
        axios
          .get('https://test-s2s-f43b0.firebaseio.com/projects.json')
          .then( response => { 
             var projectsArray = []
             /*ovo se radi zato sto u firebase podaci nemaju id nego ovaj key koji nije direktno zakacen za podatak*/
            for(let key in response.data){
              response.data[key].id = key
              projectsArray.push(response.data[key])
            }
            this.projects = projectsArray
          })
      },
      deleteProject(id){
        axios
          .delete('https://test-s2s-f43b0.firebaseio.com/projects/' + id + '.json')
      },
      //dinamicki odredjujemo boju ovog chip-a u zavisnosti od statusa
      chipClass(status){
        if(status == 'Uradjen'){
          return 'green'
        } else if (status == 'Na cekanju'){
          return 'yellow'
        } else if (status == 'Istekao rok'){
          return 'red'
        }
      },
      //dinamicki odredjujemo boju bordera u zavisnosti od statusa
       borderClass(status){
        if(status == 'Uradjen'){
          return 'green-border'
        } else if (status == 'Na cekanju'){
          return 'yellow-border'
        } else if (status == 'Istekao rok'){
          return 'red-border'
        }
      }

    }
}
</script>
<style scoped>
.info-border {
  border-right: 2px solid #FF6B6A;
}
.transform-center {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.yellow {
  background-color: #FFEB3C;
}
.green {
  background-color: #0CBCD6;
}
.red {
  background-color: #FF6B6A;
}
.yellow-border {
  border-left: 5px solid #FFEB3C;
}
.green-border {
  border-left: 5px solid #0CBCD6;
}
.red-border {
  border-left: 5px solid #FF6B6A;
}
</style>
