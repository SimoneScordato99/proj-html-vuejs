<script >
export default {
    name:'SolutionCard',
    props:['propsSolu'],
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
        <img :src="`../../public/${propsSolu.foto}`" class="card-img-top" :alt="`${propsSolu.titolo}`">
        <div class="card-body text-center">
            <h5 class="card-title text-capitalize text-primary fs-2 fw-bold">{{ propsSolu.titolo }}</h5>
            <p class="card-text py-3">{{ propsSolu.didascalia }}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target=" `#${propsSolu.id}` ">
                read more
            </button>
            <div class="modal fade" :id=" `${propsSolu.id}` " tabindex="-1" :aria-labelledby="`${propsSolu.id}`" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-uppercase text-primary fs-2 fw-bold">{{ propsSolu.titolo }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>{{ propsSolu.didascalia }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card {
        border-color: #ffffff;
        text-align: center;
        display: flex;
        align-items: center;
        
    }
    h3{
        font-size: 3rem;
        font-weight: bold;
        color: #6ABF17;
    }
</style>