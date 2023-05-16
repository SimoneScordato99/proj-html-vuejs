<script >
export default {
    name:'MainAward',
    components:{
        
    },
    data(){
        return{
            
        }
    },
}
</script>

<template>
    <div id="rates" class="xy">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column justify-content-between align-items-center">
                <h5 class="text-uppercase fw-bold py-2">headache free</h5>
                <h2 class="text-uppercase fw-bold">award winning</h2>
                <h2 class="text-uppercase fw-bold">moving company</h2>
                <p class="text-center py-5 fs-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, corrupti quod quisquam perspiciatis tempora error esse, in repellendus molestiae voluptatibus, reprehenderit possimus cumque illo modi? Eaque dolorem voluptatibus vero animi!</p>
                <a href="#testimonial" class="btn btn-primary" type="submit">read our testimonials</a>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
    .xy{
        background-color: #ffffff;
        background-image: url(../../public/confetti-29-unscreen.gif);
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        .container{
            height: 100vh;
            width: 40%;
            margin: 0 auto;
        }
    }
    h2{
        font-size: 4rem;
        color: #6ABF17;
    }
</style>