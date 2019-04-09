const state = {
    count : 10,
}

const mutations = {
    add(state){
        state.count ++;
    },
    reduce(state) {
        state.count --;
    }
}

const actions = {
    add: ({commit}) => {
        commit('add');
    },
    reduce: ({commit}) => {
        commit('reduce');
    }
}

export default {
    namespaced:true,//开启命名空间
    state,
    mutations,
    actions
}