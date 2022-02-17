<template>
  <div class="principal__page">
    <header class="header">{{ user.name }}</header>
    <div class="content">
      <h1>Bienvenido {{ user.name }}</h1>
    </div>
    <div class="card__container" v-if="notes != null">
      <div class="card" v-for="(note, index) in notes" :key="index">
        <h2 class="card__title">Pedido:</h2>
        <small>{{ note._id }}</small>
        <span><b>Nombre : </b> {{ user.name }}</span>
        <span><b>Email : </b> {{ user.email }}</span>
        <div class="card__description">
          <h3>Descripcion:</h3>
          <span>{{ note.title }}</span>
          <p>{{ note.content }}</p>
        </div>
        <div class="card__options">
          <v-btn :color="note.state ? 'success' : 'error'" depressed fab small>
            <v-icon v-if="note.state">mdi-check</v-icon>
            <v-icon v-else>mdi-close</v-icon>
          </v-btn>
          <v-btn color="warning" @click="dialog = true">
            <v-icon> mdi-square-edit-outline </v-icon>
          </v-btn>
          <v-btn class="ml-2" color="indigo" fab small>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </div>
        <v-dialog :overlay="false" max-width="380px" transition="scale-transition" v-model="dialog">
          <div class="card__dialog">
            <h2 class="card__title">Editar Pedido</h2>
            <label for="nombre">Nombre :</label>
            <input type="text" name="nombre">
            <label for="nombre">Email :</label>
            <input type="text" name="nombre">
            <div class="card__options">
              <v-btn color="blue" fab small>
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn color="green" fab small>
                <v-icon>mdi-check</v-icon>
              </v-btn>
            </div>
          </div>
        </v-dialog>
      </div>
    <div class="card__container" v-else>
      <h1>No hay pedidos</h1>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: new Object(),
      notes: [],
      dialog: false,
      noteEdit: new Object(),
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getNotes();
  },
  methods: {
    getNotes() {
      var id = this.user._id;
      axios.get(`http://localhost:3000/api/notes/${id}`).then((res) => {
        this.notes = res.data.notes;
      });
    },
    updateNote(id) {
      var data = {
        title: this.noteEdit.title,
        content: this.noteEdit.content,
        state: this.noteEdit.state,
      };
      axios.put(`http://localhost:3000/api/notes/${id}`, data);
    },
  },
};
</script>
<style>
body {
  background-color: azure;
}
.principal__page {
  position: relative;
}
.content {
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  color: aliceblue;
}
.card__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.3em 0.3em;
  margin: 0.2em 2em;
  width: 320px;
  background-color: aliceblue;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-top: 10px solid blue;
}
.card__title{
  font-weight: 300;
  margin: 0 1.5em 0.5em;
}
.card__description {
  width: 100%;
  padding: 0.4em;
  background-color: blue;
  color: aliceblue;
}
.card__options {
  padding: 0.7em;
}
.card__dialog{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  background-color: aliceblue;
  color: black;
  border-top: 50px solid rgba(0, 0, 255, 0.658);
}
.card__dialog input{
  background-color: #2c2a2a3d;
  padding: 0.2em 0.1em;
  border-radius: 5px;
}
.v-btn {
  margin: 5px;
}
</style>