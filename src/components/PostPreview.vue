<template>
    <div>
        <router-link :to="'/explore/' + post.id" class="link-style">
                <v-card-title>{{ post.title }} </v-card-title>
                <v-card-text>
                    <!-- <h3 class="mb-2"> {{ getUserById(post.userId) }} </h3> -->
                    {{ post.body }}
                </v-card-text>
            </router-link>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon :class="{ active: isActive }" @click="favorite(post)">mdi-heart</v-icon>
                </v-btn>
            </v-card-actions>
    </div>
</template>
<script>
export default {
    props: ['post'],
    data(){
        return {
            isActive: false,
        }
    },
    created(){
        for( var i = 0; i < this.$store.state.likedPosts.length; i++){ 
            if(this.$store.state.likedPosts[i].id == this.post.id ) {
                this.isActive = true
            } 
        }
    },
    methods: {
        favorite(){
            this.isActive = !this.isActive
           
            if(this.$store.state.likedPosts.length == 0 ){
                return this.$store.state.likedPosts.push(this.post)

            } else {
                 for( var i = 0; i < this.$store.state.likedPosts.length; i++){ 
                     if(this.$store.state.likedPosts[i].id == this.post.id ) {
                        return this.$store.state.likedPosts.splice(i, 1); 
                     } 
                }

                return this.$store.state.likedPosts.push(this.post)
            }
            
        }
    }
}
</script>
<style scoped>
.link-style {
    color: rgba(0, 0, 0, 0.54);
    text-decoration: none;
}
.active.mdi-heart {
    color:#FF6B6A;
}
.mdi-heart:hover {
    color: #FF6B6A;
}
</style>