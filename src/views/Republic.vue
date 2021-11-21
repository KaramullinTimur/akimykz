<template>
    <Loading
        v-if="loading"    
    />
    <section v-else class="republic">
        <div class="container">
            <div class="republic__filters">Фильтры</div>
            <h2 class="republic__title">
                Республиканский рейтинг
            </h2>
            <div class="republic__subtitle">
                Акимы областей и городов <br> Республиканского значения
            </div>
            <div class="republic__tabs">
                <div 
                    class="republic__tabs-item"
                    @click="setTab('first')"
                    :class="{ active : currentTab === 'first'}"
                >
                    Областные акимы
                </div>
                <div 
                    class="republic__tabs-item"
                    @click="setTab('second')"
                    :class="{ active : currentTab === 'second'}"
                >
                    Районные акимы
                </div>
                <div 
                    class="republic__tabs-item"
                    @click="setTab('third')"
                    :class="{ active : currentTab === 'third'}"
                >
                    Сельские акимы
                </div>
            </div>
            <ul class="republic__list">
                <li 
                    class="republic__item"
                    v-for="company in companiesByTabs" :key="company.id"
                >
                    <router-link 
                        class="republic__item-link"
                        :to="'/region/' + company.id"
                    >
                        <div class="republic__item-pic">
                            <img :src="'https://bugor.kz/' + company.logo_image" alt="" class="republic__item-img">
                        </div>
                        <div class="republic__item-text">
                            <div class="republic__item-name">
                                {{company.name}} <span class="uppercase"></span>
                            </div>
                            <div class="republic__item-region">
                                {{company.category}}
                            </div>
                            <div class="republic__item-rating">
                                {{company.id}}
                            </div>
                        </div>
                    </router-link>
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
        companies() {
            const companies = this.$store.getters.getCompanies;
            if(companies) {
                return JSON.parse(JSON.stringify(companies));
            } else {
                return [];
            }
        },
        companiesByTabs() {
            if(this.currentTab === 'first') {
                return this.companies.filter(el => el.category === "Общестроительные работы");
            } else if (this.currentTab === 'second') {
                return this.companies.filter(el => el.category === "Проектные работы");
            } else if (this.currentTab === 'third') {
                return this.companies.filter(el => el.category === "Монтажные работы");
            } else {
                return this.companies
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
        this.$store.dispatch('fetchCompanies');
    },
    components: {
        Loading
    }
}
</script>

<style lang="scss">
.republic {
    padding: 40px 0;
    min-height: 100vh;
    background-color: #f7f7f7;
}
.republic__filters {
    margin-bottom: 34px;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    color: #51bcf0;
    text-align: right;
}
.republic__title {
    margin-bottom: 32px;
    font-weight: bold;
    font-size: 24px;
    line-height: 100%;
    color: #424242;
    text-align: center;
}
.republic__subtitle {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    color: #424242;
    text-align: center;
}
.republic__tabs {
    margin: 0 auto;
    max-width: 425px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 6px;
}
.republic__tabs-item {
    margin-bottom: 56px;
    min-height: 24px;
    padding: 0 10px;
    border: 1px solid #707070;
    border-radius: 10px;
    background-color: transparent;
    font-weight: 600;
    font-size: 11px;
    color: #424242;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.republic__tabs-item.active {
    color: #f7f7f7;
    background-color: #51bcf0;
}
.republic__list {
    padding: 0 28px;
}
.republic__item { 
    margin-bottom: 43px;
}
.republic__item-link {
    display: flex;
}
.republic__item-pic {
    margin-right: 14px;
    width: 105px;
    height: 105px;
    border-radius: 50%;
    background-color: #d3d3d3;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
.republic__item-img {
    height: 100%;
}
.republic__item-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
}
.republic__item-name {
    margin-bottom: 7px;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    color: #3a3c3c;
}

.republic__item-region {
    font-weight: bold;
    font-size: 13px;
    line-height: 100%;
    color: #3a3c3c;
}
.republic__item-rating {
    margin-top: auto;
    margin-right: 20px;
    align-self: end;
    font-weight: bold;
    font-size: 23px;
    color: #51bcf0;
}


@media screen and (max-width: 425px) {
    .republic__list {
        padding: 0 10px;
    }
}
</style>
