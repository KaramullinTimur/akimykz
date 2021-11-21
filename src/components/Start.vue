<template>
        <section 
            class="start"
            v-if="startPage"
        >
            <div class="start__top"></div>
            <h1 class="start__header">Akimy.kz</h1>
            <div class="start__wave"></div>
                <div class="start__wrapper">
                    <p class="start__text">
                        AKIMY.KZ - это площадка для оценки работы акимов всех уровней. Каждый житель нашей страны вправе оценить работу акимов тем самым повлияв на его рейтинг в Республиканских, областных, районных рейтингах.
                    </p>
                    <button 
                        class="start__button button"
                        @click="changeStartPage"
                    >
                        Далее
                    </button>
                </div>
            <div class="start__bottom"></div>
        </section>


        <section 
            class="start"
            v-if="!startPage"
        >
            <div class="start__top"></div>
            <h1 class="start__header">Akimy.kz</h1>
            <div class="start__wave start__wave-2">
                <div class="start__pic-2">
                    <img src="../assets/img/start-img.png" alt="" class="start__img-2">
                </div>
            </div>
            <div class="start__wrapper start__wrapper-2">
                
                <p class="start__text">
                    "Важным моментом должны стать независимые социологические опросы. Они дают объективную картину реального отношения населения к качеству работы органов власти. Через опросы голоса граждан слышны напрямую, а не посредством формальных отчетов" - Президент Республики Казахстан Касым-Жомарт Токаев
                </p>
                
                <router-link to="/republic" class="start__link">
                    <button class="start__button button">Далее</button>
                </router-link>
                
            </div>
            <div class="start__bottom start__bottom-2"></div>
        </section>

</template>

<script>
export default {
    data() {
        return {
            startPage: true,
            show: true
        }
    },
    methods: {
        changeStartPage() {
            this.startPage = false;
        },
    }
}
</script>

<style lang="scss">
.start {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f7f7f7;
}
.start__top {
    flex-grow: 1;
    max-height: 20vh;
}
.start__bottom {
    flex-grow: 1;
    max-height: 14vh;
    background-color: #51bcf0;
}
.start__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    background-color: #51bcf0;
}
.start__header {
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    letter-spacing: 0.05em;
    color: #424242;
    text-align: center;
    text-transform: uppercase;
}
.start__wave {
    flex-shrink: 0;
    width: 100%;
    height: 24vh;
    background: url('../assets/img/start-bg.svg') no-repeat bottom / 100% 100%;
}
.start__text {
    padding: 0 10px;
    max-width: 348px;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #f7f7f7;
}
.button {
    padding: 0 55px;
    height: 38px;
    background-color: #fff;
    border-radius: 12px;
    border: 0;
    
    box-shadow: 0 5px 15px rgb(0, 0, 0, 0.15);
    cursor: pointer;
}
.button:hover {
    opacity: 0.9;
}
.start__link {
    font-weight: normal;
    font-size: 16px;
    color: #4e4d4d;
}
.start__loading-text {
    margin-top: 8vh;
    font-weight: 600;
    font-size: 30px;
    color: #f7fdff;
}
.start__wrapper-3 {
    justify-content: start;
}

// Second start page
.start__wrapper-2 {
    background-color: #f86c5f;
}
.start__wave-2 {
    background: url('../assets/img/start-bg-red.svg') no-repeat top / 100% 100%;
    position: relative;
}
.start__bottom-2 {
    background-color: #f86c5f;
}
.start__pic-2 {
    position: absolute;
    bottom: 1vh;
    left: 50%;
    transform: translateX(-50%);
    width: 12vh;
    height: 12vh;
    border-radius: 50%;
}
.start__img-2 {
     width: 100%;
}


// Animations
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter {
    color: red;
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}

</style>