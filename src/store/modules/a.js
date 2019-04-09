const state = {
    money : 1,
}

const mutations = {
    add(state,params){
        state.money += params;
    },
    reduce(state,params) {
        state.money -= params;
    }
}

const actions = {
    add: ({commit},params) => {
        commit('add',params);
    },
    reduce: ({commit},params) => {
        commit('reduce',params);
    }
}

export default {
    namespaced:true,//开启命名空间
    state,
    mutations,
    actions
}