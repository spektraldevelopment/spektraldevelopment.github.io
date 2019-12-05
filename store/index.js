const actions = {
    // nuxtServerInit can only be called from root of store
    async nuxtServerInit({
        dispatch
    }) {
        await dispatch('projects/GET_PROJECTS');
    },
};

export default {
    actions
}