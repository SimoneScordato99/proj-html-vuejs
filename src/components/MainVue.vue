<script >
import {store} from '../store';
import MainSimple from './MainSimple.vue'
import MainAward from './MainAward.vue'
import MainSolution from './MainSolution.vue'
import MainEase from './MainEase.vue'
import MainTestimonials from './MainTestimonials.vue'
import MainRequest from './MainRequest.vue'

export default {
    name:'MainVue',
    components:{
        MainSimple,
        MainAward,
        MainSolution,
        MainEase,
        MainTestimonials,
        MainRequest,
    },
    data(){
        return{
            store
        }
    },
}
</script>

<template>
    <MainSimple/>
    <MainAward/>
    <MainSolution/>
    <MainEase/>
    <MainTestimonials/>
    <MainRequest/>
</template>

<style scoped lang="scss">
    
</style>