const state = {
    showComponent: false,
};

const mutations = {
    setToggleShowComponent(state) {
        state.showComponent = !state.showComponent;
        console.log("showComponent toggled:", state.showComponent);
    },
};

const actions = {
    toggleShowComponent({ commit }) {
        commit('setToggleShowComponent');
    },
};

const getters = {
    showComponent(state) {
        console.log("getter",state)
        return state.showComponent;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
