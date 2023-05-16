<script >
export default {
    name:'MainSimple',
    components:{
        
    },
    data(){
        return{
            
        }
    },
}
</script>

<template>
    <div id="home" class="xy">
        <div class="container d-flex flex-column justify-content-center align-items-center text-uppercase fw-bold">
            <h5 class="fs-4 py-2 animate__animated animate__backInLeft animate__fast">moving whitout the hassle</h5>
            <h2 class="animate__animated animate__backInRight ">we make it simple</h2>
            <h5 class="fs-4 py-2 animate__animated animate__backInLeft animate__slow ">professional service with quality and customer satisfaction</h5>
        </div>
    </div>
    <a href="#" class="btn btn-primary big-btn fs-2 d-flex justify-content-center align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
        <i class="fa-solid fa-paper-plane px-3 animate__animated animate__swing animate__infinite" style="color: #ffffff;"></i>
        <span>get a free quote online now</span>
    </a>
</template>

<style scoped lang="scss">
    .xy{
        background-color: #ffffff;
        background-image: url(../../public/avada-movers-homeherobackground-final.jpg);
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        height: calc(100vh - 200px);
        .container{
            height: 100%;
            width: 80%;
            margin: 0 auto;
            h2{
                font-size: 5rem;
                font-weight: bold;
            }
        }
    }
    .big-btn{
        height: 200px;
        width: 100%;
        border-radius: 0;
    }
</style>