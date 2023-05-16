<script >
import HeaderVue from './components/HeaderVue.vue';
import MainVue from './components/MainVue.vue';
import FooterVue from './components/FooterVue.vue'
import axios from 'axios'

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
    <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          I will not close if you click outside of me.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './style/main.scss' as*;

  // .webApp{
    
  // }

</style>
