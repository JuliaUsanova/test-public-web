<template>
    <footer class="text-center py-4">
        <object
            class="logo mt-4"
            :data="require('~/assets/icons/logo-pink.svg')"
            type="image/svg+xml"
        ></object>
        <ul class="d-flex justify-content-around p-0 col-lg-8">
            <li v-for="link in links" :key="link.id">
                <a :href="link.url">{{ link.text }}</a>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { text: 'Terms and conditions', url: '#', id: 0 },
                { text: 'Privacy policy', url: '#', id: 1 },
                { text: 'Carreers', url: '#', id: 2 },
                { text: 'About us', url: '#', id: 3 },
                { text: 'Contact us', url: '#', id: 4 },
            ],
        };
    },
};
</script>

<style lang="scss">
footer {
    min-height: 270px;

    .logo {
        height: 70px;
        margin-bottom: 48px;
        @include media-breakpoint-down(sm) {
            margin-bottom: 25px;
        }
    }

    ul {
        list-style: none;
        margin: 0 auto;
        @include media-breakpoint-down(sm) {
            flex-direction: column;
        }
        li {
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            margin-bottom: 25px;
            a {
                color: #212529;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
