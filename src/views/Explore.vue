<template>
    <div>
        <v-parallax  style="height:200px;" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <v-row  align="center" justify="center">
            <v-col cols="12">
                <v-row align="center" justify="center">
                 <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </v-row>
                <v-row align="center" justify="center">
                    <v-col cols="5">
                        <v-text-field
                        solo
                        label="Pretrazi..."
                        prepend-inner-icon="mdi-magnify"
                        v-model="search"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            </v-row>
        </v-parallax>
        
        <v-card v-for="post in filteredPosts" :key="post.title" class="transform-center mt-5" style="width:800px;">
            <PostPreview :post="post"/>
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
import PostPreview from '../components/PostPreview'
export default {
    components: {
        PostPreview
    },
    data(){
        return {
            search: '',
            posts: [],
            username:'',
            users: [],
            isActive: false
        }
    },
    computed: {
        filteredPosts: function(){
            return this.posts.filter((post)=> {
                return post.title.match(this.search);
            });
        }
    },
    mounted(){
        this.getPosts()
        this.getUsers()
        
    },
    methods: {
        getPosts(){
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    this.posts = response.data
                    this.posts.splice(0,90)
                })
            
        },
        getUsers(){
             axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    this.users = response.data
                })
        },
        getUserById(id){
            var i;
            for (i = 0; i < this.users.length; i++) {
                if(this.users[i].id === id){
                     return this.users[i].name
                }
            }
        },
    }
}
</script>