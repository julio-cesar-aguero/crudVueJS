<template>
<div class="principal__page">
  <header class="header"></header>
    <div class="content">
    <h1>Bienvenido</h1>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            user: new Object()
        }
    },
    mounted(){
        this.user = JSON.parse(localStorage.getItem('user'))
    }
}
</script>
<style>
.principal__page {
  }
.content{
  width: 100%;
  display: flex;
  background-color: #f2f2f2;
  color: black;
  height: 100vh;
  align-items: center;

}
.header {
  position: fixed;
  background-color: blue;
  width: 100%;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
</style>