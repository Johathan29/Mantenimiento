<script setup>
import { ref, computed, onMounted } from 'vue';
const users = ref(null);
const capturar = ref();
const itemUser = ref([]);
const grupoItem = ref([]);
  //https://jsonplaceholder.typicode.com/users
onMounted(async () => {
  const response = await fetch('https://binx.hacienda.gob.do/Reports/powerbi/PUBLICACION/TRANSPARENCIA/DASHBOARDS/PTF_INDICADORES_PRESUPUESTO?rs:Embed=true');
  users.value = await response.json();
  console.log(user.value);
});

const detalleUser = (index) => {
  setTimeout(() => {
   grupoItem.value="";
  },'5000');

    itemUser.value = users.value.find((item) => item.id === index);
  grupoItem.value = itemUser.value;

  console.log(grupoItem.value);
};
</script>

<template>
  <h2 class="title">Listado de Usuarios</h2>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button class="btn btn-info" @click="detalleUser(user.id)">
            Detalle
          </button>
        </td>
        <td
          class="alert alert-primary"
          role="alert"
          v-if="user.id === grupoItem.id"
        >
          {{ grupoItem.company.name }}
          {{ grupoItem.name }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style>
th {
    width: 135px!important;
}
td.alert.alert-primary {
  float: inline-start;
  margin-left: -17rem;
  background: aliceblue;
  height: 104px;
}
.title {
  color: #fff;
  background: #195062;
  font-family: ui-monospace;
  font-weight: 600;
}
.btn-info {
  color: #0a262f !important;
  font-family: system-ui;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
  font-size: small;
  font-weight: 700;
  text-transform: capitalize;
}
</style>
