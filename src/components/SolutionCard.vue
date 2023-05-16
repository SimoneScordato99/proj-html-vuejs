<script >
export default {
    name:'SolutionCard',
    props:['propsSolu'],
    components:{
        
    },
    data(){
        return{
            
        }
    },
}
</script>

<template>
    <div class="card">
        <img :src="`../../public/${propsSolu.foto}`" class="card-img-top" :alt="`${propsSolu.titolo}`">
        <div class="card-body text-center">
            <h5 class="card-title text-capitalize text-primary fs-2 fw-bold">{{ propsSolu.titolo }}</h5>
            <p class="card-text py-3">{{ propsSolu.didascalia }}</p>
            <a href="#" class="btn btn-primary">read more</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card {
        border-color: #ffffff;
        text-align: center;
        display: flex;
        align-items: center;
        
    }
    h3{
        font-size: 3rem;
        font-weight: bold;
        color: #6ABF17;
    }
</style>