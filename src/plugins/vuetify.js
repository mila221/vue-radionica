import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  /* Ovde mozete da menjate temu tj boje, i da im dajete naziv i njih mozete da koristite u bilo kojoj str*/
  theme: {
    themes: {
      light: 
      { primary: '#0CBCD6',
        secondary: '#FF6B6A',
        accent: '#FFEB3C',
        tirkizna: '#48C7B5',
        svetla: '#53E3D2'
      },
    },
  },
});
