<script >
import { store } from '../store';
import NavbarUno from './NavbarUno.vue';
import NavbarDue from './NavbarDue.vue'
export default {
    name:'HeaderVue',
    components:{
      NavbarUno,
      NavbarDue
    },
    data(){
      return{
          store
      }
    }
}

</script>

<template>
    <header>
        <NavbarUno/>
        <NavbarDue/>
    </header>
</template>

<style scoped lang="scss">
  
</style>