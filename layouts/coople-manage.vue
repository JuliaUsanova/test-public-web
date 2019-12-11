<template>
    <div>
        <nuxt />
        <coople-manage-footer />
    </div>
</template>

<script>
    import CoopleManageFooter from '~/components/CoopleManageFooter.vue';

    export default {
        components: {
            CoopleManageFooter
        },
        css: ['@/assets/styles/coople-manage.main.scss'],
    };
</script>
