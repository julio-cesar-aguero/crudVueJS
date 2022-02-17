<template>
  <div class="container">

  <form  class="login__container" v-if="hasAccount">
    <div class="login__card">
      <div class="login__title">
        <h1>Login</h1>
      </div>
      <div class="login login__email">
        <label for="email">Email :</label>
        <input v-model="loginData.email" id="mail" type="text" name="email"
        
         />
      </div>
      <div class="login login__name">
        <label for="password">Contraseña :</label>
        <input v-model="loginData.password" id="password" type="password" name="password"
        
        />
      </div>
      <div class="buttons">
        <button @click="login()" type="button" id="button-login" class="button">Entrar</button>
        <button
          @click="hasAccount = false"
          type="button"
          id="button-register"
          class="button"
        >
          Registrarse
        </button>
      </div>
    </div>
  </form>

  <form  class="login__container" v-else>
    <div class="login__card">
      <div class="login__title">
        <h1>Register User</h1>
      </div>
      <div class="login login__name">
        <label for="name">Nombre :</label>
        <input v-model="registerData.name" id="name" type="text" name="name"
         />
      </div>
      <div class="login login__email">
        <label for="email">Email :</label>
        <input v-model="registerData.email" id="mail" type="text" name="email"
        
         />
      </div>
      <div class="login login__name">
        <label for="password">Contraseña :</label>
        <input v-model="registerData.password" id="password" type="password" name="password"
        
        />
      </div>
      <div class="buttons">
        <button
          @click="register()"
          type="button"
          id="button-register"
          class="button">
          Registrarse
        </button>
        <button 
          @click="hasAccount = true"
          type="button"
          id="button-login" class="button">Entrar</button>
        
      </div>
    </div>
  </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      hasAccount: true,
      loginData: new Object(),
      registerData: new Object()
    }
  },
  methods:{
    login(){
      var data = {
        email: this.loginData.email,
        password: this.loginData.password
      }
      axios.post('http://localhost:3000/api/Login', data)
      .then((res)=>{
        var user = res.data.user;
        if(user != null){
          localStorage.setItem('user',JSON.stringify(user))
          this.$router.push('/user')
        }
      })
    },
    register(){
      var data = {
        name: this.registerData.name,
        email: this.registerData.email,
        password: this.registerData.password
      }
      axios.post('http://localhost:3000/api/Users',data)
      .then((res)=>{
        console.log(res.data,"Michi")
      })
    }
    
  }
}
</script>
<style>
body{
    background-color: #f2f2f2;
}
.login__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: blue;
}
.login__card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: #f2f2f2;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  overflow: hidden;
}
.login__title {
  font-weight: 200;
  font-size: 1em;
}
.login {
  font-size: 19px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  margin: 0.3em;
}
.login label {
  margin: 0.5em;
}
.login input {
  padding: 0.2em;
  height: 40px;
  width: 80%;
  background-color: rgba(202, 202, 202, 0.253);
  border-radius: 5px;
  color: darkcyan;
  margin: 0 auto;
}
.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
}
.button {
  width: 100px;
  text-align: center;
  background-color: red;
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 5px;
}
.button:hover {
  background-color: rgba(255, 7, 7, 0.178);
}
#button-register {
    background-color: green;
}
#button-register:hover {
    background-color: rgba(0, 128, 0, 0.308);
}


</style>