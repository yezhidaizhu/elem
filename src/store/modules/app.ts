
const app = {
    namespaced: true,
    state: {
        sideCollapsed: false,
    },
    actions: {
        onChangeSideCollapsed({ commit }, state: Boolean) {
            commit('save', { sideCollapsed: state });
        }
    },
    mutations: {
        save(state, payload) {
            if (({}).toString.call(payload) !== '[object Object]') {
                console.error("payload must be an object");
                return;
            }
            for (const key in payload) {
                if (Object.prototype.hasOwnProperty.call(payload, key)) {
                    const value = payload[key];
                    state[key] = value;
                }
            }
        }
    },
}

export default app;