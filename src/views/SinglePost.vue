<template>
    <div>
       <v-parallax  style="height:200px;" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <h1 class="text-center"> {{ post.title }} </h1>
            <h2 class="text-center"> {{ author }} </h2>
        </v-parallax>
        <v-card class="transform-center mt-5 pa-3" style="width:700px;">
            <v-card-title>
                {{ post.title }}
            </v-card-title>
            <v-card-text>
              <p class="pb-3 pt-2">{{ post.body}}</p>
              <v-divider></v-divider>
              <h2 class="pt-3">Comments</h2>
              <div v-for="comment in filteredComments" :key="comment.id" class="comment">
                  <h2>{{ comment.name }}</h2>
                  <h3 class="pt-2">{{ comment.email }}</h3>
                  <p class="pt-2">{{ comment.body }}</p>
                  
              </div>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            post: [],
            author: '',
            users: [],
            comments: [],
            filteredComments: []
        }
    },
    created(){
        axios
            .get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
            .then(response=> {
                this.post = response.data
            })
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response=> {
                this.users = response.data
                this.author = this.getUserById(this.post.userId)
            })
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then(response=> {
                this.comments = response.data
                this.getCommentsById(this.post.id)
            })
    },
    methods: {
        getUserById(id){
            var i;
            for (i = 0; i < this.users.length; i++) {
                if(this.users[i].id === id){
                     return this.users[i].name
                }
            }
        },
        getCommentsById(id){
             var i;
            for (i = 0; i < this.comments.length; i++) {
                if(this.comments[i].postId === id){
                   this.filteredComments.push(this.comments[i]) 
                }
            }
        }
    }
}
</script>
<style scoped>
.transform-center {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.comment {
    padding: 10px;
    border: 1px solid grey;
    margin-top: 15px;
    border-radius: 5px;
}
</style>