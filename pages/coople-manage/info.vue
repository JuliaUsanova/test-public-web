<template>
    <div>
        <section class="section-home">
            <header class="d-flex justify-content-center">
                <img src="~/assets/icons/logo.svg" alt="" class="logo" />
            </header>
            <div class="row">
                <div class="col-lg-6">
                    <div class="title-box">
                        <h1 class="m-0">What to expect from Coople</h1>
                        <p>
                            You will shortly be using Coople to plan shifts with your employer.
                            Here’s what you can expect from the app….
                        </p>
                        <a href="#plan-shifts"
                            ><button class="btn btn-lg btn-primary py-3 px-5">Learn More</button>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <object
                        class="home-app-views"
                        :data="require('~/assets/icons/coople-manage/info/home-app-views.svg')"
                        type="image/svg+xml"
                    ></object>
                </div>
            </div>
        </section>
        <section id="plan-shifts" class="section-plan-shifts">
            <div class="row">
                <div class="col-lg-5 order-lg-2 pt-5">
                    <h2 class="m-0">Plan your shifts on the go</h2>
                    <p>
                        Coople lets you plan shifts with your employer. As soon as your employer
                        posts a job, you’ll be able to see it on the Coople app. Then it’s just a
                        case of applying for the shifts that fit your schedule.
                    </p>
                </div>
                <div class="col-lg-5 order-lg-1 d-flex justify-content-center">
                    <object
                        class="company-jobs-view"
                        :data="require('~/assets/icons/coople-manage/info/company-jobs.svg')"
                        type="image/svg+xml"
                    ></object>
                </div>
            </div>
        </section>
        <section class="section-flexibility overflow-hidden">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <h2 class="m-0">Total flexibility</h2>
                    <p>
                        With Coople, you can make your work fit around your needs. You simply set
                        your availability and apply for the shifts you want. It gives you greater
                        flexibility over your schedule, and ensures your employer only hires you for
                        the shifts you can work.
                    </p>
                </div>
                <div class="col-lg-7 flexibility-view-wrapper">
                    <object
                        class="flexibility-view"
                        :data="require('~/assets/icons/coople-manage/info/flexibility.svg')"
                        type="image/svg+xml"
                    ></object>
                </div>
            </div>
        </section>
        <section class="section-submit-hours">
            <div class="row">
                <div class="col-lg-5 offset-lg-5 order-lg-2">
                    <h2 class="m-0">Submit your hours</h2>
                    <p>
                        Using the app, you can submit your hours directly to your employer at the
                        end of your shift. There’s no paperwork or timesheets. Instead you just tap
                        a button and your employer will receive your hours instantly.
                    </p>
                </div>
                <div class="col-lg-5 order-lg-1 d-flex justify-content-center">
                    <object
                        class="submit-hours-view"
                        :data="require('~/assets/icons/coople-manage/info/submit-hours.svg')"
                        type="image/svg+xml"
                    ></object>
                </div>
            </div>
        </section>
        <section class="section-next">
            <h2 class="m-0 text-center">What's next?</h2>
            <b-carousel id="whatsNextCarouselCmp" ref="whatsNextCarouselCmp" indicators>
                <b-carousel-slide
                    v-for="step in steps"
                    :key="step.index"
                    class="carousel-item text-center mt-5"
                >
                    <template v-slot:img>
                        <div class="next-step-icon d-flex justify-content-center align-items-end">
                            <img :src="step.imgSrc" alt="" />
                        </div>
                        <h3 class="mb-4 mt-3">{{ step.header }}</h3>
                        <p>{{ step.content }}</p>
                    </template>
                </b-carousel-slide>
            </b-carousel>
            <div id="whatsNextDefault" class="row">
                <div v-for="step in steps" :key="step.index" class="col text-center mt-5">
                    <div class="next-step-icon d-flex justify-content-center align-items-end">
                        <img :src="step.imgSrc" alt="" />
                    </div>
                    <h3 class="mb-4 mt-3">{{ step.header }}</h3>
                    <p>{{ step.content }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.title
        };
    },
    data() {
        return {
            title: 'What to Expect',
            steps: [
                {
                    index: 0,
                    imgSrc: require('~/assets/icons/coople-manage/info/in-touch-step.svg'),
                    header: `We'll be in touch`,
                    content: `You should receive an email from us soon with the subject line ‘You’re
                            invited!’ Be sure to open the email because it will contain a link to
                            download the app!`
                },
                {
                    index: 1,
                    imgSrc: require('~/assets/icons/coople-manage/info/download-step.svg'),
                    header: 'Download the app',
                    content: `You’ll need to click on the link in the email to download the app. It’s
                            important that you only use the link in the email to download the app
                            rather than downloading it directly from the app store. This is because
                            you will need a specific version of the app that works with jobs posted
                            by your employer.`
                },
                {
                    index: 2,
                    imgSrc: require('~/assets/icons/coople-manage/info/setup-step.svg'),
                    header: 'Set up your account',
                    content: `Once you have the app installed, all you have to do is follow the simple
                            in-app instructions to set up your account. Then it’s just a case of
                            checking the jobs posted by your employer and applying to the ones that
                            fit your availability.`
                }
            ],
        };
    },
};
</script>

<style lang="scss">
@import '~assets/styles/coople-manage-common.scss';

.section-home {
    background: url('~assets/icons/coople-manage/info/home-bkg.svg') no-repeat bottom center;
    background-size: cover;
    min-height: 980px;
    @include media-breakpoint-down(md) {
        min-height: 1544px;
    }
    .title-box {
        margin-top: 85px;
        max-width: 540px;
        color: #ffffff;
        line-height: 40px;
        p {
            font-size: 27px;
            margin: 32px 0 62px 0;
        }
    }
    .home-app-views {
        margin-top: -175px;
        margin-right: -85px;
        float: right;
        @include media-breakpoint-down(md) {
            margin-top: 0;
            margin-right: -60px;
        }
        @include media-breakpoint-down(xs) {
            margin-right: -30px;
        }
    }
}

.section-plan-shifts {
    min-height: 370px;
    .company-jobs-view {
        position: absolute;
        top: -175px;
        right: 62px;
        z-index: 1;
        @include media-breakpoint-down(md) {
            position: initial;
            margin-top: 20px;
        }
    }
}

.section-flexibility {
    position: relative;
    background: url('~assets/icons/coople-manage/info/plan-shifts-bkg.svg') no-repeat top center;
    background-size: cover;
    min-height: 1140px;
    padding-top: 100px;
    .flexibility-view-wrapper {
        @include media-breakpoint-down(md) {
            display: flex;
            justify-content: center;
        }
        .flexibility-view {
            width: 100%;
            height: 100%;
            max-width: 800px;
            @include media-breakpoint-down(md) {
                margin: 0;
            }
        }
    }
}

.section-submit-hours {
    min-height: 550px;

    .submit-hours-view {
        width: 100%;
        max-width: 335px;
        position: absolute;
        right: 62px;
        top: -200px;
        @include media-breakpoint-down(md) {
            position: initial;
            margin: 58px 0;
        }
    }
}
</style>
