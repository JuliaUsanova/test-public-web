<template>
  <section class="container">

      <h2 class="subtitle">
        Home page
      </h2>

    <p class="text-bold">
      Lorem ipsum dolor sit amet, an meis lorem choro cum, mel mundi causae eu. Dicant eripuit nec at,
      in invenire postulant has. Partiendo repudiare adolescens eu sit. Meis detraxit disputationi duo eu, fabellas verterem phaedrum has an, inimicus appellantur vis ne. Nam laoreet civibus ut. Vis vitae iudico constituto te, ex eos aeterno gloriatur.
    </p>

    <p class="text-muted">
      Sit ad simul gloriatur, ea ignota lobortis ius. Ut legimus tibique scaevola mei, vis omnis ludus corpora et.
      Veri perfecto definitiones nam ea. Cum et omnium molestie, per omnes fierent ut.
    </p>
    <nuxt-link :to="localePath({name: 'index'}, $i18n.locale)">Main</nuxt-link>

  </section>
</template>

<script>
  export default {}
</script>
