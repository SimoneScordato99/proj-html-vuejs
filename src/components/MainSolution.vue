<script >
import SolutionCard from './SolutionCard.vue';
export default {
    name:'MainSolution',
    components:{
        SolutionCard
    },
    data(){
        return{
            solutions:[
                {
                    foto:'avada-movers-serviceonephoto-final.jpg',
                    titolo:'two man teams',
                    didascalia:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ab! Aliquam dolore totam quo eius explicabo iusto voluptates obcaecati neque veritatis assumenda molestias natus magnam ipsam, maiores dicta sunt possimus?'
                },
                {
                    foto:'avada-movers-servicetwophoto-final.jpg',
                    titolo:'we do all the lifting',
                    didascalia:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ab! Aliquam dolore totam quo eius explicabo iusto voluptates obcaecati neque veritatis assumenda molestias natus magnam ipsam, maiores dicta sunt possimus?'
                },
                {
                    foto:'avada-movers-servicethreephoto-final.jpg',
                    titolo:'coast to coast',
                    didascalia:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ab! Aliquam dolore totam quo eius explicabo iusto voluptates obcaecati neque veritatis assumenda molestias natus magnam ipsam, maiores dicta sunt possimus?'
                }
            ]
        }
    },
}
</script>

<template>
    <div id="solution" class="xy">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <div class="text-center py-5">
                <h5 class="fs-3 text-uppercase">we are a professional</h5>
                <h2 class="text-uppercase">full-service solution</h2>
            </div>
            <div class="d-flex justify-content-between  align-self-center">
                <SolutionCard v-for="(elem, index) in solutions" :key="index" :propsSolu="elem"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .xy{
        background-color: #ffffff;
        width: 100%;
        .container{
            height: 100vh;
            width: 80%;
            margin: 0 auto;
        }
    }
    .card {
        width: calc(100% / 3 - 15px);
        border-color: #f4f4f4;
    }
    h2{
        font-size: 4rem;
        font-weight: bold;
        color: #6ABF17;
    }
</style>