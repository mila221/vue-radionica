<template>
    <div>
        <!-- posto je link ka postu dinamicki jer sadrzi id posta, :to mora da ima ove dve tacke -->
        <router-link :to="'/explore/' + post.id" class="link-style">
                <v-card-title>{{ post.title }} </v-card-title>
                <v-card-text>
                    <h3 class="mb-2"> {{ author }} </h3>
                    {{ post.body }}
                </v-card-text>
            </router-link>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon :class="{ active: isActive }" @click="favorite()">mdi-heart</v-icon>
                    <!-- dinamicko prosledjivanje klase, ako je isActive true na ikonicu se stavlja klasa active koja boji srce u crveno -->
                </v-btn>
            </v-card-actions>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    props: ['post'],
    /*U props navodimo sta smo prosledili toj komponenti, u ovom slucaju mi smo nas prop nazvali post i on cuva podatke od posta
    sad je post promenljiva sa podacima koju mozemo da koristimo*/
    data(){
        return {
            isActive: false,
            author: ''
        }
    },
    created(){
        /*provera da li je post vec lajkovan da bismo obojili srce pre nego sto ucita html ako jeste
        ako je isActive true stavice se klasa acitve na srce*/
        for( var i = 0; i < this.$store.state.likedPosts.length; i++){ 
            if(this.$store.state.likedPosts[i].id == this.post.id ) {
                this.isActive = true
            } 
        }

        axios
            .get('https://jsonplaceholder.typicode.com/users/' + this.post.userId)
            .then(response=>{
                this.author = response.data.name
            })

    },
    methods: {
        favorite(){
            this.isActive = !this.isActive //toggle za boju srca
           
                 for( var i = 0; i < this.$store.state.likedPosts.length; i++){ 
                     if(this.$store.state.likedPosts[i].id == this.post.id ) {
                        return this.$store.state.likedPosts.splice(i, 1); //ako je kliknuto na srce a taj post je vec lajkovan, izbaci ga iz niza lajkovanih (taj niz je u store)
                     } 
                }

                return this.$store.state.likedPosts.push(this.post) //ako post nije vec lajkovan dodaj ga u niz lajkovanih
            
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

</style>