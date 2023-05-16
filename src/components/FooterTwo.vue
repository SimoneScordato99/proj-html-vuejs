<script >

export default {
    name:'FooterTwo',
    components:{
      
    },
    data(){
      return{

      }
    }
}

</script>

<template>
    <div id="footer" class="xy">
        <div class="container ">
           <ul class="p-0 d-flex justify-content-center align-items-center text-white text-capitalize">
                <li>&#169; copyright 2012-2020 | </li>
                <li>avada theme by theme fusion | </li>
                <li>all rights reserved |</li>
                <li>powered ny word press</li>
           </ul>
           <div class="d-flex justify-content-center align-items-center">
                <a href=""><i class="fa-brands fa-facebook-f fa-xl p-3" style="color: #ffffff;"></i></a>
                <a href=""><i class="fa-brands fa-twitter fa-xl p-3" style="color: #ffffff;"></i></a>
                <a href=""><i class="fa-brands fa-instagram fa-xl p-3" style="color: #ffffff;"></i></a>
                <a href=""><i class="fa-brands fa-youtube fa-xl p-3" style="color: #ffffff;"></i></a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .xy{
        background-color: #6ABF17;
        width: 100%;
        .container{
            height: 10vh;
            width: 80%;
            margin: 0 auto;
            
        }}
    
</style>