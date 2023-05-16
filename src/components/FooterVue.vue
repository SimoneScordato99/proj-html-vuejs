<script >
import FooterTwo from './FooterTwo.vue'
export default {
    name:'FooterVue',
    components:{
      FooterTwo
    },
    data(){
      return{

      }
    }
}

</script>

<template>
    <div id="footer" class="xy">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="about col-3 d-flex flex-column justify-content-between align-items-start">
                <h2>about</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vero dolorem! Corrupti dolore dolor laboriosam excepturi accusantium similique officiis ratione aperiam fugiat, fuga autem laborum reprehenderit sed maxime ex ea.</p>
                <img src="../../public/avada-movers-logo.png" alt="">
            </div>
            <div class="avada col-3">
                <h2>avada movers</h2>
                <ul class="p-0">
                    <li class="py-4 fs-4 text-capitalize"><a href="#home">home</a></li>
                    <li class="py-4 fs-4 text-capitalize"><a href="#rates">rates</a></li>
                    <li class="py-4 fs-4 text-capitalize"><a href="#testimonial">testimonials</a></li>
                    <li class="py-4 fs-4 text-capitalize"><a href="#footer">blog</a></li>
                    <li class="py-4 fs-4 text-capitalize"><a href="#request">free quote</a></li>
                </ul>
            </div>
            <div class="posts col-3">
                <h2>recent posts</h2>
                <ul class="p-0">
                    <li class="py-4 fs-4 text-capitalize"><a href="#home">heading out to college?</a></li>
                    <li class="py-4 fs-4 text-capitalize"><a href="#rates">moving your business?</a></li>
                    <li class="py-4 fs-4 text-capitalize"><a href="#testimonial">outstanding quality</a></li>
                    <li class="py-4 fs-4 text-capitalize"><a href="#footer">cost of mooving</a></li>
                    <li class="py-4 fs-4 text-capitalize"><a href="#request">best moving tips</a></li>
                </ul>
            </div>
        </div>
        <FooterTwo/>
    </div>
</template>

<style scoped lang="scss">
    .xy{
        background-color: #ffffff;
        width: 100%;
        border-top: 25px solid #6ABF17;
        .container{
            height: 50vh;
            width: 80%;
            margin: 0 auto;
            div{
                height: 80%;
            }
            h2{
                font-size: 2rem;
                text-transform: uppercase;
                font-weight: bold;
                padding-bottom: 2rem;
            }
            li{
                &:hover{
                    color: #6ABF17;
                }
            }
        }}
    
</style>