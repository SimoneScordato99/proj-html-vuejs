<script >
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
            
        }
    },
    methods:{
        
    }
}
</script>

<template>
    <MainSimple/>
    <MainAward/>
    <MainSolution/>
    <MainEase/>
    <MainTestimonials/>
    <MainRequest/>
    <a href="#" class="btn btn-primary position-fixed"><i class="fa-solid fa-arrow-up" style="color: #ffffff;"></i></a>
</template>

<style scoped lang="scss">
    a{
        right: 20px;
        bottom: 20px;
    }
</style>