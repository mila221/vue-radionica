<template>
    <div>
        <v-parallax  style="height:200px;" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <h1 class="text-center">Contact us!</h1>
        </v-parallax>
        <v-row class="py-5" align="center" justify="center">
            <v-col sm="6" xs="12">
                <v-card class="pa-4">
                    <v-form ref="form">
                        <v-text-field :rules="nameRules" prepend-icon="mdi-account" label="Name" v-model="formData.name"></v-text-field>
                        <v-text-field :rules="emailRules" prepend-icon="mdi-mail-ru" label="Email" v-model="formData.email"></v-text-field>
                        <v-text-field :rules="numberRules" prepend-icon="mdi-cellphone-text" label="Number" v-model="formData.number"></v-text-field>
                        <v-select :rules="selectRules" prepend-icon="mdi-earth" label="Country" v-model="formData.selectedCountry" :items="items"></v-select>
                        <v-textarea :rules="msgRules" prepend-icon="mdi-fountain-pen-tip" filled label="Message" v-model="formData.msg"></v-textarea>
                        <v-btn @click="submit" color="primary" large class="transform-center">Submit</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
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
export default {
    data(){
        return {
            formData: {
                name: '',
                email: '',
                number: null,
                selectedCountry: '',
                msg: '',
            },
            items: ['Serbia', 'Italy', 'France'],
            nameRules: [
                v=>v.length >= 3 || 'Najmanje 3 karaktera'
            ],
            emailRules: [
                v => /.+@.+\..+/.test(v) || 'Pravilno unesite email'
            ],
            numberRules: [
                v => /^\d*$/.test(v) || 'Dozvoljeni samo brojevi'
            ],
            selectRules: [
                v=>v.length >= 3 || 'Izaberi drzavu!'
            ],
            msgRules: [
                v=>v.length >= 5 || 'Najmanje 5 karaktera'
            ]
        }
    },
    methods: {
        submit(){
            if(this.$refs.form.validate()){
                console.log(this.formData)
            }
        }
    }
}
</script>