<template>
<div class="principal__page">
  <header class="header">{{user.name}}</header>
    <div class="content">
    <h1>Bienvenido {{user.name}}</h1>
    </div>
    <div class="card__container" v-if="notes != null">
      <div class="card" v-for="(note,index) in notes " :key="index"> 
        <h2 class="card__title">Pedido:</h2>
        <h3>{{note.title}}</h3>
        <p>{{note.content}}</p>
      </div>
    </div>
    <div class="card__container" v-else>
      <h1>No hay pedidos</h1>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            user: new Object(),
            notes: []
        }
    },
    mounted(){
        this.user = JSON.parse(localStorage.getItem('user'))
        this.getNotes();
    },
    methods:{
      getNotes(){
        var id = this.user._id;
        axios.get(`http://localhost:3000/api/notes/${id}`)
          .then((res)=>{
            this.notes = res.data.notes;
          })
      }
    }
}
</script>
<style>
body{
  background-color: azure;
}
.principal__page {
  position: relative;
  
  }
.content{
  padding-top: 120px;
  width: 100%;
  display: flex;
  color: black;
  font-weight: 300;
  height: 25vh;
  align-items: flex-start;

}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: blue;
  width: 100%;
  height: 100px;
  font-size: 25px;
  text-transform: uppercase;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  color: aliceblue;
}
.card__container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 80vh;
}
.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8em 0.3em;
  margin: 0.5em 2em;
  width: 300px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-top: 10px solid blue ;
}
</style>