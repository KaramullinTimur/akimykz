import { createStore } from 'vuex'

export default createStore({
    state: {
        loading: true,
        companies: [],
        companyById: {},
        adverts: [],
    },
    getters: {
        getCompanies(state) {
            return state.companies.items;
        },
        getCompanyById(state) {
            return state.companyById;
        },
        getAdverts(state) {
            return JSON.parse(JSON.stringify(state.adverts));
        },
    },
    mutations: {
        startLoading(state) {
            state.loading = true;
        },
        setCompanies(state, companies) {
            state.companies = companies;
            state.loading = false;
        },
        setCompanyById(state, companyById) {
            state.companyById = companyById;
            state.loading = false;
        },
        setAdverts(state, adverts) {
            state.adverts = adverts;
            state.loading = false;
        }
    },
    actions: {
        fetchCompanies({commit}) {
            const headers = {
                'Content-Type': 'application/json',
            };
            headers.Authorization = `Bearer QWiPMVipnypPazuef13pkGmNC-Fn_5vO`;
            fetch(`https://api.bugor.kz/v1/companies?page=1&per-page=50`, {
                method: 'GET',
                cache: 'no-cache',
                headers,
            })
                .then(response => response.json())
                .then(companies => {
                    setTimeout(()=> {
                        commit('setCompanies', companies)
                    }, 2000)
                })
        },
        fetchCompanyById({commit}, id) {
            const headers = {
                'Content-Type': 'application/json',
            };
            headers.Authorization = `Bearer QWiPMVipnypPazuef13pkGmNC-Fn_5vO`;
            fetch(`https://api.bugor.kz/v1/companies/${id}`, {
                method: 'GET',
                cache: 'no-cache',
                headers,
            })
                .then(response => response.json())
                .then(companyById => {
                    setTimeout(()=> {
                        commit('setCompanyById', companyById)
                    }, 2000)
                })
        },
        fetchAdverts({commit}) {
            const headers = {
                'Content-Type': 'application/json',
            };
            headers.Authorization = `Bearer QWiPMVipnypPazuef13pkGmNC-Fn_5vO`;
            fetch(`https://api.bugor.kz/v1/adverts?page=1&per-page=20`, {
                method: 'GET',
                cache: 'no-cache',
                headers,
            })
                .then(response => response.json())
                .then(adverts => {
                    setTimeout(()=> {
                        commit('setAdverts', adverts.items)
                    }, 2000)
                })
        },
    },
})
