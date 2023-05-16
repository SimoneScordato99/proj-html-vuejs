<script >
export default {
    name:'TestimonialCard',
    props:['propsTest'],
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
        <img :src="`../../public/${propsTest.foto}`" class="card-img-top" :alt="` ${propsTest.nome} `">
        <div class="card-body">
            <h3>{{ propsTest.nome }}</h3>
            <p class="card-text fst-italic fw-lighter">"{{ propsTest.didascalia }}"</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card {
        border-color: #ffffff;
        text-align: center;
        display: flex;
        align-items: center;
        img{
            border-radius: 50%;
            width: 50%;
        }
    }
    h3{
        font-size: 3rem;
        font-weight: bold;
        color: #6ABF17;
    }
</style>