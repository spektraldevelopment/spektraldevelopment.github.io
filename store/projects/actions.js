import axios from 'axios';

export default {

    GET_PROJECTS({
        commit
    }) {
        return axios.get('https://portfolio-6a205.firebaseio.com/project.json')
            .then(result => {
                const projectsArray = [];

                for (const key in result.data) {
                    projectsArray.unshift({
                        ...result.data[key],
                        id: key
                    });
                }

                commit('setProjects', projectsArray);
                commit('setProjectsLoaded', true);
            })
            .catch(err => {
                console.error(err);
            })
    },
    SET_PROJECT({
        commit
    }, postData) {
        const createdPost = {
            ...postData,
            updatedDate: new Date()
        };

        return axios
            .post("https://portfolio-6a205.firebaseio.com/project.json", createdPost)
            .then(result => {
                commit('addProject', {
                    ...createdPost,
                    id: result.data.name
                });
            })
            .catch(err => {
                console.error(err);
            });
    },
    UPDATE_PROJECT({
        commit
    }, putData) {
        const updatedPost = {
            ...putData,
            updatedDate: new Date()
        };

        return axios
            .put(`https://portfolio-6a205.firebaseio.com/project/${updatedPost.id}.json`, updatedPost)
            .then(result => {
                commit('editProject', updatedPost);
            })
            .catch(err => {
                console.error(err);
            });
    },
    DELETE_PROJECT({
        commit
    }, projectID) {
        return axios
            .delete(`https://portfolio-6a205.firebaseio.com/project/${projectID}.json`)
            .then(result => {
                commit('deleteProject', projectID);
            })
            .catch(err => {
                console.error(err);
            });
    }
}