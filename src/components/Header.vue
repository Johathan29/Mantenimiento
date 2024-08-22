<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
</script>
<template>
 <header class="header">
      <div class="px-3 py-2 bg-dark text-white">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-self-baseline p-0 m-0">
                <div class="">
                 <a href="https://vitejs.dev" target="_blank">
                  <img src="/vite.svg" class="logo" alt="Vite logo" />
                </a>
                <a href="https://vuejs.org/" target="_blank">
                <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
                </a>
              </div>
              <div class=" d-lg-none d-sm-block">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </div>
            <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li>
                    <FontAwesomeIcon :icon="faHouse" class="mb-0"/>
                    <router-link class="nav-link text-white mt-0" aria-current="page" to="/" style="color: white;">
                      Home
                    </router-link>
                  </li>
                  <li>
                    <FontAwesomeIcon :icon="faPaw" class="mb-0"/>
                    <router-link class="nav-link text-white mt-0" aria-current="page" to="/mascotas">
                      Mascotas
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            </nav>
        </div>
      </div>
    </div> 
  </header>
  <header>
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex justify-content-center align-justify-content-lg-start align-items-center ">
          <a href="/" class="d-block align-items-center  m-0 me-lg-auto text-white text-decoration-none">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <ul class="nav col-12 col-lg-auto my-2 collapse navbar-collapse justify-content-center my-md-0 text-small d-sm-none" id="navbarNav">
            <li>
               <FontAwesomeIcon :icon="faHouse" class="mb-0"/>
              <router-link class="nav-link text-white mt-0" aria-current="page" to="/" style="color: white;">
                  Home
              </router-link>
            </li>
            <li>
               <FontAwesomeIcon :icon="faPaw" class="mb-0"/>
              <router-link class="nav-link text-white mt-0" aria-current="page" to="/mascotas">
                Mascotas
              </router-link>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"></use></svg>
                Orders
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"></use></svg>
                Products
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"></use></svg>
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="px-3 py-2 border-bottom mb-3">
      <div class="container d-flex flex-wrap justify-content-center">
        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>
        <div class="text-end">
          <button type="button" class="btn btn-light text-dark me-2">Login</button>
          <button type="button" class="btn btn-primary">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
</template>
<style>
.navbar-collapse{
  background: transparent;
}
header.header{
  background: #212529!important;
background-image: none;
}
</style>