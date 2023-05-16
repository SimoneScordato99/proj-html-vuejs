<script >
import TestimonialCard from './TestimonialCard.vue';
export default {
    name:'MainTestimonials',
    components:{
        TestimonialCard
    },
    data(){
        return{
            testimonials: [
                {
                    nome: 'Jhon Doe',
                    didascalia: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi facilis necessitatibus, porro sit dicta id nemo quia quae debitis explicabo aperiam nesciunt mollitia voluptates, numquam laudantium error, ut aliquam! Similique!',
                    foto: 'avada-movers-johndoe-final.jpg'
                },
                {
                    nome: 'Jane Doe',
                    didascalia: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi facilis necessitatibus, porro sit dicta id nemo quia quae debitis explicabo aperiam nesciunt mollitia voluptates, numquam laudantium error, ut aliquam! Similique!',
                    foto: 'avada-movers-janedoe-final.jpg'
                },
                {
                    nome: 'Jhon Smith',
                    didascalia: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi facilis necessitatibus, porro sit dicta id nemo quia quae debitis explicabo aperiam nesciunt mollitia voluptates, numquam laudantium error, ut aliquam! Similique!',
                    foto: 'avada-movers-johnsmith-final.jpg'
                },
            ]
        }
    },
}
</script>

<template>
    <div id="testimonial" class="xy">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <div class="cards d-flex justify-content-between align-items-center py-4">
                <TestimonialCard v-for="(elem, index) in testimonials" :key="index" :propsTest="elem"/>
            </div>
            <a class="btn btn-primary ">read more testimonials</a>
        </div>

    </div>
</template>

<style scoped lang="scss">
    .xy{
        background-image: url(../../public/avada-movers-testimonial-background.jpg);
        width: 100%;
        .container{
            height: 100vh;
            width: 80%;
            margin: 0 auto;
            
        }
    }
</style>