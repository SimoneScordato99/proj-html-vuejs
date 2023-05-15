<script >
import HeaderVue from './components/HeaderVue.vue';
import MainVue from './components/MainVue.vue';
import FooterVue from './components/FooterVue.vue'
import axios from 'axios';
import { store } from './store';

export default{
  name:'app',
  components:{
    HeaderVue,
    MainVue,
    FooterVue
},
  data(){
      return{
          store
      }
  },
  created(){

  },
  methods:{
 
  }
}
</script>

<template>
  <div class="webApp">
    <HeaderVue/>
    <MainVue/>
    <FooterVue/>
  </div>
</template>

<style lang="scss">
@use './style/main.scss' as*;

  // .webApp{
    
  // }

</style>
