<template>
    <div>
        <section class="section-home position-relative">
            <header class="d-flex justify-content-center">
                <img src="~/assets/icons/logo.svg" alt="" class="logo" />
            </header>
            <div class="row">
                <div class="col-lg-6">
                    <div class="title-box">
                        <h1 class="m-0">Welcome to Coople</h1>
                        <p class="mr-3">
                            Now that your employer has invited you to download the Coople app, you
                            can start planning your shifts right away. From the app you’ll be able
                            to set your availability, find and apply for the shifts that match your
                            schedule and even submit your hours to your employer for approval.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-how-works mt-5 position-relative">
            <div class="row">
                <div class="col-lg-4">
                    <h2 class="m-0 text-center">How it works</h2>
                    <h3>Open the app</h3>
                    <p>
                        Your dashboard has been created just for you. From here you’ll be able to
                        see all the open shifts your employer has posted and apply for the ones that
                        fit your availability. You can also get a quick overview of your upcoming
                        shifts.
                    </p>
                </div>
                <div class="col offset-lg-2">
                    <object
                        class="phone-in-hand"
                        :data="require('~/assets/icons/coople-manage/welcome/phone-in-hand.svg')"
                        type="image/svg+xml"
                    ></object>
                </div>
            </div>
        </section>
        <section class="section-plan-shifts">
            <div class="row">
                <div class="col-lg-4 mt-lg-5 pt-lg-5 order-lg-2">
                    <h3 class="m-0">Select your shifts</h3>
                    <p>
                        With Coople, you have total flexibility over when you work. You choose the
                        shifts, review and confirm the details and apply with just a couple of taps.
                    </p>
                </div>
                <div class="col-lg-6 order-lg-1">
                    <img
                        src="~/assets/icons/coople-manage/welcome/shifts.svg"
                        class="select-shifts"
                    />
                </div>
            </div>
        </section>
        <section class="section-get-hired">
            <div class="row">
                <div class="col-lg-4">
                    <h3 class="m-0">Get hired</h3>
                    <p>
                        As soon as your employer selects you for a shift, you’ll be notified. All of
                        your upcoming shifts will be displayed on your in-app dashboard, and you can
                        also use the app to set your availability.
                    </p>
                </div>
                <div class="col">
                    <img
                        src="~/assets/icons/coople-manage/welcome/get-hired.svg"
                        class="get-hired"
                    />
                </div>
            </div>
        </section>
        <section class="section-submit-hours">
            <div class="row">
                <div class="col-lg-4 offset-lg-1 order-lg-2 pt-5">
                    <h3 class="m-0">Submit your hours</h3>
                    <p>
                        Using the Coople app means that you don’t have to deal with timesheets.
                        Instead you instantly submit your hours to your employer at the end of a
                        shift. As soon as your hours have been sent, your employer will receive a
                        notification and they can approve them right away.
                    </p>
                </div>
                <div class="col order-lg-1">
                    <object
                        class="submit-hours-view"
                        :data="require('~/assets/icons/coople-manage/welcome/submit-hours.svg')"
                        type="image/svg+xml"
                    ></object>
                </div>
            </div>
        </section>
        <section class="section-next mt-5">
            <h2 class="m-0 text-center">What's next?</h2>

            <div id="whatsNextCarouselCmp" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#whatsNextCarouselCmp" data-slide-to="0" class="active"></li>
                    <li data-target="#whatsNextCarouselCmp" data-slide-to="1"></li>
                    <li data-target="#whatsNextCarouselCmp" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item text-center mt-5 active" data-interval="">
                        <div class="next-step-icon d-flex justify-content-center align-items-end">
                            <img
                                src="~/assets/icons/coople-manage/welcome/download-step.svg"
                                alt=""
                            />
                        </div>
                        <h3 class="mb-4 mt-3">Download the app</h3>
                        <p>
                            If you haven’t done so already, you’ll need to follow the link in your
                            welcome email to download the Coople app. It’s important that you don’t
                            download Coople from Google Play or the App Store, as you need to get
                            the version that has been set up with your employer.
                        </p>
                    </div>
                    <div class="carousel-item text-center mt-5" data-interval="">
                        <div class="next-step-icon d-flex justify-content-center align-items-end">
                            <img src="~/assets/icons/coople-manage/welcome/setup-step.svg" alt="" />
                        </div>
                        <h3 class="mb-4 mt-3">Set up your account</h3>
                        <p>
                            Open the app and follow the simple instructions to get your account set
                            up. It only takes a couple of minutes, and once you’re done, you’ll be
                            able to see all the available shifts posted by your employer.
                        </p>
                    </div>
                    <div class="carousel-item text-center mt-5" data-interval="">
                        <div class="next-step-icon d-flex justify-content-center align-items-end">
                            <img src="~/assets/icons/coople-manage/welcome/apply-step.svg" alt="" />
                        </div>
                        <h3 class="mb-4 mt-3">Start applying</h3>
                        <p>
                            With Coople, you don’t have to worry about shifts you cannot attend.
                            Instead you simply set your availability and apply for the shifts you
                            can fit around your schedule.
                        </p>
                    </div>
                </div>
            </div>

            <div id="whatsNextDefault" class="row">
                <div class="col text-center mt-5">
                    <div class="next-step-icon d-flex justify-content-center align-items-end">
                        <img src="~/assets/icons/coople-manage/welcome/download-step.svg" alt="" />
                    </div>
                    <h3 class="mb-4 mt-3">Download the app</h3>
                    <p>
                        If you haven’t done so already, you’ll need to follow the link in your
                        welcome email to download the Coople app. It’s important that you don’t
                        download Coople from Google Play or the App Store, as you need to get the
                        version that has been set up with your employer.
                    </p>
                </div>
                <div class="col text-center mt-5">
                    <div class="next-step-icon d-flex justify-content-center align-items-end">
                        <img src="~/assets/icons/coople-manage/welcome/setup-step.svg" alt="" />
                    </div>
                    <h3 class="mb-4 mt-3">Set up your account</h3>
                    <p>
                        Open the app and follow the simple instructions to get your account set up.
                        It only takes a couple of minutes, and once you’re done, you’ll be able to
                        see all the available shifts posted by your employer.
                    </p>
                </div>
                <div class="col text-center mt-5">
                    <div class="next-step-icon d-flex justify-content-center align-items-end">
                        <img src="~/assets/icons/coople-manage/welcome/apply-step.svg" alt="" />
                    </div>
                    <h3 class="mb-4 mt-3">Start applying</h3>
                    <p>
                        With Coople, you don’t have to worry about shifts you cannot attend. Instead
                        you simply set your availability and apply for the shifts you can fit around
                        your schedule.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Welcome to Coople',
        };
    },
    head() {
        return {
            title: this.title,
        };
    },
};
</script>

<style lang="scss">
@import '~assets/styles/coople-manage-common.scss';

.section-home {
    background: url('~assets/icons/coople-manage/welcome/home-bkg.svg') no-repeat bottom center;
    background-size: cover;
    min-height: 780px;
    .title-box {
        margin-top: 85px;
        max-width: 620px;
        color: #ffffff;
        line-height: 40px;
        p {
            font-size: 27px;
            margin: 32px 0 62px 0;
        }
    }
    .home-app-views {
        position: absolute;
        top: 0;
        right: 0;
    }
    @include media-breakpoint-down(md) {
        .home-app-views {
            bottom: -40px;
            top: auto;
            width: 650px;
        }
    }
}

.section-how-works {
    min-height: 370px;
    .phone-in-hand {
        position: absolute;
        bottom: -50px;
        right: 0px;
        width: 100%;
        max-width: 750px;
        min-width: 325px;
        @include media-breakpoint-down(md) {
            position: initial;
            max-width: 525px;
            float: right;
            margin-bottom: -20px;
        }
    }
}

.section-plan-shifts {
    position: relative;
    background: url('~assets/icons/coople-manage/welcome/plan-shifts-bkg.svg') no-repeat top center;
    background-size: cover;
    height: 100%;
    min-height: 995px;
    padding-top: 100px;
    @include media-breakpoint-down(lg) {
        min-height: 800px;
        padding-top: 50px;
    }
    .select-shifts {
        position: absolute;
        top: -120px;
        left: -70px;
        width: 100%;
        max-width: 800px;
        min-width: 525px;
        @include media-breakpoint-down(lg) {
            position: initial;
            margin-left: -56px;
        }
    }
}

.section-get-hired {
    min-height: 350px;
    .get-hired {
        margin-top: -225px;
        float: right;
        max-width: 915px;
        width: 100%;
        @include media-breakpoint-down(lg) {
            margin-top: 0;
        }
    }
}

.section-submit-hours {
    .submit-hours-view {
        width: 100%;
    }
}
</style>
