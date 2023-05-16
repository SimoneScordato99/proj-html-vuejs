<script >
export default {
    name:'NavbarDue',
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
            <a href="#">
                <img src="../../public/avada-movers-logo.png" alt="">
            </a>
            
            <div class="d-flex justify-content-between align-items-center">
                <ul class="d-flex justify-content-between align-items-center fs-4 m-0">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#rates">Rates</a></li>
                    <li><a href="#testimonial">Testimonials</a></li>
                    <li><a href="#footer">FAQ</a></li>
                    <li><a href="#footer">Blog</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" class="btn btn-primary fs-4">free quote</button>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
    .xy{
        background-color: #ffffff;
        width: 100%;
        .container{
            height: 150px;
            width: 80%;
            margin: 0 auto;
        }
        li{
            padding: 0 30px;
            font-weight: bolder;
            &:hover{
                color: #6ABF17;
            }
            &:active{
                color: #6ABF17;
            }
        }
    }
</style>