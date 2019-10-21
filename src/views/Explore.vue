<template>
    <div>
        <v-parallax  style="height:200px;" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <v-row  align="center" justify="center">
                <v-col cols="12">
                    <h1 class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </v-col>
                <v-col cols="5">
                    <v-text-field
                    solo
                    label="Pretrazi..."
                    prepend-inner-icon="mdi-magnify"
                    v-model="search"
                    ></v-text-field>
                     <!-- v-model slusa promene u promenljivoj search, tako da search hvata sta je korisnik uneo u textfield -->
                </v-col>
            </v-row>
     
        </v-parallax>
        
        <!-- post je naziv koji mi dajemo za pojedinacni post a filteredPosts je niz koji je definisan dole u scriptu
        v-for prolazi kroz taj niz,  html koji se nalazi u v-card ce da se ponovi za svaki pojedinacni post -->
        <v-card v-for="post in filteredPosts" :key="post.title" class="transform-center mt-5" style="width:800px;">
            <PostPreview :post="post"/>
            <!-- ovako komponenti PostPreview prosledjujemo podatke od posta koje smo skupili u script delu
            ovo je prosledjivanje preko PROPS-a
            Prop je :post i mozemo ga posmatrati kao promenljivu, a post su podaci koji se cuvaju u njoj-->
        </v-card>
    </div>
</template>
<style scoped>
.transform-center {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
<script>
import axios from 'axios'
/* axios importujete svuda gde saljete axios pozive */
import PostPreview from '../components/PostPreview'
export default {
    components: {
        PostPreview
    },
    data(){
        return {
            search: '',
            posts: [],
        }
    },
    computed: {
    /*computed se koristi za podatke koji ce da se menjaju, i on hvata te promene
      filteredPosts su postovi koji odgovaraju pretrazi, ova fja vraca postove svaki put kad se nesto pretrazuje
    */
        filteredPosts: function(){
            return this.posts.filter((post)=> {
                return post.title.match(this.search);
            });
        }
    },
    created(){
        /*created se poziva pre nego sto vue renderuje template(tj html) deo, u njemu uzimamo podatke koje cemo da prikazemo*/
        this.getPosts()        
    },
    methods: {
        getPosts(){
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    this.posts = response.data
                    this.posts.splice(0,90)
                })
        }
    }
}
</script>