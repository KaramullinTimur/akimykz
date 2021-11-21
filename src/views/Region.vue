<template>
    <Loading
        v-if="loading"    
    />
    <section v-else class="region">
        <div class="container">
            <h2 class="region__title">
                Алматинская область
            </h2>
            <div class="region__title">
                Аким области
            </div>
            <div class="region__name">
                {{company.name}}
            </div>
            <div class="region__profile">
                <div class="region__profile-value">
                    {{company.id}}
                </div>
                <div class="region__profile-pic">
                    <img :src="'https://bugor.kz/' + company.logo_image" alt="" class="region__profile-img">
                </div>
                <div class="region__profile-value">
                    {{company.id}}
                </div>
                <div class="region__profile-rating">{{company.id}}</div>
            </div>
            <div class="region__tabs">
                <div 
                    class="region__tabs-item" 
                    @click="setTab('first')"
                    :class="{ active : currentTab === 'first'}"
                >
                    Районы
                </div>
                <div 
                    class="region__tabs-item"
                    @click="setTab('second')"
                    :class="{ active : currentTab === 'second'}"
                >
                    Сельские
                </div>
                <div 
                    class="region__tabs-item"
                    @click="setTab('third')"
                    :class="{ active : currentTab === 'third'}"
                >
                    Об акиме
                </div>
            </div>
            <p v-if="currentTab === 'third'">
                {{company.details}}
            </p>
            <ul v-else class="region__list">
                <li 
                    class="region__item"
                    v-for="advert in advertsByTabs" :key="advert.id"
                >
                    <a href="" class="region__item-link">
                        <div class="region__item-pic">
                            <img :src="'https://bugor.kz/' + company.thumb_image" alt="" class="region__item-img">
                        </div>
                        <div class="region__item-text">
                            <div class="region__item-name">{{advert.title}} <span class="uppercase"></span></div>
                            <div class="region__item-region">{{advert.sub_region}}</div>
                            <!-- <div class="region__item-region">Алматинская область</div> -->
                        </div>
                        <div class="region__item-rating">{{advert.id}}</div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import Loading from '@/components/Loading.vue'
export default {
    data() {
        return {
            currentTab: 'first',
        }
    },
    computed: {
        loading() {
            return this.$store.state.loading;
        },
        company() {
            return this.$store.getters.getCompanyById;
        },
        adverts() {
            const adverts = this.$store.getters.getAdverts;
            if(adverts) {
                console.log(adverts)
                return adverts
            } else {
                return [];
            }
        },
        advertsByTabs() {
            if(this.currentTab === 'first') {
                return this.adverts.filter(el => el.status === 0);
            } else if (this.currentTab === 'second') {
                return this.adverts.filter(el => el.status === 1);
            } else {
                return this.adverts
            }
        }
    },
    methods: {
        setTab(tab) {
            this.currentTab = tab;
        },
    },
    mounted() {
        this.$store.commit('startLoading');
        this.$store.dispatch('fetchCompanyById', +this.$route.params.id);
        this.$store.dispatch('fetchAdverts');
    },
    components: {
        Loading
    }
}
</script>

<style lang="scss">
.region {
    padding: 44px 0;
    min-height: 100vh;
    background-color: #f7f7f7;
}
.region__title {
    margin-bottom: 15px;
    font-size: 24px;
    color: #424242;
    font-weight: bold;
    text-align: center;
}
.region__name {
    margin-bottom: 22px;
    font-size: 24px;
    color: #424242;
    font-weight: 600;
    text-align: center;
}
.region__profile {
    position: relative;
    margin: 0 auto;
    margin-bottom: 42px;
    max-width: 252px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.region__profile-value {
    margin-bottom: 46px;
    font-size: 16px;
    color: #000000;
    font-weight: bold;
    text-align: center;
}
.region__profile-pic {
    width: 132px;
    height: 132px;
    border-radius: 50%;
    filter: drop-shadow(0px 3px 5px rgba(0,0,0,0.1));
    background-color: #bfd4fc;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
.region__profile-img {
    height: 100%;
}
.region__profile-rating {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 55%);
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background-color: #51bcf0;
    font-size: 13px;
    color: #ffffff;
    font-weight: 600;
    line-height: 43px;
    text-align: center;
}
.region__tabs {
    margin: 0 auto;
    margin-bottom: 39px;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.region__tabs-item {
    padding: 0 17px;
    font-weight: normal;
    font-size: 12px;
    color: #000000;
    text-align: center;
    cursor: pointer;
}
.region__tabs-item.active {
    height: 22px;
    line-height: 22px;
    color: #f7f7f7;
    background-color: #51bcf0;
    border: 1px solid #707070;
    border-radius: 11px;
}
.region__list {
    margin: 0 auto;
    max-width: 520px;
}
.region__item {
    margin-top: -24px;
    padding: 23px 14px 14px 17px;
    border-radius: 15px;
    filter: drop-shadow(0px 3px 11.5px rgba(0,0,0,0.15));
    background-color: #f9f9f9;
}
.region__item-link {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
}
.region__item-pic {
    margin-right: 5px;
    width: 69px;
    height: 69px;
    border-radius: 50%;
    background-color: #bfd4fc;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
.region__item-img {
    height: 100%;
}
.region__item-text {
    flex-grow: 1;
    margin-right: 5px;
}
.region__item-name {
    margin-top: 2px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 100%;
    color: #424242;
    font-weight: 600;
}
.region__item-region {
    margin-left: 16px;
    font-size: 12px;
    line-height: 100%;
    font-weight: normal;
    color: #757575;
}
.region__item-rating {
    margin-top: 13px;
    font-size: 24px;
    line-height: 100%;
    color: #51bcf0;
    font-weight: bold;
}


@media screen and (max-width: 360px) {
    .region__item {
        padding: 20px 10px 12px;
    }
}

</style>