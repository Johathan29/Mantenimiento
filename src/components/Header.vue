<script></script>
<template>
  <header class="header">
    <div
      class="d-flex"
      style="
        justify-content: space-between;
        align-items: center;
        margin: 0px;
        padding: 0px;
      "
    >
      <div class="d-sm-none d-lg-block">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="navbar-brand d-lg-none d-sm-block">
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
              <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/"
                  >Home</router-link
                >
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/mascotas"
                  >Mascotas</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
