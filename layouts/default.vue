<template>
  <div>
    <nuxt/>
    <!-- TODO: Move to component -->
    <footer class="text-center py-4">
      <object class="logo mt-4" :data="require('~/assets/icons/logo-pink.svg')" type="image/svg+xml"></object>
      <ul class="d-flex justify-content-around p-0 col-lg-8">
        <li><a href="#">Terms and conditions</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Carreers</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </footer>
  </div>
</template>
