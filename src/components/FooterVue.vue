<script >
import { store } from '../store';
export default {
    name:'FooterVue',
    components:{
      
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