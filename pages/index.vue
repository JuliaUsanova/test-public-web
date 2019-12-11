<template>
    <section class="container">
        <div>
            <h1 class="title">
                <span>{{ $t('welcome') }} </span> public-web
            </h1>
            <h2 class="subtitle">
                Nuxt.js project
            </h2>
            <div class="links">
                <nuxt-link :to="localePath({ name: 'home' }, $i18n.locale)">Home</nuxt-link>
                <nuxt-link :to="switchLocalePath('ru')">Russian</nuxt-link>
                <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>

export default {

};
</script>

<style>

</style>
