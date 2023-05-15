<script >
export default {
    name:'NavbarUno',
    components:{ 
    },
    data(){
      return{
          
      }
    }
}

</script>

<template>
    <div class="xy">
        <div class="container d-flex justify-content-between align-items-center">
            <a href="#" class="d-flex align-items-center fs-4 text-white ">
                <i class="fa-solid fa-phone fa-rotate-270" style="color: #ffffff;"></i>
                <span>Call us for a Free Quote: 1.800.555.6789</span>
            </a>
            <div class="d-flex justify-content-between align-items-center">
                <i class="fa-brands fa-facebook-f fa-xl" style="color: #ffffff;"></i>
                <i class="fa-brands fa-twitter fa-xl" style="color: #ffffff;"></i>
                <i class="fa-brands fa-instagram fa-xl" style="color: #ffffff;"></i>
                <i class="fa-brands fa-youtube fa-xl" style="color: #ffffff;"></i>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .xy{
        background-color: #6ABF17;
        width: 100%;
        .container{
            height: 50px;
            width: 80%;
            margin: 0 auto;
            i{
                padding: 0 10px;
            }
        }
    }
</style>