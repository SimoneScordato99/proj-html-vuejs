<script >
export default {
    name:'MainRequest',
    components:{
        
    },
    data(){
        return{
            
        }
    },
}
</script>

<template>
    <div id="request" class="xy">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <h2 class="text-uppercase fw-bold ">request a fre quote</h2>
            <p class="text-center p-5 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maxime quaerat earum molestiae eligendi dolores tempore, nobis consectetur odio porro hic quae velit enim sapiente unde explicabo, ad incidunt dolor!</p>
            <a href="" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" class="btn btn-primary">click here</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .xy{
        background-image: url(../../public/avada-movers-request-quote-background.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        .container{
            height: 100vh;
            width: 80%;
            margin: 0 auto;
            h2{
                font-size: 5rem;
                color: #6ABF17;
            }
        }
    }
</style>