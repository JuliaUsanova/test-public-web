<template>
    <div>
        <nuxt />
        <custom-footer />
    </div>
</template>

<script>
import CustomFooter from '~/components/CustomFooter.vue';

export default {
    components: {
        CustomFooter
    }
};
</script>
