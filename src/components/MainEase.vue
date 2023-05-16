<script >
export default {
    name:'MainEase',
    components:{
        
    },
    data(){
        return{
            
        }
    },
}
</script>

<template>
    <div class="xy">
        <div class="container position-relative">
            <div class="green-box position-absolute d-flex flex-column align-items-center justify-content-around p-4 text-white">
                <h5 class="text-capitalize fs-4 fw-bold text-white">we remove the headache from moving</h5>
                <h2 class="text-uppercase fw-bold text-white">move whith ease</h2>
                <div class="text-white"></div>
                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In atque mollitia commodi sed nam nisi explicabo, sit officiis dolore blanditiis quibusdam cupiditate ducimus reprehenderit sint soluta minus et non quasi.</p>
                <a href="" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" class="btn btn-primary">get a free quote now</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .xy{
        background-image: url(../../public/avada-movers-movewithease-background-new.jpg);
        width: 100%;
        .container{
            height: 100vh;
            width: 80%;
            margin: 0 auto;
            .green-box{
                background-color: #6ABF17;
                border: 15px solid green;
                width: 600px;
                height: 400px;
                text-align: center;
                top: 50%;
                right: 0;
            }
        }

    }
    h2{
        font-size: 3rem;
    }
    .br{
        width: 100px;
        height: 3px;
        border: 2px solid;
        color: white;
        border-color: white;
    }
</style>