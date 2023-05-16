<script >
import HeaderVue from './components/HeaderVue.vue';
import MainVue from './components/MainVue.vue';
import FooterVue from './components/FooterVue.vue'
import axios from 'axios'

import { store } from './store';

export default{
  name:'app',
  components:{
    HeaderVue,
    MainVue,
    FooterVue
},
  data(){
      return{
          store
      }
  },
  created(){

  },
  methods:{
    prenota(){
      
      if(store.nomeUser!='' && store.cognomeUser!='' && store.numeroUser!='' && store.emailUser!='' && store.dataUser!=''){        
        store.arrayPrenotazioni.push(
          {
            nomeUser: store.nomeUser,
            cognomeUser: store.cognomeUser,
            numeroUser: store.numeroUser,
            emailUser: store.emailUser,
            dataUser: store.dataUser
          })
          store.prenotazione=true
          
        } else{
          store.prenotazione=false
        }
      
    },
    pulisci(){
      store.nomeUser= '',
      store.cognomeUser='',
      store.emailUser='',
      store.numeroUser='',
      store.dataUser=''
    }
  }
}
</script>

<template>
  <div class="webApp">
    <HeaderVue/>
    <MainVue/>
    <FooterVue/>
    <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title text-capitalize" id="staticBackdropLabel">prenota un appuntamento</h5>
        <button type="button" @click="pulisci()" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="px-4">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" v-model="store.emailUser" required>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Nome</label>
              <input type="text" class="form-control" placeholder="Nome" v-model="store.nomeUser" required>
            </div>
            <div class="mb-3 ">
              <label class="form-check-label" for="exampleCheck1">Cognome</label>
              <input type="text" class="form-control" placeholder="Cognome" v-model="store.cognomeUser" required>
            </div>
            <div class="mb-3 ">
              <label class="form-check-label" for="exampleCheck1">Numero</label>
              <input type="number" class="form-control" placeholder="Number" v-model="store.numeroUser" required>
            </div>
            <div class="mb-3 ">
              <label class="form-check-label" for="exampleCheck1">Data Prenotazione</label>
              <input type="date" class="form-control" v-model="store.dataUser" required>
            </div>
            <button type="submit" class="btn btn-primary" @click="prenota()">prenota</button>
          </form>

          <div v-if="(store.prenotazione)" >
            <p class="p-4 fs-3">La prenotazione è stata effettuata con <span class="text-success text-uppercase fw-bold">successo</span>  a nome di <strong>{{ store.nomeUser }} {{ store.cognomeUser }}</strong> in data: <strong>{{ store.dataUser }}</strong></p>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './style/main.scss' as*;

  .offcanvas{
    min-width: 600px;
  }
  input{
    border: 1px solid rgb(232, 232, 232);
    border-radius: 6px;
    min-width: 300px;
  }

</style>
